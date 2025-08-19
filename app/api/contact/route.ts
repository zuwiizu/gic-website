import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
  service?: string;
  turnstileToken: string;
}

interface TurnstileResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data: TurnstileResponse = await response.json();
    return data.success;
  } catch (error) {
    console.error('Turnstile verification failed:', error);
    return false;
  }
}

async function storeSubmission(data: ContactFormData): Promise<boolean> {
  // In a real implementation, this would store to Cloudflare KV
  // For now, we'll just log it
  const submission = {
    ...data,
    timestamp: new Date().toISOString(),
    id: `lead:${Date.now()}`,
  };

  console.log('Contact form submission:', submission);

  // TODO: Store in Cloudflare KV
  // const kvNamespace = process.env.GIC_CONTACT;
  // if (kvNamespace) {
  //   await kvNamespace.put(submission.id, JSON.stringify(submission));
  // }

  return true;
}

async function sendNotification(data: ContactFormData): Promise<boolean> {
  const webhookUrl = process.env.WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.log('No webhook URL configured, skipping notification');
    return true;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: `New contact form submission from ${data.name} (${data.email})`,
        attachments: [
          {
            color: 'good',
            fields: [
              { title: 'Name', value: data.name, short: true },
              { title: 'Email', value: data.email, short: true },
              { title: 'Organization', value: data.organization, short: true },
              { title: 'Service Interest', value: data.service || 'General inquiry', short: true },
              { title: 'Message', value: data.message, short: false },
            ],
          },
        ],
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to send notification:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message || !data.turnstileToken) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    const isValidToken = await verifyTurnstile(data.turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: 'Security verification failed' },
        { status: 400 }
      );
    }

    // Store submission
    const stored = await storeSubmission(data);
    if (!stored) {
      return NextResponse.json(
        { error: 'Failed to store submission' },
        { status: 500 }
      );
    }

    // Send notification
    const notified = await sendNotification(data);
    if (!notified) {
      console.warn('Failed to send notification, but submission was stored');
    }

    return NextResponse.json(
      { message: 'Thank you for your message. We will be in touch soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

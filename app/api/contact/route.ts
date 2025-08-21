import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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

async function sendEmailNotification(data: ContactFormData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || 'info@globalinsightscollective.com';
  
  console.log('Email configuration:', {
    hasResendKey: !!resendApiKey,
    toEmail: toEmail,
    keyLength: resendApiKey ? resendApiKey.length : 0
  });
  
  if (!resendApiKey) {
    console.error('RESEND_API_KEY not configured');
    return false;
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: 'Global Insights Collective <noreply@globalinsightscollective.com>',
      to: [toEmail],
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Organization:</strong> ${data.organization}</p>
            ${data.service ? `<p><strong>Service Interest:</strong> ${data.service}</p>` : ''}
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Next Steps:</strong> Reply to this email or contact ${data.name} directly at 
              <a href="mailto:${data.email}">${data.email}</a>
            </p>
          </div>
          
          <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This email was sent from the Global Insights Collective contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </footer>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Organization: ${data.organization}
${data.service ? `Service Interest: ${data.service}` : ''}

Message:
${data.message}

Reply to this email or contact ${data.name} directly at ${data.email}

Submitted on: ${new Date().toLocaleString()}
      `
    });

    if (error) {
      console.error('Failed to send email:', error);
      return false;
    }

    console.log('Email sent successfully:', emailData?.id);
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();
    console.log('Contact form submission received:', { 
      name: data.name, 
      email: data.email, 
      organization: data.organization,
      hasMessage: !!data.message 
    });

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
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

    // TODO: Re-enable Turnstile verification when properly configured
    // Verify Turnstile token
    // const isValidToken = await verifyTurnstile(data.turnstileToken);
    // if (!isValidToken) {
    //   return NextResponse.json(
    //     { error: 'Security verification failed' },
    //     { status: 400 }
    //   );
    // }

    // Store submission
    const stored = await storeSubmission(data);
    if (!stored) {
      return NextResponse.json(
        { error: 'Failed to store submission' },
        { status: 500 }
      );
    }

    // Send email notification
    const emailSent = await sendEmailNotification(data);
    if (!emailSent) {
      console.warn('Failed to send email notification, but submission was stored');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly.' },
        { status: 500 }
      );
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

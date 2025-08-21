async function sendEmailNotification(data, env) {
  const resendApiKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_EMAIL || 'info@globalinsightscollective.com';
  
  if (!resendApiKey) {
    console.error('RESEND_API_KEY not configured');
    return false;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Resend API error:', errorData);
      return false;
    }

    const result = await response.json();
    console.log('Email sent successfully:', result.id);
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}

async function storeSubmission(data, env) {
  const submission = {
    ...data,
    timestamp: new Date().toISOString(),
    id: `lead:${Date.now()}`,
  };

  console.log('Contact form submission:', submission);

  // Store in Cloudflare KV if available
  if (env.CONTACT_SUBMISSIONS) {
    try {
      await env.CONTACT_SUBMISSIONS.put(submission.id, JSON.stringify(submission));
      console.log('Submission stored in KV');
    } catch (error) {
      console.error('Failed to store in KV:', error);
    }
  }

  return true;
}

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const data = await request.json();
      
      console.log('Contact form submission received:', { 
        name: data.name, 
        email: data.email, 
        organization: data.organization,
        hasMessage: !!data.message 
      });

      // Validate required fields
      if (!data.name || !data.email || !data.message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return new Response(JSON.stringify({ error: 'Invalid email format' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      // Store submission
      await storeSubmission(data, env);

      // Send email notification
      const emailSent = await sendEmailNotification(data, env);
      if (!emailSent) {
        console.warn('Failed to send email notification, but submission was stored');
        return new Response(JSON.stringify({ 
          error: 'Email service not configured. Please contact us directly.' 
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      return new Response(JSON.stringify({ 
        message: 'Thank you for your message. We will be in touch soon.' 
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

    } catch (error) {
      console.error('Contact form error:', error);
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
  },
};
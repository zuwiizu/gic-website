import { NextRequest, NextResponse } from 'next/server';

interface WebVital {
  name: string;
  value: number;
  id: string;
  delta: number;
  entries: any[];
}

export async function POST(request: NextRequest) {
  try {
    const vital: WebVital = await request.json();

    // Log the vital (in production, you might send to analytics service)
    console.log('Web Vital received:', {
      name: vital.name,
      value: vital.value,
      id: vital.id,
      timestamp: new Date().toISOString()
    });

    // In production, you could:
    // 1. Send to Google Analytics
    // 2. Store in Cloudflare Analytics
    // 3. Send to monitoring service like DataDog, New Relic, etc.
    
    // Example: Send to Google Analytics (if GA4 is configured)
    // if (process.env.GA_MEASUREMENT_ID) {
    //   await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${process.env.GA_MEASUREMENT_ID}&api_secret=${process.env.GA_API_SECRET}`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       client_id: vital.id,
    //       events: [{
    //         name: 'web_vital',
    //         params: {
    //           metric_name: vital.name,
    //           metric_value: vital.value,
    //           metric_delta: vital.delta
    //         }
    //       }]
    //     })
    //   });
    // }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing web vital:', error);
    return NextResponse.json(
      { error: 'Failed to process web vital' },
      { status: 500 }
    );
  }
}

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

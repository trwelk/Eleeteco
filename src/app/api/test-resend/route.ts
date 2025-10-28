import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Testing Resend API...');
    console.log('API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('API Key prefix:', process.env.RESEND_API_KEY?.substring(0, 5));

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        error: 'RESEND_API_KEY not found in environment variables',
        help: 'Create .env.local file with RESEND_API_KEY=your_key'
      }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Try with the exact format Resend expects
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['weerasooriya.trewon@gmail.com'],
      subject: 'Resend Test Email',
      html: '<p>This is a test email to verify Resend is working!</p>',
    });

    console.log('Test email result:', data);

    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent!',
      data 
    });
  } catch (error: any) {
    console.error('Test failed:', error);
    return NextResponse.json({ 
      error: error.message,
      name: error.name,
      details: error
    }, { status: 500 });
  }
}


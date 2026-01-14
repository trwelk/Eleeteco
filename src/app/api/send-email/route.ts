import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const smtpUrl = process.env.SMTP_URL;
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;

    if (!smtpUrl && (!host || !user || !pass)) {
      return NextResponse.json({ error: 'SMTP not configured' }, { status: 500 });
    }

    const transporter = smtpUrl
      ? nodemailer.createTransport(smtpUrl)
      : nodemailer.createTransport({
          host,
          port,
          secure,
          auth: { user, pass },
          requireTLS: !secure, // enforce STARTTLS on 587
          // Helpful timeouts to avoid hanging connections when banner isn't received
          connectionTimeout: 10000, // 10s
          greetingTimeout: 10000,   // 10s
          socketTimeout: 20000,     // 20s
          // Enable debug logs in development
          logger: process.env.NODE_ENV !== 'production',
          debug: process.env.NODE_ENV !== 'production',
          tls: {
            minVersion: 'TLSv1.2',
            servername: host,
          },
        });

    // Verify SMTP connection before sending (useful for debugging misconfigurations)
    try {
      await transporter.verify();
    } catch (verifyErr: any) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('SMTP verify failed:', {
          message: verifyErr?.message,
          code: verifyErr?.code,
          command: verifyErr?.command,
          response: verifyErr?.response,
        });
      }
      return NextResponse.json(
        {
          error: 'SMTP connection failed' + verifyErr,
          details: process.env.NODE_ENV !== 'production' ? verifyErr?.message : undefined,
        },
        { status: 500 }
      );
    }

    const toEmail = 'info@eleeteco.uk';
    const fromEmail = process.env.SMTP_FROM || user;

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="margin:0 0 12px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${String(message).replace(/\n/g, '<br/>')}</p>
        </div>
      `,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Email send error:', {
        message: error?.message,
        code: error?.code,
        command: error?.command,
        response: error?.response,
      });
    }
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

 

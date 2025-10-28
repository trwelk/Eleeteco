# Email Setup Guide for Contact Form

## ✅ What I've Done

I've updated your contact form to send actual emails using **Resend** (recommended solution). The form now:
- Shows loading state while sending
- Displays success/error messages
- Resets after successful submission
- Has proper error handling

## 🚀 Quick Setup Steps

### 1. Install Resend
```bash
npm install resend
```

### 2. Get Your API Key
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the key (starts with `re_`)

### 3. Add API Key to Environment Variables
Create a `.env.local` file in your project root (if it doesn't exist):
```
RESEND_API_KEY=re_your_actual_api_key_here
```

⚠️ **Important:** Never commit `.env.local` to Git! Add it to `.gitignore`.

### 4. Update the Recipient Email
In `src/app/api/send-email/route.ts`, change line 19:
```typescript
to: 'info@eleeteco.uk', // Replace with YOUR actual email
```

### 5. Test It!
1. Run your dev server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email inbox

## 📧 Alternative Email Solutions

### Option 2: SendGrid (More Features)
```bash
npm install @sendgrid/mail
```

API Route:
```typescript
import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const msg = {
    to: 'your-email@eleeteco.uk',
    from: 'noreply@yourdomain.com', // Must be verified in SendGrid
    subject: `Contact Form: ${subject}`,
    html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
```

### Option 3: Nodemailer (Use Your Own SMTP)
```bash
npm install nodemailer
```

API Route:
```typescript
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Or your SMTP server
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD, // Use app password for Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'your-email@eleeteco.uk',
      subject: `Contact Form: ${subject}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
```

## 🌐 For Production/Deployment

### Vercel Deployment
1. Add environment variable in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` with your key
   - Redeploy

### Custom Domain Setup (Resend)
1. In Resend dashboard, go to Domains
2. Add your domain (e.g., `eleeteco.uk`)
3. Add DNS records they provide
4. Verify domain
5. Update API route `from` field:
```typescript
from: 'Contact Form <noreply@eleeteco.uk>'
```

## 📊 Comparison Table

| Solution | Free Tier | Setup Difficulty | Best For |
|----------|-----------|------------------|----------|
| **Resend** | 3,000/month | ⭐ Easy | New projects, quick setup |
| **SendGrid** | 100/day | ⭐⭐ Medium | More analytics needed |
| **Nodemailer** | Unlimited | ⭐⭐⭐ Hard | Using existing email server |

## 🔒 Security Tips

1. **Never expose API keys in client code**
2. **Use environment variables** for all sensitive data
3. **Add rate limiting** to prevent spam (optional):

```typescript
// Add to API route
const rateLimitMap = new Map();

function rateLimit(ip: string) {
  const now = Date.now();
  const limit = 5; // 5 emails per hour
  const windowMs = 60 * 60 * 1000; // 1 hour

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  const { count, resetTime } = rateLimitMap.get(ip);
  
  if (now > resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (count >= limit) {
    return false;
  }

  rateLimitMap.set(ip, { count: count + 1, resetTime });
  return true;
}
```

## 🧪 Testing

Test with these scenarios:
- ✅ Valid submission
- ✅ Empty fields (should show validation)
- ✅ Invalid email format
- ✅ Network error simulation
- ✅ Spam/rate limiting

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Check server logs in terminal
3. Verify API key is correct
4. Check email didn't go to spam
5. Verify DNS records (if using custom domain)

## 🎉 You're Done!

Your contact form now sends real emails! Make sure to:
- [ ] Install Resend: `npm install resend`
- [ ] Get API key from resend.com
- [ ] Add to `.env.local`
- [ ] Update recipient email
- [ ] Test the form
- [ ] Deploy with environment variables set




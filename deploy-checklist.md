# 🚀 Quick Deployment Checklist

## Before You Deploy

### 1. Environment Variables Setup
Create a `.env.production` file with:
```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. Test Your Build Locally
```bash
npm run build
npm start
```
Visit http://localhost:3000 and test all features.

### 3. Choose Your Deployment Method

#### ✅ Recommended: GoDaddy VPS + PM2
**Best for:** Full Next.js functionality with API routes
**Cost:** $4.99 - $29.99/month
**Steps:** See DEPLOYMENT_GUIDE.md Option 1

#### ⚠️ Alternative: GoDaddy Shared Hosting
**Best for:** Static sites only (NO API routes)
**Cost:** $2.99 - $12.99/month
**Steps:** See DEPLOYMENT_GUIDE.md Option 2
**Note:** Your contact form won't work without modifications

#### 🌟 Easiest: Vercel (Recommended if possible)
**Best for:** Hassle-free deployment
**Cost:** Free tier available
**Steps:** See DEPLOYMENT_GUIDE.md Option 3

---

## Quick Deploy Steps (VPS Method)

1. **SSH into your server:**
   ```bash
   ssh username@your-server-ip
   ```

2. **Install Node.js & PM2:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

3. **Upload your code:**
   ```bash
   git clone your-repo-url
   cd your-app
   npm install
   ```

4. **Set environment variables:**
   ```bash
   nano .env.local
   # Paste your production env vars
   ```

5. **Build and start:**
   ```bash
   npm run build
   pm2 start npm --name "eleete-care" -- start
   pm2 save
   ```

6. **Setup Nginx (see full guide for details)**

7. **Setup SSL with Certbot:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## What You Need from GoDaddy

### For VPS Hosting:
- [ ] VPS server purchased
- [ ] Root/SSH access credentials
- [ ] Server IP address
- [ ] Domain pointed to server IP

### For Shared Hosting:
- [ ] cPanel access
- [ ] FTP credentials
- [ ] File Manager access

---

## Domain Configuration

### Point Your Domain to Your Server:
1. Log into GoDaddy
2. Go to "My Products" → "Domains"
3. Click DNS next to your domain
4. Add/Edit A Record:
   - Type: A
   - Name: @
   - Value: Your server IP
   - TTL: 600 seconds
5. Add CNAME for www:
   - Type: CNAME
   - Name: www
   - Value: @
   - TTL: 600 seconds

Wait 5-60 minutes for DNS propagation.

---

## Testing After Deployment

- [ ] Visit https://yourdomain.com
- [ ] Test all navigation links
- [ ] Submit contact form
- [ ] Check email delivery
- [ ] Test on mobile
- [ ] Verify SSL (green padlock)

---

## Support Resources

- **GoDaddy VPS Guide:** https://www.godaddy.com/help/vps
- **GoDaddy Support:** 1-480-505-8877
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **PM2 Documentation:** https://pm2.keymetrics.io/

---

## Need Professional Help?

If the technical setup is overwhelming, consider:
1. Hiring a developer on Fiverr/Upwork ($50-200)
2. Using GoDaddy's Website Services
3. Deploying to Vercel (much simpler)


# GoDaddy Deployment Guide for Eleete Care App

## Prerequisites
- GoDaddy VPS or Dedicated Server (cPanel with Node.js support OR unmanaged VPS)
- Domain name configured
- SSH access to your server
- Node.js 18+ installed on the server

---

## Option 1: GoDaddy VPS/Dedicated Server (Full Next.js)

### Step 1: Setup Your GoDaddy Server

#### A. Access Your Server via SSH
```bash
ssh root@your-server-ip
# Or if you have a username:
ssh your-username@your-server-ip
```

#### B. Install Node.js (if not already installed)
```bash
# For Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

#### C. Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

### Step 2: Prepare Your Local Project

#### A. Update package.json with build script
Make sure your `package.json` has:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

#### B. Create .env.production file
Copy `.env.production` and fill in your production values:
- Email credentials
- API keys
- Production URL

#### C. Build your project locally to test
```bash
npm run build
```

### Step 3: Deploy to GoDaddy Server

#### A. Upload Your Project Files

**Method 1: Using Git (Recommended)**
```bash
# On your server, navigate to web directory
cd /var/www/html  # or your web root
# Or create a custom directory
mkdir -p /home/your-username/apps
cd /home/your-username/apps

# Clone your repository
git clone https://github.com/your-username/your-repo.git eleete-app
cd eleete-app

# Install dependencies
npm install --production

# Build the application
npm run build
```

**Method 2: Using FTP/SFTP**
1. Connect to your server using FileZilla or similar FTP client
2. Upload all files EXCEPT:
   - `node_modules/` folder
   - `.next/` folder
   - `.git/` folder (optional)
3. SSH into your server and run:
```bash
cd /path/to/your/app
npm install --production
npm run build
```

#### B. Configure Environment Variables
```bash
# Create .env.local or .env.production on the server
nano .env.local

# Add your production environment variables
# Save and exit (Ctrl+X, Y, Enter)
```

#### C. Start the Application with PM2
```bash
# Start the app
pm2 start npm --name "eleete-care" -- start

# Or use the ecosystem config
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Set PM2 to start on system boot
pm2 startup
# Follow the instructions it provides
```

### Step 4: Configure Nginx as Reverse Proxy

#### A. Install Nginx (if not installed)
```bash
sudo apt-get update
sudo apt-get install nginx
```

#### B. Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/eleete-care
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### C. Enable the Configuration
```bash
sudo ln -s /etc/nginx/sites-available/eleete-care /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 5: Setup SSL Certificate (HTTPS)

#### A. Install Certbot
```bash
sudo apt-get install certbot python3-certbot-nginx
```

#### B. Obtain SSL Certificate
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

#### C. Follow the prompts to complete SSL setup

### Step 6: Configure Firewall
```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

---

## Option 2: GoDaddy Shared Hosting (Static Export Only)

**Note:** This option works ONLY if you convert your app to static export. 
Your API routes will NOT work with this method.

### Step 1: Modify next.config.js for Static Export
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
```

### Step 2: Build Static Files
```bash
npm run build
```

This creates an `out/` folder with static files.

### Step 3: Upload to GoDaddy
1. Log into GoDaddy cPanel
2. Open File Manager
3. Navigate to `public_html/` directory
4. Upload all files from the `out/` folder
5. Your site should be live at your domain

**Important:** With static export, your email forms won't work. You'll need to:
- Use a third-party form service (Formspree, EmailJS)
- Or set up API routes on a separate Node.js backend

---

## Option 3: Deploy to Vercel (Easiest - Not GoDaddy)

If GoDaddy setup is too complex, consider Vercel (free tier):

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Add environment variables
6. Click "Deploy"

### Step 3: Connect Your GoDaddy Domain to Vercel
1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your domain: `yourdomain.com`
3. Vercel will provide DNS records
4. In GoDaddy DNS settings, add the A and CNAME records
5. Wait for DNS propagation (5-60 minutes)

---

## Post-Deployment Checklist

- [ ] Test all pages and functionality
- [ ] Verify contact form submissions work
- [ ] Check email delivery (test send-email API)
- [ ] Verify all images load correctly
- [ ] Test on mobile devices
- [ ] Check SSL certificate (HTTPS)
- [ ] Set up monitoring (UptimeRobot, StatusCake)
- [ ] Configure Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

---

## Updating Your App

### If using Git:
```bash
# On your server
cd /path/to/your/app
git pull origin main
npm install
npm run build
pm2 restart eleete-care
```

### If using FTP:
1. Build locally: `npm run build`
2. Upload `.next/` folder and any changed files via FTP
3. Restart PM2: `pm2 restart eleete-care`

---

## Troubleshooting

### App not loading
```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs eleete-care

# Check Nginx status
sudo systemctl status nginx

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log
```

### Email not sending
- Check environment variables are set correctly
- Verify Gmail app password is correct
- Check PM2 logs for errors

### Images not loading
- Ensure `public/images/` folder is uploaded
- Check file permissions: `chmod -R 755 public/images/`

### 502 Bad Gateway
- Check if Next.js is running: `pm2 status`
- Verify port 3000 is accessible: `netstat -tulpn | grep 3000`
- Restart services: `pm2 restart eleete-care && sudo systemctl restart nginx`

---

## Need Help?

- **GoDaddy Support:** 24/7 phone and chat support
- **Next.js Docs:** https://nextjs.org/docs/deployment
- **PM2 Docs:** https://pm2.keymetrics.io/docs/usage/quick-start/

Good luck with your deployment! 🚀


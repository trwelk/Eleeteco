# 🚀 Simple Deployment Guide for eleeteco.uk

## ⚠️ Important: Your App Has API Routes

Your contact form uses `/api/send-email` which requires a Node.js server.
**You CANNOT use static hosting (like basic GoDaddy hosting).**

---

## ✅ RECOMMENDED: Deploy to Vercel (FREE & Easy)

### Why Vercel?
- ✅ FREE for your use case
- ✅ Works with your API routes
- ✅ Automatic SSL (HTTPS)
- ✅ Deploy in 5 minutes
- ✅ Use your domain: eleeteco.uk
- ✅ No server management needed

### Step-by-Step Instructions:

#### 1. Create GitHub Account (if you don't have one)
Go to [github.com](https://github.com) and sign up

#### 2. Push Your Code to GitHub

```bash
# In your project folder (C:\work\devwork\personal\App)

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit for Eleete Care website"

# Create a repository on GitHub (via website):
# - Go to github.com
# - Click "New Repository"
# - Name it: "eleete-care-website"
# - Keep it Private or Public (your choice)
# - DON'T initialize with README (you already have code)
# - Click "Create Repository"

# Connect your local code to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/eleete-care-website.git
git branch -M main
git push -u origin main
```

#### 3. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "New Project"
5. Import your repository: `eleete-care-website`
6. Configure Project:
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
7. **Add Environment Variables:**
   Click "Environment Variables" and add:
   ```
   GMAIL_USER = your-email@gmail.com
   GMAIL_APP_PASSWORD = your-16-character-app-password
   NEXT_PUBLIC_SITE_URL = https://eleeteco.uk
   ```
8. Click **"Deploy"**

Wait 2-3 minutes... Your site will be live at `your-project.vercel.app`

#### 4. Connect Your Domain (eleeteco.uk)

**In Vercel:**
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add domain: `eleeteco.uk`
4. Also add: `www.eleeteco.uk`
5. Vercel will show you DNS records to add

**In GoDaddy:**
1. Log into [godaddy.com](https://www.godaddy.com)
2. Go to "My Products" → "Domains"
3. Find `eleeteco.uk` → Click "DNS"
4. Update/Add these records:

   **For apex domain (eleeteco.uk):**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21` (Vercel's IP)
   - TTL: `600 seconds`

   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com.`
   - TTL: `600 seconds`

5. Save changes
6. Wait 5-60 minutes for DNS to update

#### 5. Verify SSL Certificate
Once DNS propagates, Vercel automatically provisions SSL.
Visit `https://eleeteco.uk` - you should see the green padlock!

---

## 🎯 After Deployment Checklist

- [ ] Visit https://eleeteco.uk
- [ ] Test all pages work
- [ ] Test contact form
- [ ] Check you receive emails
- [ ] Test on mobile phone
- [ ] Verify SSL certificate (green padlock)

---

## 🔄 How to Update Your Website

After making changes:

```bash
# Save your changes
git add .
git commit -m "Updated website content"
git push

# Vercel automatically deploys! (takes 1-2 minutes)
```

---

## 📱 Vercel Dashboard Features

- **Analytics:** See visitor statistics
- **Deployments:** View all deployments and rollback if needed
- **Environment Variables:** Update email settings
- **Logs:** Debug any issues
- **Preview Deployments:** Test changes before going live

---

## 💰 Cost Breakdown

### Vercel Option (RECOMMENDED):
- Hosting: **FREE** ✅
- Domain (GoDaddy): **~£10-15/year** (you already have this)
- SSL Certificate: **FREE** ✅
- **Total: £10-15/year** (just domain renewal)

### GoDaddy VPS Option:
- VPS Hosting: **£5-30/month** (£60-360/year)
- Domain: **£10-15/year**
- SSL: **FREE** (with Let's Encrypt)
- **Total: £70-375/year**

**Savings with Vercel: £60-360/year!**

---

## ❓ Common Questions

### "Why not use GoDaddy hosting I already paid for?"

**If you have GoDaddy Shared Hosting:**
- It doesn't support Node.js
- Your API routes (contact form) won't work
- You'd need to upgrade to VPS (more expensive)

**If you have GoDaddy Website Builder:**
- You can't deploy custom Next.js apps there

### "Is my data safe on Vercel?"

Yes! Vercel is:
- Used by major companies (Nike, Uber, McDonald's)
- SOC 2 Type II certified
- GDPR compliant
- Backed by top investors

### "Can I move away from Vercel later?"

Yes! Your code stays on GitHub. You can deploy anywhere:
- GoDaddy VPS
- AWS
- DigitalOcean
- Netlify
- Your own server

---

## 🆘 Need Help?

### Vercel Support:
- Documentation: https://vercel.com/docs
- Community: https://github.com/vercel/vercel/discussions
- Email: support@vercel.com

### If you get stuck:
1. Check the Vercel deployment logs
2. Verify environment variables are set
3. Test the build locally: `npm run build && npm start`
4. Check your email credentials are correct

---

## 🎉 You're Almost There!

Just follow the steps above, and your website will be live at **eleeteco.uk** in under an hour!

**Next Steps:**
1. Push to GitHub (10 mins)
2. Deploy to Vercel (5 mins)
3. Connect domain (5 mins + DNS wait time)
4. Done! 🚀


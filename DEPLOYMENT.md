# Deployment Guide - Prime Home Construction Website

## Quick Start: Deploy to Vercel

### Method 1: One-Click Deploy (Easiest)

1. **Push to GitHub**:
   ```bash
   cd prime-home-construction
   git init
   git add .
   git commit -m "Initial commit: Prime Home Construction website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"
   - Done! Your site is live in ~2 minutes

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd prime-home-construction

# Login to Vercel
vercel login

# Deploy (first time - follow prompts)
vercel

# Deploy to production
vercel --prod
```

## Pre-Deployment Checklist

- [ ] Replace placeholder hero image with actual construction photo
- [ ] Add real project images to `/public/projects/`
- [ ] Update company contact information in Footer.tsx
- [ ] Customize services, projects, and testimonials content
- [ ] Test on mobile devices
- [ ] Run `npm run build` to verify build succeeds
- [ ] Test all navigation links work

## Environment Setup (Optional)

If you need environment variables (e.g., for form submissions):

1. Create `.env.local`:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   # Add other variables as needed
   ```

2. Add to Vercel:
   - Go to Project Settings → Environment Variables
   - Add each variable

## Custom Domain Setup

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain (e.g., primehomeconstruction.com)

2. **Update DNS** (at your domain registrar):
   - Add Vercel's DNS records as shown in dashboard
   - Wait for DNS propagation (5-30 minutes)

3. **SSL Certificate**:
   - Automatically provisioned by Vercel
   - HTTPS enabled immediately

## Image Optimization Tips

Before adding images to your site:

1. **Resize images**:
   - Hero image: 1920x1080px (landscape)
   - Project images: 1200x800px
   - Logos: Use existing files (already optimized)

2. **Compress images**:
   - Use tools like [TinyPNG](https://tinypng.com)
   - Or use Squoosh (squoosh.app)
   - Target: Under 500KB per image

3. **Use WebP format** (Next.js handles this automatically)

## Post-Deployment

### Monitor Performance
- Check Vercel Analytics (free)
- Test on [PageSpeed Insights](https://pagespeed.web.dev)
- Target: 90+ score on mobile

### Connect Contact Form
You'll need to connect the form to a backend service:

**Options**:
1. **Formspree** (easiest): formspree.io
2. **Vercel Serverless Functions**
3. **EmailJS**: emailjs.com
4. **Custom API endpoint**

Update `components/ContactForm.tsx` to submit to your chosen service.

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` → Auto-deploy to production
- Every PR → Preview deployment with unique URL
- Zero downtime deployments

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Ensure images are in `/public/` directory
- Check file paths (case-sensitive)
- Verify image files aren't corrupted

### Styles Not Applied
- Clear browser cache
- Check Tailwind classes are correct
- Verify `globals.css` is imported in layout

## Support

- Vercel Docs: vercel.com/docs
- Next.js Docs: nextjs.org/docs
- Project README: See README.md

---

**Your website is ready to go live!** 🚀

Estimated time to deploy: **5-10 minutes**

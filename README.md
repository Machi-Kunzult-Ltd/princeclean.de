# 🧽 PrinceClean Teppichreinigung Website

Modern Next.js website for PrinceClean carpet cleaning services in Berlin.

🌐 **Live Site:** [https://princeclean.de](https://princeclean.de)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd princeclean-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your:
- `RESEND_API_KEY` - Your Resend API key for contact form emails
- `NEXT_PUBLIC_SITE_URL` - Your production site URL (https://princeclean.de)

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure
```
princeclean-website/
├── src/
│   ├── app/                    # Next.js 13+ App Router pages
│   │   ├── page.js            # Homepage
│   │   ├── kontakt/           # Contact page
│   │   ├── services/          # Services page
│   │   ├── galerie/           # Gallery page
│   │   ├── preise/            # Pricing page
│   │   └── api/               # API routes
│   │       └── send/          # Contact form API
│   ├── components/            # React components
│   │   ├── Header.js         
│   │   ├── Footer.js
│   │   ├── ContactForm.js
│   │   └── ...
│   └── styles/               # CSS/styling
├── public/                   # Static assets (images, etc.)
├── .env.local               # Environment variables (not in git)
├── .env.local.example       # Environment template
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## 🌐 Deployment

### Current Setup: Vercel (Recommended) ✅

The site is currently deployed on **Vercel** with automatic deployments from GitHub.

**Architecture:**
```
GitHub (source code)
    ↓ (auto-deploy on push)
Vercel (hosting + builds)
    ↓ (DNS)
Cloudflare (nameservers + CDN)
    ↓
princeclean.de (your domain)
```

### How It Works:

1. **Push to GitHub** → Triggers automatic deployment
2. **Vercel builds** → Compiles Next.js app
3. **Vercel deploys** → Publishes to production
4. **Cloudflare DNS** → Routes traffic to Vercel
5. **Site goes live** → Updates in 1-2 minutes

### Making Updates:
```bash
# Make your changes locally
git add .
git commit -m "Description of changes"
git push origin main

# Vercel automatically deploys!
# Check deployment status: https://vercel.com/dashboard
```

### Environment Variables on Vercel:

Set these in Vercel Dashboard → Project Settings → Environment Variables:

- `RESEND_API_KEY` - Your Resend API key
- `NEXT_PUBLIC_SITE_URL` - Production URL

### DNS Configuration:

**Domain:** princeclean.de (registered with One.com)

**Nameservers (Cloudflare):**
- `maisie.ns.cloudflare.com`
- `memphis.ns.cloudflare.com`

**DNS Records (in Cloudflare):**
- A record: `princeclean.de` → `216.198.79.1` (Vercel IP)
- CNAME: `www` → `e462b5f053d17716.vercel-dns-017.com`
- Proxy Status: **DNS only** (gray cloud)

**Important:** All One.com DNS records and redirects must be **disabled** since Cloudflare handles DNS.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Email:** Resend API
- **Hosting:** Vercel
- **DNS:** Cloudflare
- **Domain:** One.com

## 📧 Contact Form

The contact form uses the Resend API to send emails.

**Setup:**
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (or use a verified email)
3. Get your API key
4. Add to `.env.local` and Vercel environment variables

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Key Files to Edit

- **Homepage:** `src/app/page.js`
- **Contact Form:** `src/components/ContactForm.js`
- **Email API:** `src/app/api/send/route.js`
- **Styling:** `src/app/globals.css`
- **Site Config:** `next.config.js`

## 🐛 Troubleshooting

### Site not updating after push?

1. Check Vercel deployment status
2. Check Vercel build logs for errors
3. Verify environment variables are set

### Contact form not working?

1. Check `RESEND_API_KEY` is set in Vercel
2. Verify domain is verified in Resend
3. Check Vercel function logs

### DNS issues?

1. Verify Cloudflare nameservers are active
2. Check DNS propagation: [dnschecker.org](https://dnschecker.org)
3. Ensure One.com redirects are **disabled**
4. Ensure One.com DNS records are **disabled**

### Old site still showing?

1. Clear browser cache (Cmd+Shift+Delete → All Time → Clear All)
2. Try incognito/private mode
3. Check One.com for any active redirects
4. Wait 5-10 minutes for DNS propagation

## 📝 License

Private project for PrinceClean Teppichreinigung.

## 👤 Contact

**PrinceClean Teppichreinigung**
- Website: [princeclean.de](https://princeclean.de)
- Email: kontakt@princeclean.de
- Phone: +49 30 224 59 738

---

Built with ❤️ using Next.js and Vercel
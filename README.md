# Prime Home Construction Website

A modern, mobile-first construction business website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Stunning Hero Section**: Full-screen, attention-grabbing hero with animations
- **Mobile-First Design**: Optimized for all devices with responsive layouts
- **Project Gallery**: Filterable project showcase with modal previews
- **Contact Form**: Validated quote request form with React Hook Form
- **Testimonials Carousel**: Auto-rotating client testimonials
- **Smooth Animations**: Framer Motion for professional interactions
- **SEO Optimized**: Proper metadata and semantic HTML
- **Fast Performance**: Optimized for Vercel deployment

## Color Palette

- Primary Peach: `#EDBAA6`
- Terracotta: `#DB957B`
- Dark Teal: `#163B3D`

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
prime-home-construction/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   ├── projects/           # Projects page
│   └── contact/            # Contact page
├── components/
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services overview
│   ├── ProjectGallery.tsx  # Filterable project grid
│   ├── Testimonials.tsx    # Testimonial carousel
│   ├── ContactForm.tsx     # Contact form with validation
│   └── Footer.tsx          # Site footer
└── public/
    ├── logo/               # Brand logos
    └── hero-construction.jpg  # Hero background image
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Your site will be live in minutes!

## Customization

### Adding Your Own Images

Replace the placeholder hero image:
- Add your hero image to `/public/hero-construction.jpg`
- Add project images to `/public/projects/`

### Updating Content

- **Company Info**: Edit contact details in `components/Footer.tsx`
- **Services**: Modify services array in `components/Services.tsx`
- **Projects**: Update projects array in `components/ProjectGallery.tsx`
- **Testimonials**: Edit testimonials array in `components/Testimonials.tsx`

### Brand Colors

Colors are defined in `app/globals.css`

## Mobile Optimization

- Touch-friendly buttons (44px minimum)
- Responsive breakpoints: 320px, 768px, 1024px
- Swipeable carousels on mobile
- Hamburger menu for mobile navigation
- Fast loading (<3s on mobile networks)

## License

© 2025 Prime Home Construction. All rights reserved.

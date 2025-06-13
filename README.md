<p align="center">
  <img alt="OFAM Agro Enterprise" src="./public/ofam-logo.svg" width="300">
</p>

<h1 align="center">
  OFAM Agro Enterprise
</h1>

<p align="center">
Premium palm oil ecommerce platform - Pioneering sustainable palm oil production in Nigeria
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/Medusa-2.0-9B5DE5?style=flat" alt="Medusa 2.0" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat&logo=tailwind-css" alt="Tailwind CSS" />
</p>

## 🌴 About OFAM Agro Enterprise

OFAM Agro Enterprise is a Nigerian startup dedicated to producing premium quality palm oil through sustainable farming practices and innovative processing methods. Our platform serves restaurants, distributors, chefs, and food businesses across Nigeria with authentic, high-quality palm oil.

### 🎯 Our Mission
To produce the finest quality palm oil while supporting Nigerian agricultural communities and maintaining the highest environmental standards. Every bottle represents our commitment to excellence and sustainability.

## ✨ Features

### 🛒 **Ecommerce Platform**
- Product catalog with palm oil varieties
- Shopping cart and secure checkout
- Stripe payment integration
- Customer accounts and order management
- Regional shipping across Nigeria

### 🎨 **Brand Experience**
- Custom OFAM branding with olive green and orange color scheme
- Interactive animated components with Framer Motion
- Magnetize buttons with particle effects
- Hand-written text animations
- Customer testimonials carousel

### 🏢 **Business Features**
- Testimonials from Nigerian food industry leaders
- About section highlighting sustainable practices
- Premium quality messaging and startup positioning
- Mobile-responsive design optimized for Nigerian market

## 🛠 Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Backend**: Medusa.js ecommerce engine
- **Styling**: Tailwind CSS with custom OFAM theme
- **UI Components**: shadcn/ui + Custom components
- **Animations**: Framer Motion
- **Database**: PostgreSQL
- **Payments**: Stripe
- **Deployment**: Vercel
- **Language**: TypeScript

## 🚀 Quick Start

### Prerequisites

1. **Medusa Backend** - Ensure you have a Medusa server running on port 9000
2. **Node.js** - Version 18+ required
3. **Database** - PostgreSQL for production

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sasmb/ofam-ecommerce.git
cd ofam-ecommerce
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
cp .env.template .env.local
```

Configure your environment variables:
```env
MEDUSA_BACKEND_URL=http://localhost:9000
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your_publishable_key
NEXT_PUBLIC_BASE_URL=http://localhost:8000
NEXT_PUBLIC_DEFAULT_REGION=us
NEXT_PUBLIC_STRIPE_KEY=your_stripe_public_key
REVALIDATE_SECRET=your_secret
```

4. **Start development server**
```bash
npm run dev
```

Your OFAM storefront will be running at `http://localhost:8000`

## 🎨 Brand Colors

```css
--brand-olive: #677D3F     /* Primary green */
--brand-orange: #F38D27    /* Secondary orange */
--brand-dark: #1A1A1A      /* Dark gray */
--brand-cream: #FFFAFA     /* Off-white */
```

## 📦 Custom Components

### Interactive Components
- **MagnetizeButton**: Particle effect buttons with brand styling
- **HandWrittenTitle**: SVG path animation for hero titles
- **TestimonialsCarousel**: Auto-scrolling customer testimonials
- **AboutSection**: Mission statement and feature highlights

### UI Components
Built with shadcn/ui:
- Avatar, Button, Card, Carousel
- Custom variants for OFAM branding

## 🚀 Deployment

The application is deployed on Vercel with automatic deployments from the main branch.

### Deploy to Vercel
```bash
vercel --prod
```

### Environment Variables for Production
Ensure all environment variables are configured in your Vercel dashboard, including:
- Medusa backend URL (production)
- Stripe keys (production)
- Database connection

## 🇳🇬 Nigerian Market Focus

- **Local Business Testimonials**: Features from Lagos, Abuja, Port Harcourt
- **Regional Shipping**: Optimized for Nigerian geography
- **Currency**: Nigerian Naira (NGN) support
- **Payment Methods**: Local payment gateway integration ready
- **Language**: English with Nigerian context

## 🤝 Contributing

We welcome contributions to improve the OFAM platform:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**OFAM Agro Enterprise**
- Email: info@ofamagro.ng
- Location: Nigeria
- Website: [Coming Soon]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>🌴 Pioneering Premium Palm Oil Production in Nigeria 🇳🇬</strong>
</p>

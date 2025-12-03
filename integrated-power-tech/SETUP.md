# Setup Guide - Integrated Power Technologies Website

## Quick Start

1. **Navigate to the project directory:**
   ```bash
   cd integrated-power-tech
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Update Company Information

Edit contact details in:
- `components/Header.tsx` - Top bar contact info
- `components/Footer.tsx` - Footer contact section
- `app/contact/page.tsx` - Contact page details

### 2. Add Product Images

1. Download Socomec UPS product images from official sources
2. Place images in `public/images/` directory
3. Update image paths in components:
   - `components/Hero.tsx` - Line 23
   - `components/FeaturedProducts.tsx` - Product image URLs
   - `app/products/page.tsx` - Product catalog images

### 3. Customize Colors

The color scheme is defined in `tailwind.config.ts`:
- Primary (Blue): `#2563eb`
- Accent (Yellow): `#fbbf24`
- Dark: `#000000`

### 4. Add More Products

Edit the products array in:
- `components/FeaturedProducts.tsx` - Homepage featured products
- `app/products/page.tsx` - Full product catalog

### 5. Update Content

- **Homepage:** `app/page.tsx`
- **About Page:** `app/about/page.tsx`
- **Products Page:** `app/products/page.tsx`
- **Contact Page:** `app/contact/page.tsx`

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Other Platforms

The built files will be in `.next` directory. Follow your hosting provider's Next.js deployment guide.

## Features to Add

- [ ] Shopping cart functionality
- [ ] Product detail pages
- [ ] User authentication
- [ ] Order management system
- [ ] Payment integration
- [ ] Product search
- [ ] Customer reviews
- [ ] Live chat support

## Support

For technical support, contact your development team or refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

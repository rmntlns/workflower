# Workflower Landing Page

A professional Next.js landing page designed to convert LinkedIn traffic into discovery call bookings.

## Features

- **Hero Section**: Compelling value proposition with visual diagram
- **How It Works**: Three-step process explanation
- **Benefits/Results**: Proven metrics and social proof
- **Call to Action**: Cal.com booking integration
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Optimized**: Meta tags for LinkedIn sharing

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Booking**: Cal.com (@calcom/atoms)
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Configure Cal.com Booking

1. Create a Cal.com account at [cal.com](https://cal.com)

2. Set up a new event type:
   - Event name: "15-Minute Discovery Call"
   - Duration: 15 minutes
   - Add booking questions:
     - "How many support agents do you have?"
     - "How many tickets per month?"
     - "What CRM do you use?"

3. Get your Cal.com username and event slug

4. Update `src/app/page.tsx`:
```tsx
<CallToAction
  calUsername="your-actual-username"
  eventSlug="discovery-call"
/>
```

## Deployment to Render

### Prerequisites
- GitHub account
- Render account (free tier available at [render.com](https://render.com))

### Steps

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-github-repo-url
git push -u origin main
```

2. **Create Web Service on Render**:
   - Log in to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: workflower-website
     - **Environment**: Node
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Auto-Deploy**: Yes (deploys on every git push)

3. **Deploy**:
   - Click "Create Web Service"
   - Wait 3-5 minutes for build to complete
   - Your site will be live at: `https://workflower-website.onrender.com`

4. **Custom Domain (Optional)**:
   - Purchase domain (e.g., `workflower.com`)
   - In Render dashboard, go to Settings → Custom Domains
   - Add your domain and follow DNS instructions

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Hero.tsx          # Hero section
│   │   ├── HowItWorks.tsx    # Process explanation
│   │   ├── Benefits.tsx      # Results & metrics
│   │   ├── CallToAction.tsx  # Cal.com booking
│   │   └── Navigation.tsx    # Sticky header
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/                    # Static assets
├── tailwind.config.ts        # Design system config
├── tsconfig.json             # TypeScript config
└── package.json              # Dependencies
```

## Content Updates

All content is sourced from `/sales_pipeline/README.md`. To update:

1. **Headlines**: Edit in `src/components/Hero.tsx`
2. **Metrics**: Edit in `src/components/Benefits.tsx`
3. **Process steps**: Edit in `src/components/HowItWorks.tsx`
4. **CTA copy**: Edit in `src/components/CallToAction.tsx`

## Design System

### Colors
- **Primary**: `#2563eb` (blue) - trust, professional
- **Success**: `#10b981` (green) - positive results
- **Accent**: `#f59e0b` (amber) - CTA highlights
- **Neutral**: `#64748b` (slate) - body text

### Typography
- **Font**: Inter
- **Headings**: 48px desktop / 32px mobile
- **Body**: 18px desktop / 16px mobile

## Performance

Target metrics:
- Lighthouse Performance: 90+
- First Contentful Paint: <2s
- Time to Interactive: <3s

Run Lighthouse audit:
```bash
npm run build
npm start
# Open Chrome DevTools → Lighthouse → Generate report
```

## Testing Checklist

- [ ] Hero section loads with correct headline
- [ ] All sections visible and styled
- [ ] Navigation CTA scrolls to booking section
- [ ] Mobile responsive (test 375px, 768px, 1024px)
- [ ] Cal.com booking widget loads (after configuration)
- [ ] All links work
- [ ] Page loads in <3 seconds

## Success Metrics

Track after deployment:
- **Traffic**: LinkedIn → Landing page visits
- **Engagement**: Scroll depth, time on page
- **Conversion**: Cal.com bookings (target: 10%+)
- **CTA clicks**: Button clicks on "Book Call"

## Next Steps

1. Configure Cal.com credentials in `page.tsx`
2. Test locally at http://localhost:3000
3. Deploy to Render
4. Share link on LinkedIn profile
5. Track conversions and iterate

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Cal.com Documentation](https://cal.com/docs)
- [Render Documentation](https://render.com/docs)

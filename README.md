# PI Track Landing Page - Personal Injury Case Generation System

A modern, mobile-responsive landing page for personal injury law firms showcasing case generation systems and client testimonials. Built with React, TypeScript, and Vite, featuring advanced email capture with UTM tracking and Zapier webhook integration.

## 🌐 **Production Environment**

- **Domain**: https://pi.mylegalacademy.com
- **Platform**: Vercel
- **Branch**: `main`
- **Status**: Production-ready

## 🚀 **Key Features**

### **Email Capture & Lead Generation**
- **Hero Form**: Direct email submission with immediate JotForm redirect
- **Popup Forms**: Modal email capture for secondary CTAs
- **UTM Parameter Capture**: Automatic tracking of all UTM parameters
- **Zapier Webhook Integration**: Real-time lead delivery to your CRM
- **Analytics Tracking**: Google Analytics 4 with conversion tracking

### **Technical Stack**
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn UI Components
- **Analytics**: Google Analytics 4 (GA4)
- **Deployment**: Vercel
- **Webhooks**: Zapier integration

## 📊 **Analytics & Tracking**

### **Google Analytics Setup**
- **Property ID**: `G-BPBP33H4JP`
- **Events Tracked**:
  - Page views
  - Email submissions
  - Form interactions
  - Conversions

### **UTM Parameter Support**
- `utm_source` - Traffic source (facebook, google, etc.)
- `utm_medium` - Marketing medium (cpc, email, social, etc.)
- `utm_campaign` - Campaign name
- `utm_term` - Keywords
- `utm_content` - Ad content variation

### **Webhook Data Structure**
```json
{
  "email": "user@example.com",
  "utm_source": "facebook",
  "utm_medium": "cpc",
  "utm_campaign": "pi_track_2024",
  "utm_term": "personal injury lawyer",
  "utm_content": "banner_ad"
}
```

## 🔄 **User Flow**

### **Hero CTA Flow**
1. User enters email in hero form
2. Email validation and submission
3. UTM parameters captured automatically
4. Webhook sent to Zapier
5. Analytics event tracked
6. **Immediate redirect** to JotForm

### **Secondary CTA Flow**
1. User clicks any CTA button
2. Email popup appears
3. User enters email
4. UTM parameters captured automatically
5. Webhook sent to Zapier
6. Analytics event tracked
7. Popup closes
8. Redirect to JotForm after 1 second

## 🛠 **Development Setup**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**
```bash
# Clone the repository
git clone [repository-url]
cd "PI Lander"

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev          # Start development server (localhost:5173)
npm run build        # Build for production
```

## 🌍 **Environment Configuration**

### **Production URLs**
- **Frontend**: https://pi.mylegalacademy.com
- **Zapier Webhook**: https://hooks.zapier.com/hooks/catch/522295/uhnr1x6/
- **JotForm**: https://form.jotform.com/252374559938069

### **Analytics Configuration**
- **GA4 Property**: G-BPBP33H4JP
- **Conversion Tracking**: Enabled
- **Event Tracking**: Email submissions, form interactions

## 📁 **Project Structure**

```
src/
├── components/ui/          # Reusable UI components
│   ├── EmailForm.tsx      # Hero email form
│   ├── EmailPopup.tsx     # Modal email capture
│   └── ...
├── screens/HomePage/       # Main landing page sections
│   ├── CallToActionSection/    # Hero section with email form
│   ├── AboutUsSection/         # About section with popup CTAs
│   ├── FAQSection/             # FAQ section with popup CTAs
│   └── ...
├── services/
│   └── EmailService.ts    # Email submission logic
├── utils/
│   ├── analytics.ts       # Google Analytics tracking
│   └── utmTracking.ts     # UTM parameter capture
└── ...
```

## 🔧 **Configuration Files**

### **Vercel Configuration**
- `vercel.json` - Deployment settings
- Automatic deployments from `main` branch
- Custom domain: pi.mylegalacademy.com

### **Build Configuration**
- `vite.config.ts` - Vite build settings
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📈 **Performance & SEO**

### **Performance Optimizations**
- Vite build optimization
- Image optimization
- Lazy loading
- Responsive design
- Mobile-first approach

### **SEO Features**
- Meta tags optimization
- Open Graph tags
- Twitter Card support
- Structured data
- Fast loading times

## 🔒 **Security & Privacy**

### **Data Protection**
- Email validation
- HTTPS enforcement
- No sensitive data storage
- GDPR compliance considerations

### **Webhook Security**
- Zapier webhook authentication
- Data encryption in transit
- Secure API endpoints

## 📱 **Responsive Design**

### **Breakpoints**
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

### **Mobile Optimizations**
- Touch-friendly buttons
- Optimized form inputs
- Responsive typography
- Mobile navigation

## 🚀 **Deployment Process**

### **Automatic Deployment**
1. Push to `main` branch
2. Vercel automatically builds and deploys
3. Domain automatically updates
4. Zero-downtime deployment

### **Manual Deployment**
```bash
# Build locally
npm run build

# Deploy to Vercel
vercel --prod
```

## 📊 **Monitoring & Analytics**

### **Performance Monitoring**
- Vercel Analytics
- Core Web Vitals tracking
- Error monitoring
- Uptime monitoring

### **Conversion Tracking**
- Email submission tracking
- Form interaction tracking
- UTM parameter tracking
- Conversion funnel analysis

## 🔄 **Update Process**

### **For Content Updates**
1. Make changes in development
2. Test locally with `npm run dev`
3. Push to `main` branch
4. Automatic deployment to production

### **For Feature Updates**
1. Create feature branch
2. Develop and test
3. Merge to `main`
4. Automatic deployment

## 📞 **Support & Maintenance**

### **Technical Support**
- Vercel hosting support
- Analytics configuration
- Webhook troubleshooting
- Performance optimization

### **Content Updates**
- Copy changes
- Image updates
- Link updates
- Form modifications

## 🎯 **Success Metrics**

### **Key Performance Indicators**
- Email submission rate
- Form conversion rate
- Page load speed
- Mobile usability
- UTM parameter tracking accuracy

### **Analytics Goals**
- Track all email submissions
- Monitor UTM parameter effectiveness
- Measure conversion rates
- Analyze user behavior

## 📝 **Changelog**

### **Latest Updates**
- ✅ Email form with immediate JotForm redirect
- ✅ UTM parameter capture and webhook integration
- ✅ Google Analytics 4 tracking
- ✅ Responsive design optimization
- ✅ Production deployment setup

### **Planned Features**
- A/B testing capabilities
- Advanced analytics dashboard
- CRM integration options
- Performance optimizations

---

**Built with ❤️ for My Legal Academy**

*For technical support or questions, contact the development team.*

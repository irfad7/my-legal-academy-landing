# PI Lander - Personal Injury Case Generation System

A modern, mobile-responsive landing page for personal injury law firms showcasing case generation systems and client testimonials.

## 🚀 Deployment Workflow

### **Staging Environment**
- **Branch**: `staging`
- **URL**: https://pi-lander-6zu30w6fc-irfad7s-projects.vercel.app
- **Purpose**: Testing and preview before production
- **Backend API**: Email capture functionality with serverless functions

### **Production Environment**
- **Branch**: `main`
- **URL**: https://pi-lander-66u1c97lo-irfad7s-projects.vercel.app
- **Purpose**: Live production site

## 🔄 Development Workflow

### **For New Features/Changes:**

1. **Create feature branch from staging:**
   ```bash
   git checkout staging
   git pull origin staging
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and test locally:**
   ```bash
   npm install
   npm run dev
   ```

3. **Commit and push to staging:**
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   git push origin staging
   ```

4. **Test on staging environment** (automatic deployment)

5. **When ready for production:**
   ```bash
   git checkout main
   git merge staging
   git push origin main
   ```

## 🛠️ Local Development

### **Prerequisites:**
- [NodeJS](https://nodejs.org/en/) (v16 or higher)
- npm or yarn

### **Setup:**
```bash
npm install
npm run dev
```

Your project will be accessible at [http://localhost:5173/](http://localhost:5173/)

### **Build for Production:**
```bash
npm run build
```

## 📱 Features

- **Mobile Responsive**: Optimized for iPhone 15 Pro and all screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Case Studies**: Showcase client success stories and ROI
- **Email Capture**: Lead generation with email popup
- **Testimonials**: Video testimonials and client quotes
- **Performance Stats**: Key metrics and achievements

## 🎨 Tech Stack

- **React** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Vercel** for deployment
- **GitHub** for version control
- **Node.js/Express** for backend API
- **Zod** for data validation
- **Serverless Functions** for email capture

## 🔧 Backend API

### **Email Capture Endpoints:**
- **POST** `/api/submit-email` - Submit email address
- **GET** `/api/submit-email` - Get all submissions
- **GET** `/api/health` - Health check

### **Features:**
- ✅ **Email validation** with Zod schema
- ✅ **Duplicate prevention** (same email check)
- ✅ **Source tracking** (hero-form, popup-form)
- ✅ **Error handling** with proper HTTP status codes
- ✅ **CORS enabled** for cross-origin requests
- ✅ **Serverless deployment** on Vercel

### **Local Development:**
```bash
# Start frontend
npm run dev

# Start backend API (optional)
npm run api:dev
```

## 📋 Environment Management

- **Staging**: `staging` branch → Automatic deployment to staging URL
- **Production**: `main` branch → Automatic deployment to production URL
- **Local**: `npm run dev` → Development server with hot reload

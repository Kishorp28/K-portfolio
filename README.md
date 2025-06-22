# KISHORE - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Firebase.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Smooth navigation between sections
- **Contact Form**: Firebase-powered contact form with validation
- **Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Proper meta tags and structured data
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Firebase (Firestore)
- **Deployment**: Vercel (recommended)

## 📋 Sections

1. **Hero Section**: Introduction with contact information and social links
2. **About Section**: Education, achievements, and experience
3. **Skills Section**: Technical skills and programming languages
4. **Projects Section**: Showcase of featured projects
5. **Contact Section**: Contact form and information
6. **Footer**: Social links and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account (for contact form functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd attempt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project
   - Enable Firestore Database
   - Create a collection named `contacts`
   - Update the Firebase configuration in `src/lib/firebase.ts`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Firestore Database
4. Create a collection named `contacts`
5. Set up security rules for the collection
6. Copy your Firebase config to `src/lib/firebase.ts`

### Customization

- **Personal Information**: Update personal details in the component files
- **Projects**: Modify the projects array in `src/components/Projects.tsx`
- **Skills**: Update skills in `src/components/Skills.tsx`
- **Styling**: Customize colors and styles in `tailwind.config.ts`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎨 Dark Mode

The website includes a dark mode toggle that:
- Persists user preference
- Provides smooth transitions
- Maintains accessibility standards

## 📧 Contact Form

The contact form includes:
- Form validation
- Firebase Firestore integration
- Success/error feedback
- Loading states

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables for Firebase
   - Deploy automatically

### Environment Variables

Add these to your deployment environment:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── firebase.ts
```

## 🎯 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for best user experience
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG 2.1 compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Name**: KISHORE
- **Email**: kishore2k50@gmail.com
- **Phone**: +91 9360172994
- **Location**: Coimbatore, Tamil Nadu, India

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Firebase for backend services
- Lucide for beautiful icons

---

Made with ❤️ by KISHORE
# k-sportfolio
# k-portfolio
# k-portfolio
"# k-portfolio" 

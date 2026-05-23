# Shanmukh K - Portfolio Website

A modern, responsive portfolio website showcasing my expertise in cybersecurity, full-stack development, and AI technologies.

## 🚀 Live Demo

- **Netlify**: [https://soft-crepe-83419a.netlify.app](https://soft-crepe-83419a.netlify.app)
- **GitHub Pages**: [https://shanmukh7781-prog.github.io/NEWPORT](https://shanmukh7781-prog.github.io/NEWPORT)

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Timeline**: React Vertical Timeline Component
- **Email**: EmailJS
- **Build Tool**: Vite
- **Deployment**: Netlify, GitHub Pages

## 📋 Features

- ✅ Responsive design for all devices
- ✅ Smooth animations and transitions
- ✅ Interactive project showcase
- ✅ Professional timeline
- ✅ Contact form with EmailJS
- ✅ Book recommendations
- ✅ Skills visualization
- ✅ Resume download
- ✅ Social media integration

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shanmukh7781-prog/NEWPORT.git
   cd NEWPORT
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"
   - The site will automatically deploy!

### Manual Deployment

```bash
# Build for GitHub Pages
npm run build:github

# The built files will be in the 'dist' folder
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Timeline.tsx    # Education & experience
│   ├── Skills.tsx      # Technical skills
│   ├── Books.tsx       # Book recommendations
│   ├── Contact.tsx     # Contact form
│   └── Navigation.tsx  # Navigation menu
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
The project uses a modern color palette with gradients. Main colors:
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Accent: Cyan (#06B6D4)

### Content
Update the following files to customize content:
- `src/components/Hero.tsx` - Personal information
- `src/components/About.tsx` - About section
- `src/components/Projects.tsx` - Project details
- `src/components/Timeline.tsx` - Education & experience

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update the credentials in `src/components/Contact.tsx`:
   ```typescript
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id';
   const publicKey = 'your_public_key';
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Shanmukh K**
- GitHub: [@shanmukh7781-prog](https://github.com/shanmukh7781-prog)
- LinkedIn: [Shanmukh K](https://www.linkedin.com/in/shanmukh-k-a361b1253)
- Email: shanmukhkommisetty2004.08@gmail.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Unsplash](https://unsplash.com/) for images
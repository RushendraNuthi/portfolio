# Rushendra Nuthi's Portfolio

A modern, responsive portfolio website showcasing the work and skills of Rushendra Nuthi, a Cyber Security student. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, parallax scrolling effects, and a dynamic cybersecurity-themed background.

## 🌟 Features

- **Interactive Hero Section** - Animated name display with parallax scrolling effects
- **Dynamic Background Animation** - Floating cybersecurity symbols and icons
- **Dark/Light Theme Toggle** - Persistent theme switching with localStorage
- **Smooth Scrolling** - Scroll progress bar and parallax effects
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Performance Optimized** - Efficient React components with proper state management

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.8.2
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 6.2.0
- **Package Manager**: npm

## 📁 Project Structure

```
├── components/
│   ├── About.tsx              # About section component
│   ├── BackgroundAnimation.tsx # Floating cybersecurity symbols
│   ├── Contact.tsx            # Contact form and information
│   ├── Hero.tsx              # Main hero section with animations
│   ├── Projects.tsx          # Portfolio projects showcase
│   ├── ScrollProgressBar.tsx # Scroll progress indicator
│   ├── Skills.tsx            # Skills and technologies section
│   └── ThemeToggle.tsx       # Dark/light theme switcher
├── contexts/
│   └── ThemeContext.tsx      # Theme management context
├── App.tsx                   # Main application component
├── index.tsx                 # Application entry point
├── tailwind.config.js        # Tailwind CSS configuration
└── vite.config.ts           # Vite build configuration
```

## 🎨 Design Features

- **Parallax Scrolling**: Multi-layered background animations that respond to scroll and mouse movement
- **Dynamic Typography**: Animated text rendering with character-by-character reveal
- **Floating Elements**: Cybersecurity-themed symbols (🔒, 🔑, 🛡️, encryption terms) with custom animations
- **Theme System**: CSS custom properties for seamless theme switching
- **Smooth Animations**: Custom keyframes for floating, fading, and scaling effects

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rushendra-nuthi-portfolio.git
   cd rushendra-nuthi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🌐 Deployment

This portfolio is designed to be easily deployable to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any Static Host**: Upload the `dist` folder contents

## 🎯 Key Components

### Hero Section
- Interactive parallax scrolling effects
- Mouse movement tracking for dynamic positioning
- Character-by-character name animation
- Responsive typography scaling

### Background Animation
- Floating cybersecurity symbols and icons
- Multiple animation layers with different speeds
- Configurable density for performance optimization
- Accessibility-friendly with `aria-hidden` attributes

### Theme System
- Context-based theme management
- Persistent theme preference with localStorage
- CSS custom properties for smooth transitions
- Dark and light mode support

## 🔧 Customization

### Adding New Sections
1. Create a new component in the `components/` directory
2. Import and add it to `App.tsx`
3. Style using Tailwind CSS classes

### Modifying Animations
- Edit keyframes in `tailwind.config.js`
- Adjust animation parameters in component files
- Update CSS custom properties for theme colors

### Changing Content
- Update personal information in component files
- Modify the `metadata.json` for SEO and descriptions
- Replace the banner image with your own

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)
- **Large screens** (1440px and up)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Rushendra Nuthi**
- Portfolio: [Your Portfolio URL]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!
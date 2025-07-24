# 🚀 Personal Portfolio Website

A modern, responsive portfolio website showcasing my work as a Data Engineer with a passion for technology exploration and web development.

## 🌟 Live Demo

Visit the live website: [imabhi241.github.io](https://imabhi241.github.io)

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

### 🎨 Design & UI/UX
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode Toggle**: Seamless theme switching with persistent user preference
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and animated transitions

### 🔧 Functionality
- **Dynamic Typing Animation**: Animated text display in the hero section
- **Smooth Scrolling Navigation**: One-page design with smooth scroll to sections
- **Contact Form**: Functional contact form with EmailJS integration
- **CV Download**: Direct download link for resume/CV
- **Social Media Integration**: Links to all professional social platforms

### 🎯 Sections
- **Hero Section**: Introduction with animated typing effect and social links
- **About Me**: Professional background, skills, and personal introduction
- **Projects**: Showcase of key projects with interactive hover effects
- **Contact**: Contact form with professional contact information

### 🌙 Dark Mode Features
- **Consistent Styling**: All components optimized for both light and dark themes
- **Color Harmony**: Carefully selected color palette for optimal readability
- **Visual Feedback**: Enhanced hover effects and interactive elements
- **Theme Persistence**: User's theme preference is remembered across sessions

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: 
  - Custom CSS variables for theming
  - Flexbox and Grid layouts
  - CSS animations and transitions
  - Responsive design with media queries
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Theme switching functionality
  - Form validation and submission

### Libraries & Tools
- **Typed.js**: For animated typing effects
- **ScrollReveal.js**: For scroll-based animations
- **EmailJS**: For contact form functionality
- **Unicons**: For modern icon set
- **Google Fonts**: For typography

## 📁 Project Structure

```
imabhi241.github.io/
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet with dark/light mode
│   ├── js/
│   │   └── main.js            # JavaScript functionality
│   ├── images/
│   │   ├── Avatar_new.png     # Profile image
│   │   └── avatar.png         # Alternative profile image
│   └── CV/
│       └── Abhishek_Kumar_CV.pdf  # Resume/CV file
├── index.html                 # Main HTML file
├── thank-you.html            # Thank you page after form submission
└── README.md                 # Project documentation
```

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/imabhi241/imabhi241.github.io.git
   cd imabhi241.github.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using Live Server extension in VS Code
   ```

3. **Access the website**
   - Open `http://localhost:8000` in your browser

## 💻 Usage

### Customization Guide

1. **Personal Information**
   - Update name, title, and description in `index.html`
   - Replace profile image in `assets/images/`
   - Update CV file in `assets/CV/`

2. **Social Media Links**
   - Modify social media URLs in the HTML
   - Add or remove social platforms as needed

3. **Contact Form**
   - Configure EmailJS settings in `main.js`
   - Update contact information in the Contact section

4. **Theme Colors**
   - Modify CSS variables in `style.css` for custom color schemes
   - Adjust dark/light mode colors as preferred

5. **Content Sections**
   - Update About section with your background
   - Add your projects to the Projects section
   - Customize skills and experience details

## 🎨 Theme Customization

The website uses CSS custom properties for easy theme customization:

```css
:root {
    --first-color: rgb(110, 87, 224);          /* Primary accent color */
    --second-color: rgb(0, 201, 255);         /* Secondary accent color */
    --color-white: #FFFFFF;                   /* White color */
    --color-lightblue: #f2f8ff;             /* Light blue background */
    --text-color-second: #68676e;           /* Secondary text color */
    --text-color-third: #6c7983;            /* Tertiary text color */
}
```

## 🌙 Dark Mode Implementation

The dark mode feature includes:
- Automatic system preference detection
- Manual toggle with persistent storage
- Optimized colors for reduced eye strain
- Consistent styling across all components
- Smooth transitions between themes

## 📱 Responsive Design

- **Mobile First**: Designed with mobile devices as the primary target
- **Breakpoints**: Optimized for various screen sizes
- **Touch Friendly**: Interactive elements sized for touch interfaces
- **Performance**: Optimized images and efficient CSS

## 🔄 Form Functionality

The contact form features:
- **Client-side Validation**: Real-time form validation
- **EmailJS Integration**: No backend required for form submission
- **Success/Error Handling**: User feedback for form submission status
- **Thank You Page**: Dedicated page after successful form submission

## 🚀 Performance Features

- **Optimized Images**: Compressed images for faster loading
- **Minimal Dependencies**: Only essential libraries included
- **CSS Optimization**: Efficient CSS with minimal redundancy
- **JavaScript Optimization**: Clean, efficient JavaScript code

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Abhishek Kumar**
- **Portfolio**: [imabhi241.github.io](https://imabhi241.github.io)
- **LinkedIn**: [linkedin.com/in/imabhi241](https://linkedin.com/in/imabhi241)
- **GitHub**: [github.com/imabhi241](https://github.com/imabhi241)
- **Email**: [abhikumarpurnea@gmail.com](mailto:abhikumarpurnea@gmail.com)
- **Twitter**: [@knightcode_abhi](https://x.com/knightcode_abhi)
- **Medium**: [@abhikumarpurnea](https://medium.com/@abhikumarpurnea)

---

⭐ **If you found this project helpful, please consider giving it a star!**

## 🙏 Acknowledgments

- **Unicons** for the beautiful icon set
- **EmailJS** for the contact form functionality
- **Typed.js** for the typing animation effect
- **ScrollReveal.js** for scroll animations
- **Google Fonts** for typography

---

*Built with ❤️ by Abhishek Kumar*
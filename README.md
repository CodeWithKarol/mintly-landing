# Mintly Landing Page

A modern, high-conversion landing page template designed for the Mintly personal finance application. This project provides a fully responsive, accessible, and performant web interface built with vanilla HTML, CSS, and JavaScript.

![Mintly Banner](https://via.placeholder.com/1200x600?text=Mintly+Landing+Page+Preview)

## 📋 Table of Contents

- [Features](#-features)
- [Technical Specifications](#-technical-specifications)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Features

- **Responsive Design:** Mobile-first architecture ensuring a seamless experience across all devices (Mobile, Tablet, Desktop).
- **Interactive Navigation:**
  - Sticky header that adapts on scroll.
  - Smooth scrolling for anchor links.
  - Fully functional mobile hamburger menu with accessible ARIA attributes.
- **Modern UI/UX:**
  - Clean, professional aesthetic using the Inter font family.
  - Engaging hover states and transitions.
  - SVG icons for crisp rendering on high-DPI displays.
- **Performance Focused:**
  - Zero external framework dependencies (No jQuery, Bootstrap, or Tailwind required).
  - Optimized asset loading.
  - Semantic HTML5 structure for better SEO and accessibility.

## 🔧 Technical Specifications

The project is built using standard web technologies, ensuring long-term maintainability and easy integration.

- **HTML5:** Semantic markup with proper meta tags for SEO and social sharing.
- **CSS3:** Custom styling using CSS Variables (Custom Properties) for easy theming. Flexbox and Grid layouts are used for structure.
- **JavaScript (ES6+):** Vanilla JavaScript for DOM manipulation and event handling. No build step required.

## 📂 Project Structure

```text
mintly-landing/
├── index.html                  # Main landing page structure
├── style.css                   # Global styles and responsive media queries
├── script.js                   # UI logic (navigation, scroll effects)
├── PRODUCT_CUSTOMIZATION.html  # Guide for customizing the template
├── favicon.svg                 # Site favicon
├── LICENSE                     # Apache 2.0 License
└── README.md                   # Project documentation
```

## 🏁 Getting Started

You can run this project locally without any complex build tools.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- A code editor (VS Code recommended).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/CodeWithKarol/mintly-landing.git
    cd mintly-landing
    ```

2.  **Run locally:**
    - Simply open `index.html` in your web browser.
    - **Recommended:** Use a local development server like "Live Server" in VS Code to ensure all assets load correctly.

## 🎨 Customization

This template is designed to be easily customized to fit your brand.

### Changing Colors

The project uses CSS variables for color management. Open `style.css` and modify the root variables:

```css
:root {
  --primary-color: #14b8a6; /* Teal */
  --secondary-color: #0f766e;
  /* ... other variables */
}
```

### Detailed Guide

For a comprehensive guide on how to customize fonts, colors, and content, please refer to the included **[Product Customization Guide](PRODUCT_CUSTOMIZATION.html)**. Open this file in your browser for step-by-step instructions.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
5.  Push to the branch (`git push origin feature/AmazingFeature`).
6.  Open a Pull Request.

Please ensure your code follows the existing style and includes comments where necessary.

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

---

_Built with ❤️ for the Mintly community._

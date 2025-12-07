# Mintly Landing Page

A modern, high-conversion landing page for **Mintly**, an AI-powered personal finance automation platform. This project features a responsive design, advanced CSS animations, and interactive JavaScript components to create an engaging user experience.

## ✨ Key Features

- **Fully Responsive**: Fluid layout that adapts seamlessly from mobile phones to large desktop screens.
- **Modern UI/UX**: Clean typography (Inter font), glassmorphism effects, gradients, and a professional color palette (Teal/Navy).
- **Scroll Animations**: Elements reveal themselves elegantly as the user scrolls, using `IntersectionObserver` for performance.
- **Interactive Components**:
  - **Video Modal**: Custom modal with a nature-themed demo video.
  - **Pricing Toggle**: Switch between Monthly and Yearly billing with automatic price updates.
  - **FAQ Accordion**: Smooth expand/collapse functionality for common questions.
  - **Chat Widget**: Floating support chat with a realistic conversation interface.
  - **Mobile Navigation**: Slide-out menu for smaller screens.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup for better accessibility and SEO.
- **CSS3**:
  - Flexbox & CSS Grid for layout.
  - CSS Variables for consistent theming.
  - Keyframe animations and transitions.
  - Media queries for responsiveness.
- **JavaScript (Vanilla)**:
  - DOM manipulation.
  - Event handling.
  - `IntersectionObserver` API for scroll animations.
  - No external frameworks (jQuery-free).

## 📂 Project Structure

```
mintly-landing/
├── index.html      # Main HTML structure
├── style.css       # Global styles, layout, and animations
├── script.js       # Logic for interactions and animations
├── README.md       # Project documentation
└── ...             # Assets and other files
```

## 🧱 Section Breakdown

### 1. Hero Section

- **Headline**: "Master Your Money with AI Intelligence".
- **Visuals**: Dashboard mockup with floating data cards (Monthly Savings, Investment Growth).
- **Actions**: "Start Free Trial" and "Watch Demo" buttons.
- **Social Proof**: Trust indicators with user avatars and ratings.

### 2. Key Benefits (Bento Grid)

- A modern **Bento Grid** layout showcasing core features:
  - AI-Powered Automation (Large card)
  - Automatic Savings (Large card)
  - 2-Minute Setup, Smart Goals, Bank Security, Mobile First (Small cards).

### 3. How It Works

- A clear **3-Step Process** timeline:
  1.  **Connect your accounts**: Highlighting security and broad support.
  2.  **Set your smart goals**: Custom timelines and risk adjustment.
  3.  **Watch your wealth grow**: Auto-rebalancing and dividend reinvestment.

### 4. Unique Selling Proposition (USP)

- "The Future of Finance is Automated".
- Featured card for "Fully Automated" finance.
- Supporting cards for AI learning, Security, and Real-time insights.

### 5. Social Proof

- **Testimonials**: Grid of user reviews with ratings and roles.
- **Trust Logos**: Featured in TechCrunch, Forbes, Bloomberg, Wired, The Verge.

### 6. Pricing

- **Toggle**: Monthly vs. Yearly (Save 20%).
- **Tiers**:
  - **Starter**: Free, basic insights.
  - **Pro**: $12/mo, advanced AI & automation (Most Popular).
  - **Business**: $29/mo, for power users.

### 7. FAQ & Support

- Accordion-style Frequently Asked Questions.
- Direct link to chat support.

### 8. Footer

- Newsletter subscription form.
- Comprehensive site links (Product, Company, Resources).
- Social media links and legal information.

## 🎬 Animations

The site uses a custom `reveal-element` class and JavaScript `IntersectionObserver` to trigger animations:

- **Fade Up**: Elements translate up and fade in.
- **Staggered Delays**: Grid items (like pricing cards and features) appear one after another for a cascading effect.
- **Performance**: Uses `will-change` and hardware-accelerated CSS properties.

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/mintly-landing.git
    ```
2.  **Open `index.html`** in your browser.
3.  **Explore**: Scroll through the page to see animations and interact with the components.

---

&copy; 2025 Mintly Inc. All rights reserved.

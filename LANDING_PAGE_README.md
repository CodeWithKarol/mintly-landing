# Mintly Landing Page

## Overview

A modern, conversion-focused landing page for Mintly - an AI-powered personal finance app that automates savings, investments, and budgeting.

## Design Strategy

### Objective

Primary goal is user sign-ups for the app's free trial or initial onboarding.

### Key Sections

1. **Hero Section** - Headline with AI mascot and compelling value proposition
2. **Key Benefits** - 6 core benefits showcasing automation, ease, and security
3. **How It Works** - 4-step process from connection to growth
4. **Unique Selling Proposition** - Differentiates Mintly from competitors
5. **Social Proof** - Testimonials carousel and certifications
6. **Sign-Up CTA** - Email capture for free trial
7. **Footer** - Links and contact information with live chat widget

### Brand Colors

- **Teal** (#14B8A6 / #0D9488) - Trust and growth
- **Navy** (#001F3F) - Professionalism and stability
- **Coral** (#FF6B6B / #FF8787) - CTAs for urgency and positivity
- **Light Background** (#F8FAFB) - Clean, minimal aesthetic

### Typography

- Font: Inter (modern sans-serif)
- Sizes: Responsive across all device sizes
- Hierarchy: Clear distinction between headings and body text

## Project Structure

```
mintly-landing/
├── index.html           # Main HTML file
├── css/
│   └── styles.css       # All styling and animations
├── js/
│   └── script.js        # Interactive functionality
├── assets/
│   ├── images/          # Hero graphics and visual assets
│   └── icons/           # Icon set for benefits/steps
├── README.md            # This file
└── LICENSE              # MIT License
```

## Features

### Interactive Elements

- ✨ **Animated Hero Section** - Floating AI mascot with smooth animations
- 🎠 **Testimonial Carousel** - Auto-rotating with keyboard navigation (arrow keys)
- 💬 **Live Chat Widget** - Fixed position chat for support
- 📱 **Mobile Optimized** - Fully responsive design for all devices
- ⚡ **Smooth Scrolling** - Native smooth scroll with anchor links
- 🎯 **Email Signup** - Form with validation and feedback

### Animations

- `float` - Gentle floating motion for mascot and icons
- `slideInLeft/Right` - Hero content entrance
- `fadeInUp` - Card and section animations
- `drawLine` - SVG line animation for growth chart

### Performance

- Lazy loading support for images
- Optimized CSS with minimal selectors
- No heavy JavaScript frameworks
- Respects `prefers-reduced-motion` for accessibility

## Getting Started

### View the Landing Page

1. Open `index.html` in your web browser
2. Or use a local server:

   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (with http-server)
   npx http-server

   # Using Python 2
   python -m SimpleHTTPServer 8000
   ```

3. Visit `http://localhost:8000`

### Customization

#### Update Brand Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
	--color-teal: #14b8a6;
	--color-navy: #001f3f;
	--color-coral: #ff6b6b;
	/* ... */
}
```

#### Add Testimonials

Add new slides in `index.html`:

```html
<div class="testimonial-slide">
	<div class="testimonial">
		<div class="stars">⭐⭐⭐⭐⭐</div>
		<p class="testimonial-text">
			Your testimonial here...
		</p>
		<p class="testimonial-author">
			— Name, Title
		</p>
	</div>
</div>
```

#### Modify Benefits

Edit the benefit cards in the benefits section to add/remove items.

#### Update Live Chat

Customize quick replies in the chat widget in `index.html` and responses in `js/script.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Color contrast meets WCAG AA standards
- Keyboard navigation support
- Respects prefers-reduced-motion

## Future Enhancements

- [ ] Integrate with backend API for email signup
- [ ] Add real analytics integration
- [ ] Implement real live chat service (Intercom, Zendesk)
- [ ] Add video demo section
- [ ] Implement A/B testing variants
- [ ] Add more visual assets and animations
- [ ] Create admin dashboard for content updates

## Analytics Setup

The landing page includes tracking hooks for common events:

- `CTA_Click` - User clicks Get Started button
- `Testimonial_Navigation` - User navigates testimonials
- `Form_Submission` - User submits email signup

Update the `trackEvent()` function in `js/script.js` to integrate with your analytics service.

## Contact Support

- Email: support@mintly.app
- Live Chat: Available in landing page footer
- GitHub Issues: Report bugs and suggest features

## License

MIT License - See LICENSE file for details

---

**Last Updated:** November 2025
**Version:** 1.0.0

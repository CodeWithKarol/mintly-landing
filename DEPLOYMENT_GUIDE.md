# Mintly Landing Page - Configuration Guide

## Environment Setup

### Local Development

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npm install -g http-server
http-server

# Using Live Server (VSCode extension)
# Install "Live Server" extension, then right-click index.html > "Open with Live Server"
```

Then visit: `http://localhost:8000` (or the provided URL)

## Deployment

### Netlify (Recommended - Free)

1. Push code to GitHub
2. Connect to Netlify: https://app.netlify.com
3. Select your repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
5. Deploy

### Vercel (Free)

1. Push code to GitHub
2. Import to Vercel: https://vercel.com
3. Select your repository
4. Deploy (auto-detected as static site)

### GitHub Pages

1. Push code to GitHub
2. Go to Settings → Pages
3. Select main branch as source
4. Your site will be available at: `https://<username>.github.io/<repo>`

### Traditional Web Hosting

1. Upload all files via FTP
2. Ensure `.htaccess` is uploaded for performance headers
3. Set document root to repository directory

## Environment Variables

Currently, the landing page doesn't require environment variables. However, when integrating with a backend API, create a `.env` file (don't commit to GitHub):

```
VITE_API_URL=https://api.mintly.app
VITE_EMAIL_ENDPOINT=https://api.mintly.app/subscribe
```

## Performance Optimization

### Image Optimization

- Use tools like TinyPNG or ImageOptim for images
- Consider WebP format for modern browsers
- Lazy load images with `loading="lazy"` attribute

### Build Tools (Future)

When adding build tooling, consider:

```bash
npm install --save-dev vite
npm install --save-dev postcss autoprefixer
npm install --save-dev terser
```

### CDN Setup (Optional)

Serve static assets from a CDN:

- Cloudflare (Free CDN)
- AWS CloudFront
- Azure CDN

## SEO Configuration

### Robots.txt

- Already configured to allow all crawlers
- Update `sitemap.xml` URL to your domain

### Metadata

Update in `index.html`:

```html
<meta
	name="description"
	content="..."
/>
<meta
	name="keywords"
	content="fintech, savings, investments, budgeting, AI"
/>
<meta
	property="og:title"
	content="Mintly - ..."
/>
<meta
	property="og:description"
	content="..."
/>
<meta
	property="og:image"
	content="https://mintly.app/assets/og-image.png"
/>
```

### Google Search Console

1. Verify domain: https://search.google.com/search-console
2. Submit sitemap.xml
3. Monitor search performance

## Analytics Integration

### Google Analytics 4

Add to `index.html` after `</head>`:

```html
<script
	async
	src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {
		dataLayer.push(arguments);
	}
	gtag("js", new Date());
	gtag("config", "GA_ID");
</script>
```

### Email Service Integration

Update `handleSignup()` in `js/script.js`:

```javascript
// Example with Mailchimp
const response = await fetch(
	"YOUR_MAILCHIMP_ENDPOINT",
	{
		method: "POST",
		body: JSON.stringify({ email: email }),
	}
);
```

## Monitoring & Maintenance

### Uptime Monitoring

- Pingdom (free tier)
- UptimeRobot (free tier)
- StatusPage.io (free tier)

### Error Tracking

- Sentry.io (free tier)
- BugSnag (free tier)

### Performance Monitoring

- Google PageSpeed Insights
- WebPageTest
- GTmetrix

## Testing Checklist

- [ ] All links work correctly
- [ ] Mobile responsive (test on multiple devices)
- [ ] Form submission works
- [ ] Chat widget functions
- [ ] Animations smooth (test on lower-end devices)
- [ ] Accessibility (test with screen reader)
- [ ] Load time < 3 seconds
- [ ] Cross-browser compatibility
- [ ] SEO meta tags present
- [ ] Analytics tracking working

## Backup & Recovery

- Use version control (Git)
- Regular backups of production files
- Document deployment process
- Keep README updated

## Support & Contact

- Technical Issues: support@mintly.app
- Live Chat: Available on landing page
- GitHub Issues: https://github.com/CodeWithKarol/mintly-landing

---

Last Updated: November 2025

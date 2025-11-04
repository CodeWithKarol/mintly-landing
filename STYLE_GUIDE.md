# Mintly Design System & Style Guide

## Brand Identity

### Logo

- **Name**: Mintly
- **Tagline**: "Automate Your Money. Grow Your Future."
- **Favicon**: SVG with teal-to-dark-teal gradient incorporating upward trend and dollar sign

### Color Palette

#### Primary Colors

- **Teal**: `#14B8A6` (Light) / `#0D9488` (Dark)
  - Used for: Primary buttons, links, accents, trust signals
  - Meaning: Growth, trust, calm energy, financial stability
- **Navy**: `#001F3F`
  - Used for: Headlines, text, authority
  - Meaning: Professionalism, reliability, security

#### Accent Colors

- **Coral**: `#FF6B6B` (Main) / `#FF8787` (Light)
  - Used for: CTAs, urgency, attention-grabbing
  - Meaning: Action, enthusiasm, positivity

#### Neutral Colors

- **White**: `#FFFFFF` - Primary background
- **Light Gray**: `#F8FAFB` - Section backgrounds
- **Gray 100**: `#E5E7EB` - Borders, subtle backgrounds
- **Gray 200**: `#D1D5DB` - Disabled states
- **Gray 600**: `#4B5563` - Body text secondary
- **Gray 700**: `#374151` - Body text primary
- **Gray 900**: `#111827` - Dark text

### Typography

#### Font Family

**Inter** - Modern, friendly, highly legible sans-serif

```css
font-family: "Inter", -apple-system, BlinkMacSystemFont,
	"Segoe UI", sans-serif;
```

#### Font Weights

- **400** - Regular body text
- **500** - Buttons, secondary headings
- **600** - Highlights, card titles, important text
- **700** - Primary headings, CTAs

#### Font Sizes & Hierarchy

| Element         | Desktop | Mobile | Weight | Usage                    |
| --------------- | ------- | ------ | ------ | ------------------------ |
| H1 (Headline)   | 56px    | 28px   | 700    | Main page headline       |
| H2 (Section)    | 44px    | 24px   | 700    | Section titles           |
| H3 (Subheading) | 24px    | 18px   | 600    | Card titles, step titles |
| H4 (Footer)     | 16px    | 16px   | 600    | Footer sections          |
| Body Large      | 18px    | 16px   | 400    | Hero subtitle            |
| Body Normal     | 16px    | 15px   | 400    | Body text                |
| Body Small      | 14px    | 13px   | 400    | Captions, fine print     |
| Caption         | 12px    | 11px   | 500    | Tags, labels             |

#### Line Height

- Headlines: 1.2
- Body text: 1.6-1.8
- Small text: 1.5

### Spacing Scale

| Size | Value    | Usage                      |
| ---- | -------- | -------------------------- |
| xs   | 4px      | Micro spacing              |
| sm   | 8px      | Component internal spacing |
| md   | 12px     | Element spacing            |
| lg   | 16px     | Padding, gaps              |
| xl   | 20px     | Card padding               |
| 2xl  | 24px     | Section padding            |
| 3xl  | 32px     | Button padding             |
| 4xl  | 40px     | Section gaps               |
| 5xl  | 60px     | Major section spacing      |
| 6xl  | 80-100px | Section padding            |

### Border Radius

| Style    | Value | Usage                               |
| -------- | ----- | ----------------------------------- |
| Sharp    | 0px   | Lines, strict geometry              |
| Slight   | 4px   | Input fields, minimal rounding      |
| Standard | 8px   | Cards, buttons, containers          |
| Rounded  | 12px  | Large containers                    |
| Full     | 50%   | Circular elements (badges, avatars) |

### Shadows

| Level  | CSS                            | Usage                     |
| ------ | ------------------------------ | ------------------------- |
| None   | none                           | Flat design, no elevation |
| Subtle | `0 1px 2px rgba(0,0,0,0.05)`   | Borders, light separation |
| Small  | `0 2px 8px rgba(0,0,0,0.08)`   | Cards, certificates       |
| Medium | `0 4px 15px rgba(0,0,0,0.1)`   | Buttons, testimonials     |
| Large  | `0 10px 30px rgba(0,0,0,0.15)` | Modals, overlays          |

## Component Guidelines

### Buttons

#### CTA Button (Primary)

```css
background: linear-gradient(
	135deg,
	#ff6b6b 0%,
	#ff8787 100%
);
color: white;
padding: 16px 32px;
border-radius: 8px;
font-weight: 600;
box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
```

- **Hover**: Slight lift effect (`translateY(-2px)`)
- **Active**: Slightly darker, more shadow

#### Secondary Button

```css
background: transparent;
border: 2px solid #14b8a6;
color: #14b8a6;
padding: 14px 28px;
border-radius: 8px;
```

### Cards

#### Standard Card

```css
background: #f8fafb;
padding: 40px;
border-radius: 12px;
border: 2px solid transparent;
transition: all 0.3s ease;
```

- **Hover**: Teal border, subtle lift

#### Testimonial Card

```css
background: white;
padding: 40px;
border-radius: 12px;
border-left: 4px solid #14b8a6;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
```

### Forms

#### Input Fields

```css
padding: 16px 20px;
border: none;
border-radius: 8px;
background: white;
font-size: 16px;
font-family: inherit;
```

- **Focus**: `box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.2)`
- **Error**: Red border, error message below

#### Labels

```css
font-size: 14px;
font-weight: 600;
color: #001f3f;
margin-bottom: 8px;
```

## Animation & Interaction Guidelines

### Transitions

- Default: `all 0.3s ease`
- Quick: `0.15s ease`
- Slow: `0.5s ease-out`

### Animations

#### Entrance (on page load)

- `slideInLeft/Right` - 0.8s ease-out
- `fadeInUp` - 0.8s ease-out

#### Hover Effects

- Subtle scale: `scale(1.05)`
- Vertical lift: `translateY(-2px)`
- Color shift: No jarring changes

#### Scroll Effects

- Elements fade in as they enter viewport
- Parallax effects on hero (subtle, 3-5% offset)

### Timing

- Quick interactions: 150-200ms
- Standard animations: 300ms
- Entrance effects: 600-800ms
- Page transitions: 500ms

### Easing Functions

- `ease` - General purpose
- `ease-out` - Entrance animations
- `ease-in-out` - Emphasis
- `linear` - Progress indicators (avoid)

## Responsive Design Breakpoints

```css
/* Mobile First Approach */
/* Base: 320px and up */
/* Tablet: 768px and up */
/* Desktop: 1024px and up */
/* Large Desktop: 1440px and up */
```

### Key Breakpoints

- **xs**: 320px (Mobile)
- **sm**: 480px (Landscape mobile)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1440px (Large desktop)

### Mobile Optimization

- Minimum touch target: 44x44px
- Font size minimum: 16px (prevents zoom)
- Margin on sides: 16-20px
- Single column layout below 768px
- Full-width CTAs on mobile

## Accessibility Standards

### Color Contrast

- WCAG AA: 4.5:1 for body text
- WCAG AAA: 7:1 for enhanced contrast
- Never rely on color alone

### Keyboard Navigation

- Tab order: Logical, left-to-right, top-to-bottom
- Focus indicators: Always visible (2px outline minimum)
- Skip links: For long sections

### Screen Readers

- Semantic HTML: Use `<header>`, `<nav>`, `<main>`, `<footer>`
- ARIA labels: For icon buttons, form fields
- Alt text: For all meaningful images

### Motion

- Respect `prefers-reduced-motion`
- No auto-playing videos/animations
- Pause option for carousels

## Visual Hierarchy

### Scale

- Large = Important (headlines, CTAs)
- Small = Supporting (captions, metadata)

### Color

- Bright/saturated = Important
- Desaturated = Supporting
- Dark = Hierarchy levels

### Weight

- Bold = Emphasis
- Regular = Body text
- Light = De-emphasis

### Spacing

- More space around = More important
- Less space = Less important

## Image Guidelines

### Photography Style

- Modern, clean, minimalist
- Real people (diverse representation)
- Bright, well-lit
- Consistent color grading

### Icons

- 24x24px or 32x32px default
- Minimum 2px stroke weight
- Consistent style throughout
- Clearly recognizable

### Illustrations

- Flat design, layered depth
- Consistent line weight
- Brand color palette
- Friendly, approachable tone

## Writing Style

### Tone

- Friendly yet professional
- Empowering and positive
- Clear and direct
- No jargon (explain financial terms)

### Headlines

- Action-oriented
- Benefit-focused
- Concise (< 10 words when possible)
- No ALL CAPS

### Body Copy

- Short paragraphs (2-3 sentences max)
- Active voice
- Conversational tone
- Clear call-to-action

### CTAs

- Start with verb: "Get Started", "Learn More", "Join Now"
- Use FOMO/urgency when appropriate
- Specific vs. generic
- Examples: ✓ "Get Started Free" vs. ✗ "Click Here"

## Code Style

### CSS Variables

```css
:root {
	--color-primary: #14b8a6;
	--spacing-lg: 20px;
	--font-size-h1: 56px;
	--transition: all 0.3s ease;
}
```

### Naming Convention

- Classes: kebab-case (`hero-section`, `cta-button`)
- IDs: camelCase (`mainContent`, `liveChat`)
- Variables: descriptive and semantic

### CSS Organization

1. Variables & typography
2. Global styles & resets
3. Layout components
4. Specific sections
5. Responsive design
6. Animations
7. Utilities

---

**Last Updated**: November 2025
**Version**: 1.0.0

For questions or updates, contact the design team at design@mintly.app

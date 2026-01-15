# Veronica - 高惠莉 - vrn.eth - CV

A modern, interactive single-page CV with dark/light mode, collapsible sections, and responsive two-column layout.

## Features

- ✅ **Dark/Light Mode Toggle** - Persistent theme preference with localStorage
- ✅ **Collapsible Sections** - Click section headers to expand/collapse content
- ✅ **Auto-expand Details** - Work experience and hackathon details open automatically
- ✅ **Two-Column Layout** - Desktop: side-by-side columns, Mobile: single column with custom ordering
- ✅ **Responsive Design** - Optimized for mobile, tablet, and desktop
- ✅ **Print-Friendly** - Clean print styles for PDF export
- ✅ **Modern Typography** - Inter font family with elegant serif for name header
- ✅ **Smooth Animations** - Transitions for section expansion and theme switching

## File Structure

- `index.html` - Main CV page with all content sections
- `styles.css` - Responsive styling with CSS variables for theming
- `script.js` - Interactive features (section toggles, theme switching, auto-expand)
- `vercel.json` - Vercel deployment configuration for static site
- `refs/` - Reference materials and development notes (gitignored)

## Sections

The CV includes the following collapsible sections:

**Left Column (Desktop):**
- Education
- Organizations
- Honors & Awards
- Certifications
- Skills
- Recommendation

**Right Column (Desktop):**
- About Me
- Zuzalu + Startup Societies
- Work Experience
- Articles
- Speaking Engagements

**Mobile Order:**
Sections are reordered on mobile for optimal reading flow: About Me → Education → Organizations → Honors → Zuzalu → Work → Certifications → Skills → Recommendation → Articles → Speaking

## Customization

### Colors & Theme
Edit CSS variables in `styles.css`:
- Light mode: `:root` section
- Dark mode: `[data-theme="dark"]` section

### Content
- Edit `index.html` directly to update content
- Sections use the `collapsible-section` class structure
- Expandable details use `expandable-details` with `toggle-details` buttons

### Auto-expand Behavior
In `script.js`, sections can be configured to auto-expand details:
- Work Experience: All detail toggles open automatically
- Honors & Awards: Hackathon details open automatically

## Deployment

### Vercel (Current)
The site is configured for Vercel deployment with `vercel.json`:
- Framework: null (static site)
- Build command: null (no build step needed)

Simply connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms
This static site can be deployed to:
- GitHub Pages
- Netlify
- Any static hosting service

No build process required - just upload the HTML, CSS, and JS files.

## Development

1. Clone the repository
2. Open `index.html` in a browser
3. Edit content in `index.html`
4. Customize styles in `styles.css`
5. Modify interactions in `script.js`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoint: 968px (tablets and below)

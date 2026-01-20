# Nations Emergentes - Website Clone

A modern, responsive recreation of the Nations Emergentes (Emerging Nations) website, designed for easy deployment to any cloud hosting platform.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Performance Optimized**: Lightweight and fast-loading
- **Easy to Deploy**: Static HTML/CSS/JS files ready for any hosting platform

## Structure

```
nations-emergentes-clone/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Sections Included

1. **Header**: Logo, navigation menu, and shopping cart
2. **Hero Section**: Eye-catching banner with call-to-action
3. **Featured Publications**: Showcase of latest reports and articles
   - The Philippines report
   - Latin America political analysis
   - Philippines discovery video
4. **Survey Section**: User feedback collection
5. **Partners Section**: Display of partner organizations
6. **Footer**: Complete information about the organization
   - About section
   - Values
   - Contact information
   - Address

## Deployment Instructions

### General (Any Hosting Platform)

1. Upload all files (`index.html`, `styles.css`, `script.js`) to your hosting platform
2. Set `index.html` as your default/index page
3. Ensure all files are in the same directory

### Specific Platforms

#### Netlify
1. Drag and drop the entire folder to Netlify
2. Or connect via Git repository

#### Vercel
1. Import the project from your Git repository
2. Or use Vercel CLI: `vercel deploy`

#### AWS S3
1. Create an S3 bucket
2. Enable static website hosting
3. Upload all files
4. Set bucket policy for public access

#### Azure Static Web Apps
1. Create a Static Web App resource
2. Connect to your repository or upload files
3. Configure build settings (none needed for static files)

#### GitHub Pages
1. Push to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select main branch as source

## Customization

### Change Colors
Edit the CSS variables or color values in `styles.css`:
- Primary color: `#ff6b35` (orange)
- Secondary color: `#667eea` (purple)
- Background: `#f5f5f5` (light gray)

### Update Content
Edit `index.html` to change:
- Publication titles and descriptions
- Contact information
- Partner logos
- Footer information

### Add Images
Replace placeholder images with actual images:
```html
<img src="path/to/your/image.jpg" alt="Description">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized CSS with minimal dependencies
- Lightweight JavaScript
- Google Fonts loaded asynchronously
- No heavy frameworks required

## Future Enhancements

Potential features to add:
- Multi-language support (FR/EN switcher)
- CMS integration for easier content management
- E-commerce functionality for publications
- Newsletter subscription
- Search functionality
- Blog section

## License

This is a recreation for rehosting purposes. Ensure you have proper rights to the content before deployment.

## Support

For issues or questions about deployment, consult your hosting platform's documentation or contact their support team.

---

**Note**: Replace placeholder images and lorem ipsum text with actual content before production deployment.

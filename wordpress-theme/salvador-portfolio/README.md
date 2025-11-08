# Salvador Villarroel Portfolio - WordPress Theme

A modern, clean, and fully responsive WordPress theme for Salvador Villarroel's personal portfolio website.

## Features

- **Fully Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Custom Page Templates**: Specialized templates for About, Work, Fun Facts, and Contact pages
- **Smooth Animations**: CSS and JavaScript animations for enhanced user experience
- **SEO Optimized**: Clean HTML5 semantic markup with proper meta tags
- **Performance Optimized**: Lazy loading images, minified assets, optimized load times
- **Accessibility Ready**: ARIA labels, keyboard navigation, screen reader friendly

## Installation

1. Download the theme folder `salvador-portfolio`
2. Upload to your WordPress installation at `/wp-content/themes/`
3. Log in to WordPress Admin
4. Navigate to Appearance > Themes
5. Activate "Salvador Villarroel Portfolio"

## Setup Instructions

### 1. Add Images

Copy the following images to the theme's `images` folder (`/wp-content/themes/salvador-portfolio/images/`):

- `logo.png` - Salvador's logo
- `hero-portrait.png` - Hero section portrait
- `about-photo.jpg` - About page photo
- Additional Fun Facts images as needed

### 2. Create Pages

Create the following pages in WordPress:

1. **Home Page** (uses index.php by default)
2. **About** - Select "About Page" template
3. **Work** - Select "Work Page" template
4. **Fun Facts** - Select "Fun Facts Page" template
5. **Contact** - Select "Contact Page" template

Set the "Home" page as your front page:
- Go to Settings > Reading
- Set "Your homepage displays" to "A static page"
- Select your Home page as the homepage

### 3. Configure Menus

1. Go to Appearance > Menus
2. Create a new menu called "Primary Navigation"
3. Add pages: About, Work, Fun Facts, Contact
4. Assign to "Primary Menu" location
5. Save the menu

### 4. Install Recommended Plugins

For full functionality, install these plugins:

- **Contact Form 7** or **WPForms** - For contact forms
- **Yoast SEO** or **Rank Math** - For SEO optimization
- **Smush** or **ShortPixel** - For image optimization
- **WP Rocket** or **W3 Total Cache** - For caching and performance

### 5. Configure Contact Page

For the meeting scheduler on the Contact page:

- **Option 1**: Use Calendly - Embed your Calendly widget
- **Option 2**: Use Contact Form 7 with date picker add-on
- **Option 3**: Use a booking plugin like "Booking Calendar"

Edit `page-contact.php` to add your booking integration code.

## Customization

### Colors

Edit CSS custom properties in `style.css`:

```css
:root {
  --color-primary: #F8F6F3;      /* Cream background */
  --color-secondary: #1A1A2E;     /* Navy text */
  --color-accent: #E87461;        /* Terracotta accent */
  /* ... more colors */
}
```

### Typography

Fonts are loaded via Google Fonts in `functions.php`. To change fonts:

1. Update the Google Fonts URL in `salvador_portfolio_enqueue_scripts()`
2. Update the CSS custom properties in `style.css`

### Content

Edit page templates directly:
- `index.php` - Home page
- `page-about.php` - About page
- `page-work.php` - Work page
- `page-fun-facts.php` - Fun Facts page
- `page-contact.php` - Contact page

## File Structure

```
salvador-portfolio/
├── style.css              # Main stylesheet with theme info
├── functions.php          # Theme functions and setup
├── header.php            # Header and navigation
├── footer.php            # Footer with CTA
├── index.php             # Home/Hero page
├── page-about.php        # About page template
├── page-work.php         # Work page template
├── page-fun-facts.php    # Fun Facts page template
├── page-contact.php      # Contact page template
├── 404.php              # 404 error page
├── js/
│   ├── navigation.js     # Navigation functionality
│   └── animations.js     # Animation effects
├── images/              # Theme images folder
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Use WebP format when possible, compress all images
2. **Enable Caching**: Use a caching plugin like WP Rocket
3. **Minify Assets**: Use a minification plugin for CSS/JS
4. **Use CDN**: Consider using a CDN for faster global delivery
5. **Lazy Loading**: Already implemented for images

## Support

For issues or questions:
- Email: salvador.vh05@gmail.com
- GitHub: https://github.com/VHSalvador
- LinkedIn: https://www.linkedin.com/in/villarroel-hektor-salvador-45080732b/

## Credits

- **Design & Development**: Salvador Villarroel
- **Fonts**: Google Fonts (Playfair Display, Inter, Montserrat)
- **Icons**: Lucide Icons (inline SVG)

## License

This theme is licensed under the GNU General Public License v2 or later.

## Changelog

### Version 1.0
- Initial release
- Home, About, Work, Fun Facts, and Contact pages
- Responsive navigation with mobile menu
- Smooth scroll animations
- SEO optimized structure

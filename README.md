# Personal Portfolio Website

A fully responsive, modern personal portfolio website built with HTML, CSS, and JavaScript. This portfolio features a clean design, smooth animations, and is easily customizable for your personal use.

## Features

- ✨ **Fully Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Mobile-First Approach** - Optimized for mobile devices
- 🚀 **Smooth Scrolling** - Seamless navigation between sections
- 📝 **Contact Form** - Functional contact form with validation
- 🎯 **Interactive Elements** - Hover effects, scroll animations, and more
- 🔧 **Easy Customization** - Simple to modify with your content

## Sections

1. **Hero Section** - Introduction and call-to-action
2. **About Section** - Personal information and statistics
3. **Skills Section** - Technical skills and technologies
4. **Projects Section** - Showcase of your work
5. **Contact Section** - Contact form and information

## Quick Start

1. **Download/Clone** the files to your local machine
2. **Open** `index.html` in your web browser
3. **Customize** the content as needed (see customization guide below)
4. **Deploy** to your preferred hosting service

## Customization Guide

### 1. Personal Information

#### Update Your Name and Title
```html
<!-- In index.html, update these lines: -->
<title>Your Name - Portfolio</title>
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Full Stack Developer & Designer</p>
```

#### Update About Section
```html
<!-- Update the about section text: -->
<p>
    I'm a passionate developer with a love for creating innovative digital solutions. 
    With expertise in modern web technologies, I focus on building responsive, 
    accessible, and performant applications that deliver exceptional user experiences.
</p>

<!-- Update statistics: -->
<div class="stat">
    <h3>3+</h3>
    <p>Years Experience</p>
</div>
```

#### Update Contact Information
```html
<!-- Update contact details: -->
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, Country</span>

<!-- Update social media links: -->
<a href="https://github.com/yourusername" class="social-link"><i class="fab fa-github"></i></a>
<a href="https://linkedin.com/in/yourusername" class="social-link"><i class="fab fa-linkedin"></i></a>
```

### 2. Projects Section

#### Add/Modify Projects
```html
<!-- Duplicate and modify this structure for each project: -->
<div class="project-card">
    <div class="project-image">
        <!-- Replace with your project image or keep placeholder -->
        <div class="project-placeholder">
            <i class="fas fa-project-diagram"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project goes here. Explain what the project does, 
           what technologies you used, and what problems it solves.</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
        </div>
        <div class="project-links">
            <a href="https://github.com/yourusername/project" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="https://yourproject.com" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
</div>
```

#### Project Icons
You can change the project icons by updating the Font Awesome classes:
- `fa-project-diagram` - General project
- `fa-mobile-alt` - Mobile app
- `fa-chart-line` - Data/analytics
- `fa-shopping-cart` - E-commerce
- `fa-gamepad` - Game
- `fa-palette` - Design project

### 3. Skills Section

#### Update Skills and Technologies
```html
<!-- Modify the skills in each category: -->
<div class="skill-category">
    <h3>Frontend</h3>
    <div class="skill-items">
        <div class="skill-item">
            <i class="fab fa-html5"></i>
            <span>HTML5</span>
        </div>
        <!-- Add more skills as needed -->
    </div>
</div>
```

#### Available Font Awesome Icons for Skills
- `fab fa-html5` - HTML5
- `fab fa-css3-alt` - CSS3
- `fab fa-js` - JavaScript
- `fab fa-react` - React
- `fab fa-vuejs` - Vue.js
- `fab fa-angular` - Angular
- `fab fa-node-js` - Node.js
- `fab fa-python` - Python
- `fab fa-java` - Java
- `fab fa-php` - PHP
- `fab fa-git-alt` - Git
- `fab fa-docker` - Docker
- `fab fa-aws` - AWS

### 4. Styling Customization

#### Color Scheme
Update the main colors in `styles.css`:
```css
/* Primary colors - update these values */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #2d3748;
    --text-light: #4a5568;
    --background-light: #f7fafc;
}
```

#### Fonts
Change the font family in `styles.css`:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

Then update the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### 5. Adding Your Profile Picture

#### Replace Placeholder with Real Image
```html
<!-- Replace the profile placeholder in the hero section: -->
<div class="hero-image">
    <img src="path/to/your/photo.jpg" alt="Your Name" class="profile-image">
</div>
```

Then add CSS for the image:
```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}
```

### 6. Project Images

#### Add Real Project Screenshots
```html
<!-- Replace project placeholders with real images: -->
<div class="project-image">
    <img src="path/to/project-screenshot.jpg" alt="Project Name" class="project-screenshot">
</div>
```

Add CSS for project images:
```css
.project-screenshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload your portfolio files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your portfolio will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your portfolio folder to [netlify.com](https://netlify.com)
2. Get a free subdomain or connect your custom domain
3. Automatic deployments on every push to your repository

### Vercel
1. Connect your GitHub repository to [vercel.com](https://vercel.com)
2. Automatic deployments and previews
3. Custom domain support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Optimized CSS with minimal repaints
- Efficient JavaScript with event delegation
- Smooth animations using CSS transforms
- Responsive images and lazy loading ready
- Minimal external dependencies

## Customization Tips

1. **Keep it Simple** - Don't overcrowd with too many elements
2. **Use High-Quality Images** - For profile and project screenshots
3. **Test on Mobile** - Always test responsive behavior
4. **Optimize Images** - Compress images for faster loading
5. **Regular Updates** - Keep your projects and skills current

## Support

If you need help customizing your portfolio:

1. Check the HTML structure for the section you want to modify
2. Update the corresponding CSS classes in `styles.css`
3. Test changes in your browser
4. Use browser developer tools to debug styling issues

## License

This portfolio template is free to use for personal and commercial projects.

---

**Happy Customizing!** 🎉

Feel free to modify this template to match your personal style and showcase your unique skills and projects. 
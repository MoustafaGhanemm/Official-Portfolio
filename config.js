// Portfolio Configuration File
// Update these values to customize your portfolio

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Your Name",
        title: "Full Stack Developer & Designer",
        subtitle: "I create beautiful, functional, and user-centered digital experiences.",
        description: "Passionate about clean code and innovative solutions.",
        email: "your.email@example.com",
        phone: "+1 (555) 123-4567",
        location: "Your City, Country",
        about: [
            "I'm a passionate developer with a love for creating innovative digital solutions. With expertise in modern web technologies, I focus on building responsive, accessible, and performant applications that deliver exceptional user experiences.",
            "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
        ],
        stats: [
            { number: "3+", label: "Years Experience" },
            { number: "20+", label: "Projects Completed" },
            { number: "15+", label: "Happy Clients" }
        ]
    },

    // Social Media Links
    social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername",
        instagram: "https://instagram.com/yourusername"
    },

    // Skills and Technologies
    skills: {
        frontend: [
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "React", icon: "fab fa-react" },
            { name: "Vue.js", icon: "fab fa-vuejs" }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Python", icon: "fab fa-python" },
            { name: "MongoDB", icon: "fas fa-database" },
            { name: "Express.js", icon: "fas fa-server" },
            { name: "PostgreSQL", icon: "fas fa-database" }
        ],
        tools: [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "AWS", icon: "fab fa-aws" },
            { name: "Linux", icon: "fas fa-terminal" },
            { name: "Figma", icon: "fab fa-figma" }
        ]
    },

    // Projects
    projects: [
        {
            name: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, payment processing, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/yourusername/ecommerce",
            live: "https://your-ecommerce.com",
            icon: "fas fa-shopping-cart"
        },
        {
            name: "Task Management App",
            description: "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
            technologies: ["Vue.js", "Firebase", "CSS3", "PWA"],
            github: "https://github.com/yourusername/task-app",
            live: "https://your-task-app.com",
            icon: "fas fa-tasks"
        },
        {
            name: "Data Visualization Dashboard",
            description: "An interactive dashboard for data analysis and visualization using D3.js, with real-time data updates and customizable charts.",
            technologies: ["D3.js", "Python", "Flask", "Chart.js"],
            github: "https://github.com/yourusername/dashboard",
            live: "https://your-dashboard.com",
            icon: "fas fa-chart-line"
        },
        {
            name: "Portfolio Website",
            description: "A responsive portfolio website built with modern web technologies, featuring smooth animations and mobile-first design.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
            github: "https://github.com/yourusername/portfolio",
            live: "https://your-portfolio.com",
            icon: "fas fa-globe"
        }
    ],

    // Contact Form Settings
    contact: {
        enabled: true,
        // Add your form handling service here
        // Examples: Formspree, Netlify Forms, or custom backend
        formspree: "https://formspree.io/f/your-form-id",
        netlify: false
    },

    // Theme and Styling
    theme: {
        primaryColor: "#667eea",
        secondaryColor: "#764ba2",
        accentColor: "#f093fb",
        textColor: "#2d3748",
        backgroundColor: "#f7fafc",
        fontFamily: "Inter"
    },

    // SEO and Meta
    seo: {
        title: "Your Name - Portfolio | Full Stack Developer",
        description: "Professional portfolio showcasing web development projects, skills, and experience in modern technologies.",
        keywords: "web developer, full stack, portfolio, projects, skills",
        author: "Your Name",
        ogImage: "path/to/your/og-image.jpg"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}

// Make available globally for browser use
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG; 
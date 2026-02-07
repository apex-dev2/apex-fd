const projects = [
    {
        title: "Modern E-Commerce",
        category: "Mobile App",
        img: "assets/MobileApp/01.jpeg",
        description: "Comprehensive shopping app enabling product discovery, personalized recommendations, and seamless checkout—built to boost sales, improve user engagement, and streamline inventory management.",
        techStack: ["Flutter", "Firebase", "Stripe"],
    },
    {
        title: "Smart Food Delivery",
        category: "Mobile App",
        img: "assets/MobileApp/02.jpeg",
        description: "Intuitive mobile app for browsing restaurants, customizing orders, and tracking real- time deliveries—designed to enhance convenience, speed, and customer satisfaction with secure payment integration.",
        techStack: ["Flutter", "Google Maps API", "Node.js"]
    },
    {
        title: "Learning Management System",
        category: "Web App",
        img: "assets/WebApp/01.jpeg",
        description: "A modern, intuitive dashboard interface designed for web and mobile apps, focusing on clean layout, smooth navigation,        and user- friendly data visualization to enhance user experience.",
        techStack: ["React", "Bootstrap", "Node.js"]
    },
    {
        title: "Smart Project Management System (PMS)",
        category: "Web App",
        img: "assets/WebApp/02.jpeg",
        description: "An intelligent dashboard solution that provides real-time task insights, progress tracking, and performance monitoring for efficient project execution.",
        techStack: ["React", "Bootstrap", "Node.js"]
    },
    {
        title: "Enterprise Website Solution",
        category: "Website Development",
        img: "assets/Website/02.jpeg",
        description: "Professional-grade website tailored for corporate branding, service presentation, and client engagement—featuring responsive design, SEO optimization, and integrated contact solutions.",
        techStack: ["Vue.js", "HTML/CSS", "Django", "Nest.js", "Node.js", "RestAPI"],
    },
    {
        title: "Professional Portfolio Website",
        category: "Website Development",
        img: "assets/Website/01.jpeg",
        description: "Sleek and visually engaging portfolio site designed to showcase professional work, highlight creative skills, and attract potential clients through elegant layouts and immersive storytelling",
        techStack: ["React.js", "Tailwind CSS", "MongoDB", "Node.js", "RestAPI"],
    },
    {
        title: "Automated Software Testing",
        category: "QA Services",
        img: "assets/QATesting/01.jpeg",
        description: "Scalable automation testing framework designed to accelerate release cycles, improve accuracy, and reduce costs—leveraging advanced tools and scripts for regression, performance, and continuous integration testing.",
        techStack: ["Selenium", "Python", "Jenkins"]
    },
    {
        title: "Manual Software Testing",
        category: "QA Services",
        img: "assets/QATesting/02.jpg",
        description: "Comprehensive manual testing to validate functionality, usability, and performance—ensuring software quality through human- driven test cases, exploratory testing, and detailed defect reporting.",
        techStack: ["Selenium", "Python", "Jenkins"]
    },
];

const grid = document.querySelector('.portfolio-grid');
if (grid) {
    grid.innerHTML = projects.map(p => `
        <article class="portfolio-card">
            <div class="port-img-wrapper">
                <img src="${p.img}" loading="lazy" alt="${p.title}">
            </div>
            <div class="port-content">
                <span class="category">${p.category}</span>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="port-stack">
                    ${p.techStack.map(tech =>
        `<span>${tech}</span>`
    ).join('')}
                </div>
            </div>
        </article>
    `).join('');
}


// Portfolio card bottom Case Study Button

{/* < a class="btn-secondary" > Case Study
    < svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke - width="2"
stroke - linecap="round" stroke - linejoin="round" style = "width:1.2em; height:1.2em;" >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
</svg >
                            </a >  */}
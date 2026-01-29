document.addEventListener("DOMContentLoaded", () => {

    //  MOBILE MENU LOGIC

    const toggler = document.getElementById("toggler");
    const menu = document.getElementById("mobile-menu");
    const navItems = document.querySelectorAll('.nav-a');

    if (toggler && menu) {
        toggler.addEventListener('click', () => {
            const isVisible = menu.classList.contains("menu-list");

            if (isVisible) {
                menu.classList.remove("menu-list");
                toggler.classList.remove("active");
            } else {
                toggler.classList.add("active");
                menu.classList.add("menu-list");
            }
        });
    }

    //  MENU TOGGLE SETTINGS

    document.addEventListener('click', (e) => {
        if (e.target.id !== toggler.id && e.target.id !== menu.id) {
            if (toggler.classList.contains("active"))
                toggler.classList.remove("active");
            if (menu.classList.contains("menu-list"))
                menu.classList.remove("menu-list");
        }
    });

    //  ACTIVE LINK INDICATION
    const sections = document.querySelectorAll('section[id], header[id]');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navItems.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
        if (document.getElementById("mobile-menu").classList.contains("menu-list")) {
            document.getElementById("mobile-menu").classList.remove("menu-list");
        }
    }
})
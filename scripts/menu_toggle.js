document.addEventListener("DOMContentLoaded", () => {

    //  MOBILE MENU LOGIC
    const toggler = document.getElementById("toggler");
    const menu = document.getElementById("mobile-menu");
    const navItems = document.querySelectorAll('.nav-a');

    if (toggler && menu) {
        toggler.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = toggler.getAttribute('aria-expanded') === 'true';

            // for visual classes
            toggler.classList.toggle("active");
            menu.classList.toggle("menu-list");

            // for ARIA state
            const isVisible = menu.classList.contains("menu-list");
            toggler.setAttribute('aria-expanded', !isExpanded);
        });
    }

    //  Handle closing when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggler.contains(e.target)) {
            if (menu.classList.contains("menu-list")) {
                menu.classList.remove("menu-list");
                toggler.classList.remove("active");
                toggler.setAttribute('aria-expanded', 'false');
            }
        }
    });

    //  ACTIVE LINK INDICATION
    const sections = document.querySelectorAll('section[id], header[id]');
    const options = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');

                navItems.forEach(link => {
                    if (link.getAttribute('href') === `#${currentId}`) {
                        navItems.forEach(l => l.classList.remove('active-link'));
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Hint: While mobile menu toggle is ON, switching from smaller screens to bigger screens will close the opened/ON mobile menu dropdown
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 767 && menu.classList.contains("menu-list")) {
                menu.classList.remove("menu-list");
                toggler.classList.remove("active");
                toggler.setAttribute('aria-expanded', 'false');
            }
        }, 250);
    });
});
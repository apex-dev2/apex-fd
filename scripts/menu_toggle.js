document.addEventListener("DOMContentLoaded", () => {
    const toggler = document.querySelector("#toggler");
    const menu = document.querySelector("#mobile-menu");

    document.addEventListener('click', (e) => {
        if (e.target.id === "toggler") {
            toggler.classList.toggle("active");
            menu.classList.toggle("menu-list");
        }
        else if (e.target.id === "mobile-menu") {
            return
        }
        else {
            if (toggler.classList.contains("active"))
                toggler.classList.remove("active");
            if (menu.classList.contains("menu-list"))
                menu.classList.remove("menu-list");
        }
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
        if (document.querySelector("#mobile-menu").classList.contains("menu-list")) {
            document.querySelector("#mobile-menu").classList.remove("menu-list");
        }
    }
})
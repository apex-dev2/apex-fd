const clients = [
    {
        img: "assets/Profile.jpg",
        tag: "Mobile App",
        name: "Jessica Lee",
        locality: "Singapore",
        stars: "4.8 ⭐",
        description: "Smooth app experience with strong attention to usability issues.",
    },
    {
        img: "assets/Profile.jpg",
        tag: "Mobile App",
        name: "Robert Taylor",
        locality: "Germany",
        stars: "5.0 ⭐",
        description: "Excellent mobile app quality assurance and detailed testing reports.",
    },
    {
        img: "assets/Profile.jpg",
        tag: "Mobile App",
        name: "Ali Khan",
        locality: "Pakistan",
        stars: "4.9 ⭐",
        description: "App testing and performance were handled very professionally.",
    },
    {
        img: "assets/Profile.jpg",
        tag: "Web Dev",
        name: "Sarah Williams",
        locality: "USA",
        stars: "4.8 ⭐",
        description: "Great web solution. Clean UI and smooth performance across browsers.",
    },
    {
        img: "assets/Profile.jpg",
        tag: "Web Dev",
        name: "Daniel Smith",
        locality: "Australia",
        stars: "5.0 ⭐",
        description: "Website delivered on time with excellent responsiveness and quality.",
    },
    {
        img: "assets/Profile.jpg",
        tag: "Web Dev",
        name: "Michael Brown",
        locality: "Canada",
        stars: "4.7 ⭐",
        description: "Very satisfied with the web project and ongoing support.",
    },
    {
        img: "assets/Profile.jpg",
        tag: "SQA",
        name: "John Miller",
        locality: "UK",
        stars: "5.0 ⭐",
        description: "Excellent SQA services. Manual testing was very detailed and accurate.",
    },
    {
        img: "assets/Profile.jpg",
        tag: "SQA",
        name: "Ahmed Hassan",
        locality: "UAE",
        stars: "4.9 ⭐",
        description: "Professional QA testing with clear bug reports and quick delivery.",
    },
]

document.addEventListener('DOMContentLoaded', () => {
    const sliderContent = document.querySelector(".slider-content");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (!sliderContent) return;

    sliderContent.innerHTML = clients.map(client => `
        <div class="card">
            <div class="card-header">
                <div class="card-header-profile">
                    <div class="card-img">
                        <img src="${client.img}" alt="${client.tag}" loading="lazy">
                    </div>
                    <div class="card-client">
                        <span class="client-name">${client.name}</span>
                        <span class="client-locality">(${client.locality})</span>
                    </div>
                </div>
                <div class="card-rating">
                    <span class="rating-stars">${client.stars}</span>
                </div>
            </div>
            <div class="card-description">"${client.description}"</div>
            <div class="card-tag">
                <span>${client.tag}</span>
            </div>
        </div>
    `).join('');

    let isAnimating = false;

    const getScrollAmount = () => {
        const card = sliderContent.querySelector(".card");
        if (!card) return 0;
        const style = window.getComputedStyle(sliderContent);
        const gap = parseFloat(style.gap) || 16;

        return card.offsetWidth + gap;
    };

    const moveNext = () => {
        if (isAnimating) return;
        isAnimating = true;
        const moveAmount = getScrollAmount();
        sliderContent.style.transition = "transform 0.4s ease-in-out";
        sliderContent.style.transform = `translateX(-${moveAmount}px)`;
        setTimeout(() => {
            sliderContent.style.transition = "none";
            sliderContent.appendChild(sliderContent.firstElementChild);
            sliderContent.style.transform = "translateX(0)";
            isAnimating = false;
        }, 400);
    };

    const movePrev = () => {
        if (isAnimating) return;
        isAnimating = true;
        const moveAmount = getScrollAmount();
        sliderContent.style.transition = "none";
        sliderContent.prepend(sliderContent.lastElementChild);
        sliderContent.style.transform = `translateX(-${moveAmount}px)`;
        void sliderContent.offsetWidth;
        sliderContent.style.transition = "transform 0.4s ease-in-out";
        sliderContent.style.transform = "translateX(0)";
        setTimeout(() => {
            isAnimating = false;
        }, 400);
    };

    // Event Listeners
    if (nextBtn) nextBtn.addEventListener("click", moveNext);
    if (prevBtn) prevBtn.addEventListener("click", movePrev);
});
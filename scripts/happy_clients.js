const clients = [
    {
        img: "assets/profile.jpg",
        tag: "Mobile App",
        name: "Jessica Lee",
        locality: "Singapore",
        stars: "4.8 ⭐",
        description: "Smooth app experience with strong attention to usability issues.",
    },
    {
        img: "assets/profile.jpg",
        tag: "Mobile App",
        name: "Robert Taylor",
        locality: "Germany",
        stars: "5.0 ⭐",
        description: "Excellent mobile app quality assurance and detailed testing reports.",
    },
    {
        img: "assets/profile.jpg",
        tag: "Mobile App",
        name: "Ali Khan",
        locality: "Pakistan",
        stars: "4.9 ⭐",
        description: "App testing and performance were handled very professionally.",
    },
    {
        img: "assets/profile.jpg",
        tag: "Web Dev",
        name: "Sarah Williams",
        locality: "USA",
        stars: "4.8 ⭐",
        description: "Great web solution. Clean UI and smooth performance across browsers.",
    },
    {
        img: "assets/profile.jpg",
        tag: "Web Dev",
        name: "Daniel Smith",
        locality: "Australia",
        stars: "5.0 ⭐",
        description: "Website delivered on time with excellent responsiveness and quality.",
    },
    {
        img: "assets/profile.jpg",
        tag: "Web Dev",
        name: "Michael Brown",
        locality: "Canada",
        stars: "4.7 ⭐",
        description: "Very satisfied with the web project and ongoing support.",
    },
    {
        img: "assets/profile.jpg",
        tag: "SQA",
        name: "John Miller",
        locality: "UK",
        stars: "5.0 ⭐",
        description: "Excellent SQA services. Manual testing was very detailed and accurate.",
    },
    {
        img: "assets/profile.jpg",
        tag: "SQA",
        name: "Ahmed Hassan",
        locality: "UAE",
        stars: "4.9 ⭐",
        description: "Professional QA testing with clear bug reports and quick delivery.",
    },
]

const marquee = document.querySelector(".marquee-content");
if (marquee) {
    marquee.innerHTML = clients.map(client =>
        `
        <div class="card">
            <div class="card-header">
                <div class="card-header-profile">
                    <div class="card-img">
                        <img src="${client.img}" alt="${client.tag}">
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
        `
    ).join('');
}

function updateMarqueeAnimation() {
    const marqueeContainer = document.querySelector(".marquee");
    const marqueeContent = document.querySelector(".marquee-content");

    if (!marqueeContent || !marqueeContainer) return;

    const contentWidth = marqueeContent.scrollWidth;
    const containerWidth = marqueeContainer.clientWidth;
    const distance = contentWidth - containerWidth;

    if (distance <= 0) {
        marqueeContent.style.setProperty('--scroll-end', '0px');
        return;
    }

    marqueeContent.style.setProperty('--scroll-end', `-${distance + 50}px`);
}

document.addEventListener("DOMContentLoaded", updateMarqueeAnimation);
window.addEventListener("load", updateMarqueeAnimation);
window.addEventListener("resize", () => {
    setTimeout(updateMarqueeAnimation, 100);
});
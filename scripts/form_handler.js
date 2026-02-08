const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    if (data.message.includes("http")) {
        alert("Links are not allowed in the message for security.");
        return;
    }

    const response = await fetch('https://formspree.io/f/apexfandd', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        alert("Message sent to apexfandd@gmail.com!");
        contactForm.reset();
    }
});
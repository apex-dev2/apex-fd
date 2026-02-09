const contactForm = document.querySelector('#contact form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    console.log(data)

    // SECURITY: Honeypot check for Bots
    if (data.honeypot) {
        console.warn("Bot detected.")
        return;
    }
    delete data.honeypot;

    // DATA VALIDATION
    for (const [key, value] of Object.entries(data)) {
        if (!value.trim()) {
            alert(`Please fill in the ${key} field.`);
            return;
        }
    }

    // EMAIL VALIDATION
    if (!emailRegex.test(data.email)) {
        alert("Your email is invalid. Enter a valid email address.")
        return;
    }

    // SECURITY: ANTI-SPAM

    if (data.message.includes("http") || data.message.includes("www.")) {
        alert("Links are not allowed in the message for security.");
        return;
    }

    // SUBMISSION
    const submitBtn = contactForm.querySelector('button');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;
    submitBtn.style.cursor = "not-allowed";

    try {
        // Paste your FORMSPREE form link here
        const response = await fetch('https://formspree.io/f/xojnvjkb', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("Success: Message sent to Apex F&D.");
            contactForm.reset();
        } else {
            const errorData = await response.json();
            alert("Error sending message: " + errorData.error || "Unknown error");
        }
    } catch (error) {
        alert("Network error. Please try again later.");
        console.error(error);
    } finally {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});
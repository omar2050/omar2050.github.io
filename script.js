document.addEventListener('DOMContentLoaded', () => {

    // --- Configuration ---
    const textElement = document.querySelector('.typewriter');
    const texts = [
        "Data Science.",
        "Machine Learning.",
        "User Experience Design.",
        "Data Analysis."
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    // --- Typewriter Function ---
    function type() {
        // Current full string
        const currentText = texts[textIndex];

        if (isDeleting) {
            // Remove characters
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Faster when deleting
        } else {
            // Add characters
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; // Normal typing speed
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Finished typing word, pause before deleting
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next word
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // Initialize Animation
    setTimeout(type, 1000);
});

// Optional: Console "Easter Egg" for developers viewing your site
console.log(
    "%c Hello! Looking at the code? \n Let's connect on LinkedIn! ",
    "background: #1e1e1e; color: #4ec9b0; font-size: 16px; padding: 10px; border-radius: 5px;"
);
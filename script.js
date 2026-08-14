// =========================
// Happy Birthday Milan
// script.js
// =========================

// Start Movie Button
function startMovie() {

    const music = document.getElementById("bgMusic");

    // Music play
    music.play().catch(() => {});

    // Scroll to first chapter
    document.querySelector(".chapter").scrollIntoView({
        behavior: "smooth"
    });

}

// Reveal animation on scroll
const sections = document.querySelectorAll(
    ".chapter, .letter, .theEnd, .credits"
);

function revealSections() {

    sections.forEach((section) => {

        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight - 120;

        if (top < trigger) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Fade-in title
window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    hero.animate(
        [
            { opacity: 0, transform: "scale(1.05)" },
            { opacity: 1, transform: "scale(1)" }
        ],
        {
            duration: 1800,
            fill: "forwards"
        }
    );

});

// Photo zoom animation
const photos = document.querySelectorAll(".photo");

photos.forEach((photo) => {

    photo.addEventListener("mouseenter", () => {
        photo.style.transform = "scale(1.05)";
    });

    photo.addEventListener("mouseleave", () => {
        photo.style.transform = "scale(1)";
    });

});

// Console Message
console.log("🎉 Happy Birthday Milan ❤️");

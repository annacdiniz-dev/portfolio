const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();


// Animação dos elementos ao aparecerem na tela

const elements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .about-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});
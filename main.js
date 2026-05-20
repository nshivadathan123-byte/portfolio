document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Fade-In (Intersection Observer) ---
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length > 0) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        fadeElements.forEach(el => fadeObserver.observe(el));
    }

    // --- Active Nav Highlighting (Intersection Observer) ---
    const navLinks = document.querySelectorAll('nav ul li a');
    const targets = Array.from(navLinks)
        .map(link => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if (targets.length > 0) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { threshold: 0.2, rootMargin: '-70px 0px -50% 0px' });

        targets.forEach(target => navObserver.observe(target));
    }
});

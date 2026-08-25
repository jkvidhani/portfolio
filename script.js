document.addEventListener("DOMContentLoaded", () => {
    // Basic Carousel Logic for Certifications
    const track = document.getElementById('cert-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if(track && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            const scrollAmount = track.clientWidth / 3;
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            const scrollAmount = track.clientWidth / 3;
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // Scroll Fade Animation Observer
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(el => fadeObserver.observe(el));
});
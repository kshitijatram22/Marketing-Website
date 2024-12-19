document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animated-element');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});

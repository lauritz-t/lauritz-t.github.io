document.addEventListener('DOMContentLoaded', function() {
    
    // Wählt alle Sektionen und den Footer aus, die animiert werden sollen
    const animatedElements = document.querySelectorAll('section, footer');

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 // Löst aus, wenn 10% des Elements sichtbar sind
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
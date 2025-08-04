document.addEventListener('DOMContentLoaded', () => {
    const catalogItems = document.querySelectorAll('.catalog-item');

    catalogItems.forEach(item => {
        // Support both click and touch events for mobile compatibility
        const handleInteraction = (e) => {
            e.preventDefault();
            item.classList.toggle('rotated');
        };

        // Add click event for desktop
        item.addEventListener('click', handleInteraction);
        
        // Add touch events for mobile
        item.addEventListener('touchstart', handleInteraction);
        
        // Prevent default touch behaviors
        item.addEventListener('touchmove', (e) => {
            e.preventDefault();
        });
    });

    // Red
    const catalogButton = Array.from(document.querySelectorAll('button')).find(btn => {
        const span = btn.querySelector('span.btn-txt');
        return span && span.textContent.trim() === 'Catálogo';
    });

    if (catalogButton) {
        catalogButton.addEventListener('click', () => {
            const catalogSection = document.getElementById('catalog');
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    const contactButton = Array.from(document.querySelectorAll('button')).find(btn => {
        const span = btn.querySelector('span.btn-txt');
        return span && span.textContent.trim() === 'Contáctanos';
    });

    if (contactButton) {
        contactButton.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };
});

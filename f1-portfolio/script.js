document.addEventListener('DOMContentLoaded', () => {

    /* ==================================
       1. THEME SWITCHER LOGIC
       ================================== */
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            themeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            // Apply selected theme to the body data attribute
            const selectedTheme = button.getAttribute('data-theme');
            body.setAttribute('data-theme', selectedTheme);
        });
    });

    /* ==================================
       2. SMOOTH SCROLLING FOR NAVBAR
       ================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==================================
       3. HIGH-VELOCITY SCROLL REVEAL
       ================================== */
    // Trigger animations when sections scroll into view for that 'fast' feel
    const revealElements = document.querySelectorAll('.stat-card, .project-card');

    // Add initial CSS for reveal via JS, keeping CSS clean if JS fails
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-50px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
    });

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Trigger before element is fully in view

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.style.opacity = '1';
                el.style.transform = 'translateX(0)';
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on load
    revealOnScroll();

});

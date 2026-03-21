// Main JavaScript for The Happy Project Landing Page

document.addEventListener('DOMContentLoaded', function() {
    
    // Form submission handler
    const leadForm = document.getElementById('leadForm');
    const formSuccess = document.getElementById('formSuccess');
    const formContainer = document.querySelector('.form-container');
    
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(leadForm);
            const data = Object.fromEntries(formData.entries());
            
            // Log the data (in production, send to backend/API)
            console.log('Lead captured:', data);
            
            // Show success message with animation
            leadForm.style.display = 'none';
            formSuccess.style.display = 'block';
            formSuccess.style.animation = 'fadeIn 0.5s ease';
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.testimonial-card, .future-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add parallax effect to hero (subtle)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = (scrolled * 0.1) + 'px';
        }
    });
    
    // Add animation keyframes dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    // Console log for tracking (analytics placeholder)
    console.log('🔥 Happy Project Landing Page Loaded');
    console.log('📝 Ready to capture leads');
});

// Handle navigation to allow smooth scrolling on same page
document.addEventListener('DOMContentLoaded', function() {
    // Get navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

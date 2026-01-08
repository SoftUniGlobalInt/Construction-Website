// Handle smooth scrolling for anchor links on the same page
document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor links (links that start with #)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add smooth scrolling for anchor links
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Navigation links to external pages (about.html, services.html, contacts.html) 
    // will work naturally by default navigation
});

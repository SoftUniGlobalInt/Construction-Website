// Load about.html content into the About section
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    
    if (aboutSection) {
        // Fetch the about.html content
        fetch('about.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load about.html');
                }
                return response.text();
            })
            .then(html => {
                // Parse the fetched HTML to extract main content
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                // Get the main content (excluding header and footer)
                const mainContent = doc.querySelector('main');
                
                if (mainContent) {
                    // Replace the About section content with the main content from about.html
                    aboutSection.innerHTML = mainContent.innerHTML;
                }
            })
            .catch(error => {
                console.error('Error loading about content:', error);
                aboutSection.innerHTML = '<div class="container"><p>Error loading content. Please visit <a href="about.html">about.html</a> directly.</p></div>';
            });
    }
});

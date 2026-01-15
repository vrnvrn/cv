// Interactive CV Script - Toggle Details and Sections

// Dark Mode Toggle
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initTheme();
    // Initialize all sections as collapsed
    const allSections = document.querySelectorAll('.collapsible-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });

    // Toggle functionality for section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link
            if (e.target.tagName === 'A') {
                return;
            }
            
            const targetId = this.getAttribute('data-target');
            const sectionContent = document.getElementById(targetId);
            const section = this.closest('.collapsible-section');
            
            if (section && sectionContent) {
                const isActive = section.classList.contains('active');
                
                if (isActive) {
                    section.classList.remove('active');
                } else {
                    section.classList.add('active');
                    
                    // If this is the work experience section, open all detail toggles
                    if (targetId === 'work-section-content') {
                        const workSection = document.getElementById('work-section-content');
                        const detailToggles = workSection.querySelectorAll('.toggle-details');
                        detailToggles.forEach(toggle => {
                            const detailTargetId = toggle.getAttribute('data-target');
                            const detailContent = document.getElementById(detailTargetId);
                            if (detailContent && !detailContent.classList.contains('active')) {
                                detailContent.classList.add('active');
                                toggle.classList.add('active');
                                toggle.textContent = '▼ read more';
                            }
                        });
                    }
                }
            }
        });
    });

    // Toggle functionality for expandable details
    const toggleButtons = document.querySelectorAll('.toggle-details');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent section toggle when clicking detail toggle
            const targetId = this.getAttribute('data-target');
            const detailsContent = document.getElementById(targetId);
            
            if (detailsContent) {
                const isActive = detailsContent.classList.contains('active');
                
                if (isActive) {
                    detailsContent.classList.remove('active');
                    this.classList.remove('active');
                    this.textContent = '→ read more';
                } else {
                    detailsContent.classList.add('active');
                    this.classList.add('active');
                    this.textContent = '▼ read more';
                }
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
});

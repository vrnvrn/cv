// Interactive CV Script

document.addEventListener('DOMContentLoaded', function() {
    // Project card expansion
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link
            if (e.target.tagName === 'A') {
                return;
            }
            
            // Toggle active class
            const isActive = this.classList.contains('active');
            
            // Close all other cards
            projectCards.forEach(c => c.classList.remove('active'));
            
            // Toggle current card
            if (!isActive) {
                this.classList.add('active');
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

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Initialize first section as visible
    const firstSection = document.querySelector('section');
    if (firstSection) {
        firstSection.style.opacity = '1';
        firstSection.style.transform = 'translateY(0)';
    }
});

// Placeholder for adding LinkedIn data
// Update these when you have the actual links and data
const links = {
    linkedin: '#', // Add your LinkedIn URL
    email: 'mailto:', // Add your email
    portfolio: '#', // Add your portfolio URL
    zuvillage: '#', // Add ZuVillage Georgia link
    zuitzerland: '#', // Add Zuitzerland link
    zuitzerlandReport: '#', // Add Zuitzerland full report link
    zuzalu: '#' // Add Zuzalu link
};

// Update links when data is available
function updateLinks() {
    Object.keys(links).forEach(key => {
        const element = document.getElementById(`${key}-link`);
        if (element && links[key] !== '#') {
            element.href = links[key];
        }
    });
    
    const zuitzerlandReport = document.getElementById('zuitzerland-report');
    if (zuitzerlandReport && links.zuitzerlandReport !== '#') {
        zuitzerlandReport.href = links.zuitzerlandReport;
    }
}

// Call this function when you have the actual links
// updateLinks();

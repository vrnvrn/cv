// Interactive CV Script - Toggle Details and Sections

// Fetch and update FLOSS app last commit dates from GitHub API
async function updateFlossCommitDates() {
    const flossItems = document.querySelectorAll('.floss-item');
    
    for (const item of flossItems) {
        const githubLink = item.querySelector('a.floss-link[href*="github.com"]');
        const datesEl = item.querySelector('.floss-dates');
        
        if (!githubLink || !datesEl) continue;
        
        // Extract owner/repo from GitHub URL
        const match = githubLink.href.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) continue;
        
        const [, owner, repo] = match;
        
        try {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
            if (!response.ok) continue;
            
            const commits = await response.json();
            if (commits.length === 0) continue;
            
            const lastCommitDate = commits[0].commit.author.date.split('T')[0];
            
            // Update the dates text, preserving initial commit
            const currentText = datesEl.textContent;
            const initialMatch = currentText.match(/initial commit: (\d{4}-\d{2}-\d{2})/);
            if (initialMatch) {
                datesEl.textContent = `initial commit: ${initialMatch[1]} // last commit: ${lastCommitDate}`;
            }
        } catch (error) {
            console.warn(`Failed to fetch commit date for ${owner}/${repo}:`, error);
        }
    }
}

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
    
    // Fetch latest commit dates for FLOSS apps
    updateFlossCommitDates();
    
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
                    
                    // If this is the honors section, open the hackathon details
                    if (targetId === 'honors-section-content') {
                        const sub0Details = document.getElementById('sub0-details');
                        const sub0Toggle = document.querySelector('[data-target="sub0-details"]');
                        if (sub0Details && sub0Toggle && !sub0Details.classList.contains('active')) {
                            sub0Details.classList.add('active');
                            sub0Toggle.classList.add('active');
                            sub0Toggle.textContent = '▼ read more';
                        }
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

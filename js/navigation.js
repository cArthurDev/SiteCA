document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Navigation
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-links a');

    function navigateToSection(sectionId) {
        sections.forEach(section => section.classList.remove('active'));
        navItems.forEach(item => item.classList.remove('active'));

        const targetSection = document.querySelector(sectionId);
        const targetNavItem = document.querySelector(`a[href="${sectionId}"]`);

        targetSection.classList.add('active');
        targetNavItem.classList.add('active');
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('href');
            navigateToSection(sectionId);
            navLinks.classList.remove('active');
        });
    });

    // Navigate to hash on page load
    const hash = window.location.hash || '#home';
    navigateToSection(hash);
});
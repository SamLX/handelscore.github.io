document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    if (navContainer && navLinks) {
        // Create mobile menu button
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.innerHTML = `
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        `;
        mobileBtn.setAttribute('aria-label', 'Menu toggle');

        // Insert it before nav-links
        navContainer.insertBefore(mobileBtn, navLinks);

        // Toggle menu
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
            mobileBtn.classList.toggle('is-active');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page || '';
    const siteHeader = document.querySelector('[data-site-header]');
    const siteFooter = document.querySelector('[data-site-footer]');

    if (siteHeader) {
        siteHeader.outerHTML = buildHeader(page);
    }

    if (siteFooter) {
        siteFooter.outerHTML = buildFooter();
    }

    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');

    if (navContainer && navLinks) {
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.innerHTML = `
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        `;
        mobileBtn.setAttribute('aria-label', 'Menue umschalten');
        navContainer.insertBefore(mobileBtn, navLinks);

        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
            mobileBtn.classList.toggle('is-active');
        });
    }
});

function buildHeader(page) {
    return `
        <header class="header">
            <div class="container nav-container">
                <a href="index.html" class="logo">
                    <img src="assets/img/logo/logo_bg_m.png" alt="" aria-hidden="true"
                        onerror="this.src=''; this.alt='HandelScore Logo';">
                    <span>Handel<span class="brand-accent">Score</span></span>
                </a>
                <nav class="nav-links">
                    <a href="index.html" class="${page === 'home' ? 'active' : ''}">Startseite</a>
                    <a href="loesung.html" class="${page === 'loesung' ? 'active' : ''}">Lösung</a>
                    <a href="kontakt.html" class="btn btn-primary ${page === 'kontakt' ? 'active' : ''}">Kontakt</a>
                </nav>
            </div>
        </header>
    `;
}

function buildFooter() {
    return `
        <footer class="footer">
            <div class="container footer-grid">
                <div>
                    <a href="index.html" class="footer-logo">
                        <span>Handel<span class="brand-accent">Score</span></span>
                    </a>
                    <p style="max-width: 300px;">Regelbasiertes Risikosignal für Unternehmen per USt-IdNr. für B2B-Prüfprozesse.</p>
                </div>
                <div>
                    <h4>Produkt</h4>
                    <ul>
                        <li><a href="index.html">Startseite</a></li>
                        <li><a href="loesung.html">Lösung</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Rechtliches</h4>
                    <ul>
                        <li><a href="agb.html">AGB</a></li>
                        <li><a href="datenschutz.html">Datenschutz</a></li>
                        <li><a href="impressum.html">Impressum</a></li>
                    </ul>
                </div>
            </div>
            <div class="container footer-bottom">
                <div>&copy; 2026 HandelScore. Alle Rechte vorbehalten.</div>
                <div style="display: inline-flex; align-items: center; gap: 0.35rem;"><img src="assets/img/logo/flag-de.svg" alt="Deutschland" style="width: 18px; height: 12px; display: inline-block; flex: 0 0 auto;">Made in Germany</div>
            </div>
        </footer>
    `;
}

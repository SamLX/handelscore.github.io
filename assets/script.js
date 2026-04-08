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

    initScreenshotLightbox();
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
                    <p class="footer-tagline">Regelbasiertes Risikosignal für Unternehmen per USt-IdNr. für B2B-Prüfprozesse.</p>
                </div>
                <div>
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="index.html">Startseite</a></li>
                        <li><a href="kontakt.html">Kontakt</a></li>
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

function initScreenshotLightbox() {
    const screenshotCards = document.querySelectorAll('.screenshot-card');

    if (!screenshotCards.length) {
        return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
        <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Bildvorschau">
            <button class="lightbox-close" type="button" aria-label="Bildvorschau schliessen">&times;</button>
            <figure class="lightbox-figure">
                <img class="lightbox-image" alt="">
                <figcaption class="lightbox-caption"></figcaption>
            </figure>
        </div>
    `;

    document.body.appendChild(overlay);

    const dialog = overlay.querySelector('.lightbox-dialog');
    const image = overlay.querySelector('.lightbox-image');
    const caption = overlay.querySelector('.lightbox-caption');
    const closeButton = overlay.querySelector('.lightbox-close');

    const closeLightbox = () => {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
        image.removeAttribute('src');
        caption.textContent = '';
    };

    screenshotCards.forEach((card) => {
        card.addEventListener('click', (event) => {
            event.preventDefault();

            const preview = card.querySelector('img');
            const previewCaption = card.querySelector('figcaption');

            if (!preview) {
                return;
            }

            image.src = card.href;
            image.alt = preview.alt || '';
            caption.textContent = previewCaption ? previewCaption.textContent.trim() : '';

            overlay.classList.add('is-open');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.classList.add('lightbox-open');
            closeButton.focus();
        });
    });

    closeButton.addEventListener('click', closeLightbox);

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeLightbox();
        }
    });

    dialog.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
            closeLightbox();
        }
    });
}

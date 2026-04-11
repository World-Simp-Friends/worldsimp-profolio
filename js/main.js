class Router {
    constructor() {
        this.app = document.querySelector('.app');
        this.contentDiv = document.querySelector('.content');
        this.isInitialLoad = true;
        this.routes = {
            home: '/js/pages/home.js',
            projects: '/js/pages/home.js',
            works: '/js/pages/works.js',
            video: '/js/pages/video.js'
        };
        this.scrollPositions = new Map();
        this.observer = null;
        history.scrollRestoration = 'manual';
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => {
            // Hamburger toggle
            if (e.target.closest('.hamburger')) {
                this.toggleMobileNav();
                return;
            }

            // Close mobile nav if clicking overlay link
            const mobileNavLink = e.target.closest('.mobile-nav a[data-route]');
            if (mobileNavLink) {
                this.closeMobileNav();
            }

            // SPA routing
            const link = e.target.closest('a[data-route]');
            if (!link) return;
            e.preventDefault();
            this.saveScrollPosition();
            const route = link.getAttribute('href');
            if (route) this.navigateTo(route);
        });

        // Event delegation for copy buttons (replaces inline onclick)
        document.addEventListener('click', (e) => {
            const copyBtn = e.target.closest('[data-copy-target]');
            if (!copyBtn) return;
            const selector = copyBtn.getAttribute('data-copy-target');
            this.copyTextFromElement(selector);
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const copyBtn = e.target.closest('[data-copy-target]');
                if (!copyBtn) return;
                e.preventDefault();
                const selector = copyBtn.getAttribute('data-copy-target');
                this.copyTextFromElement(selector);
            }
        });

        // Close mobile nav on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeMobileNav();
        });

        window.addEventListener('popstate', () => this.handleRouteChange());
        window.addEventListener('beforeunload', () => this.saveScrollPosition());
        this.handleRouteChange();
    }

    toggleMobileNav() {
        const btn = document.querySelector('.hamburger');
        const nav = document.querySelector('.mobile-nav');
        if (!btn || !nav) return;
        const isOpen = btn.classList.contains('open');
        if (isOpen) {
            this.closeMobileNav();
        } else {
            btn.classList.add('open');
            nav.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
            nav.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    closeMobileNav() {
        const btn = document.querySelector('.hamburger');
        const nav = document.querySelector('.mobile-nav');
        if (!btn || !nav) return;
        btn.classList.remove('open');
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    setActiveNavLink() {
        const path = window.location.pathname;
        const allLinks = document.querySelectorAll('a[data-route]');
        allLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });

        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            // Match basepath only (ignore hash anchors)
            const linkPath = href.split('#')[0];
            if (path === linkPath || (path === '/home' && href === '/home')) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    initScrollAnimations() {
        // Disconnect previous observer to prevent memory leaks
        if (this.observer) {
            this.observer.disconnect();
        }

        const elements = this.contentDiv.querySelectorAll('.fade-in-up');
        if (!elements.length) return;

        // Respect prefers-reduced-motion
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            elements.forEach(el => el.classList.add('visible'));
            return;
        }

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        elements.forEach(el => this.observer.observe(el));
    }

    copyTextFromElement(selector) {
        const el = document.querySelector(selector);
        if (!el) return;
        const text = el.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
            this.showCopyNotification('Copied!');
        }).catch(() => {
            // Fallback for older browsers
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            this.showCopyNotification('Copied!');
        });
    }

    showCopyNotification(message) {
        let el = document.querySelector('.msg__copy');
        if (!el) {
            el = document.createElement('div');
            el.className = 'msg__copy';
            el.setAttribute('role', 'status');
            el.setAttribute('aria-live', 'polite');
            document.body.appendChild(el);
        }
        el.textContent = message;
        el.classList.add('show');
        setTimeout(() => el.classList.remove('show'), 2000);
    }

    saveScrollPosition() {
        const currentRoute = window.location.pathname.slice(1) || 'home';
        this.scrollPositions.set(currentRoute, {
            x: window.scrollX,
            y: window.scrollY
        });
    }

    restoreScrollPosition(route) {
        const position = this.scrollPositions.get(route);
        if (position) {
            window.scrollTo({ top: position.y, left: position.x, behavior: 'instant' });
        }
    }

    navigateTo(route) {
        window.history.pushState({}, '', route);
        this.handleRouteChange();
    }

    showNotFound() {
        this.contentDiv.innerHTML = '<div class="error-message"><h2>404 — Page Not Found</h2></div>';
        if (this.isInitialLoad) {
            this.app.classList.add('loaded');
            this.isInitialLoad = false;
        }
    }

    async handleRouteChange() {
        const path = window.location.pathname.slice(1) || 'home';
        let [routeName, slug] = path.includes('/') ? path.split('/') : [path, null];
        if (!this.routes[routeName]) {
            this.showNotFound();
            return;
        }
        await this.loadPage(routeName, slug);
    }

    async loadPage(routeName, slug) {
        if (this.isInitialLoad) {
            this.app.classList.remove('loaded');
        }

        this.contentDiv.classList.add('fade-out');
        await new Promise(resolve => setTimeout(resolve, 300));

        try {
            const module = await import(this.routes[routeName]);
            this.contentDiv.innerHTML = slug ? await module.default(slug) : await module.default();

            if (this.scrollPositions.has(routeName) && !this.isInitialLoad) {
                setTimeout(() => this.restoreScrollPosition(routeName), 50);
            } else {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }

            // Handle hash anchors (e.g. /home#network)
            const hash = window.location.hash;
            if (hash) {
                setTimeout(() => {
                    const target = document.querySelector(hash);
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }

            this.contentDiv.classList.add('slide-down');
            this.contentDiv.addEventListener('animationend', () => {
                this.contentDiv.classList.remove('slide-down');
            }, { once: true });

            // Active nav + animations after render
            this.setActiveNavLink();
            this.closeMobileNav();
            setTimeout(() => this.initScrollAnimations(), 50);

            if (this.isInitialLoad) {
                setTimeout(() => {
                    this.app.classList.add('loaded');
                    this.isInitialLoad = false;
                }, 50);
            }
        } catch (error) {
            this.showNotFound();
            console.error('Error loading page:', error);
        }

        this.contentDiv.classList.remove('fade-out');
    }
}

new Router();
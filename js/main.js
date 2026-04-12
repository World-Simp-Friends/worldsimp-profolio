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

            // Handle "View More" button
            const viewMoreBtn = e.target.closest('#view-more-btn');
            if (viewMoreBtn) {
                const grid = document.querySelector('.projects__grid');
                if (grid) {
                    grid.classList.add('is-expanded');
                    viewMoreBtn.parentElement.style.display = 'none';
                }
                return;
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
        
        this.initEventModal();
        this.handleRouteChange();
    }

    initEventModal() {
        document.addEventListener('click', (e) => {
            const projectCard = e.target.closest('.project__card[data-event]');
            if (projectCard) {
                try {
                    const eventData = JSON.parse(decodeURIComponent(projectCard.getAttribute('data-event')));
                    this.openEventModal(eventData);
                } catch (err) {
                    console.error("Failed to parse event data", err);
                }
                return;
            }

            // Close modal via backdrop or close button
            if (e.target.closest('#event-modal-close') || e.target.id === 'event-modal-backdrop') {
                this.closeEventModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeEventModal();
        });
    }

    openEventModal(data) {
        const modal = document.getElementById('event-modal');
        if (!modal) return;
        
        const cover = document.querySelector('.event-modal__cover');
        const title = document.getElementById('modal-title');
        const badges = document.getElementById('modal-badges');
        const infoGrid = document.getElementById('modal-info-grid');
        const desc = document.getElementById('modal-desc');
        const actions = document.getElementById('modal-actions');
        
        cover.innerHTML = `<img src="${data.img}" alt="${data.name}" loading="lazy" width="1280" height="720" decoding="async"><div class="overlay"></div>`;
        title.textContent = data.name;
        
        badges.innerHTML = `
            ${data.type ? `<span class="project__type">${data.type}</span>` : ''}
            ${data.category ? `<span class="project__category">${data.category}</span>` : ''}
        `;
        
        let infoHtml = '';
        if (data.date) infoHtml += this.createModalInfoRow('Date', data.date, '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>');
        if (data.location) infoHtml += this.createModalInfoRow('Location', data.location, '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>');
        if (data.duration) infoHtml += this.createModalInfoRow('Duration', data.duration, '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>');
        if (data.attendees) infoHtml += this.createModalInfoRow('Attendees', data.attendees, '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>');
        
        infoGrid.innerHTML = infoHtml;
        
        desc.textContent = data.desc || '';
        desc.style.display = data.desc ? 'block' : 'none';
        
        actions.innerHTML = '';
        
        // Support for multiple links or a single link
        const linkList = data.links || (data.link ? [{ url: data.link }] : []);
        
        linkList.forEach(item => {
            const url = item.url;
            const isYoutube = url.includes('youtu');
            const isFB = url.includes('facebook');
            const isDrive = url.includes('drive.google');
            
            let btnLabel = item.label;
            if (!btnLabel) {
                btnLabel = isYoutube ? 'Watch on Youtube' : (isFB ? 'View on Facebook' : (isDrive ? 'View Photos' : 'View Info'));
            }
            
            let iconSvg = '';
            if (isYoutube) {
                iconSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';
            } else if (isFB) {
                iconSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
            } else if (isDrive) {
                iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19H2V5h20v14z"></path><path d="M2 7h20"></path><path d="M9 22v-3"></path><path d="M15 22v-3"></path></svg>';
            } else {
                iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>';
            }
                
            const btn = document.createElement('a');
            btn.href = url;
            btn.target = '_blank';
            btn.rel = 'noopener noreferrer';
            btn.className = 'event-modal__btn';
            btn.innerHTML = `${iconSvg} <span>${btnLabel}</span>`;
            actions.appendChild(btn);
        });
        
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    closeEventModal() {
        const modal = document.getElementById('event-modal');
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    createModalInfoRow(label, value, iconHtml) {
        return `
            <div class="event-info-item">
                ${iconHtml}
                <div>
                    <span class="event-info-label">${label}</span>
                    <span class="event-info-value">${value}</span>
                </div>
            </div>
        `;
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
            const globalLoader = document.getElementById('global-loader');
            if(globalLoader) {
                globalLoader.classList.add('hidden');
                setTimeout(() => globalLoader.remove(), 800);
            }
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
                    const globalLoader = document.getElementById('global-loader');
                    if(globalLoader) {
                        globalLoader.classList.add('hidden');
                        setTimeout(() => globalLoader.remove(), 800); // Remove from DOM after fade out transition
                    }
                    this.isInitialLoad = false;
                }, 400); // 400ms buffer to ensure assets are rendered and pulse plays
            }
        } catch (error) {
            this.showNotFound();
            console.error('Error loading page:', error);
        }

        this.contentDiv.classList.remove('fade-out');
    }
}

new Router();
const projects = [
    {
        name: 'WELCOME OLLIE AND SHIORI',
        type: 'COMMUNITY',
        category: 'HOLOLIVE',
        date: '5/4/2026',
        img: 'assets/imgs/ollie-and-shiori.webp',
        link: 'https://x.com/oriconproject/status/2040309021341815050'
    },
    {
        name: "DRIVIN' INTO DREAMS",
        type: 'OFFLINE',
        category: 'HOLOLIVE',
        date: '8/3/2026',
        img: 'assets/imgs/drivin-into-dream.webp',
        link: 'https://www.facebook.com/media/set/?set=a.122270646638240990&type=3&locale=vi_VN'
    },
    {
        name: 'BanG Dream! & Chill',
        type: 'OFFLINE',
        category: 'BANDORI',
        date: 'HN-T2/2026',
        img: 'assets/imgs/bangdream.webp',
        link: 'https://www.facebook.com/share/p/1CgjSDxNHC/'
    },
    {
        name: 'FANTASIA - COSPLAY FESTIVAL',
        type: 'OFFLINE',
        category: 'HOLOLIVE',
        date: '26/10/2025',
        img: 'assets/imgs/fantasia.webp',
        link: 'https://drive.google.com/drive/folders/14N3IJjL7Hx2ld_O2p4v-Uepr8ZDKMFVc?usp=drive_link'
    },
    {
        name: 'TOGETHER, WE SIMP',
        type: 'OFFLINE',
        category: 'HOLOLIVE',
        date: '05/10/2025',
        img: 'assets/imgs/together-wesimp.JPG',
        link: 'https://drive.google.com/drive/folders/1aZpmqqve2Lh8cbRFm1iKFSSEUegZ01tX'
    },
    {
        name: 'STELLAR DRIFT 2025',
        type: 'OFFLINE',
        category: 'HOLOLIVE',
        date: '18-20/07/2025',
        img: 'assets/imgs/stellar-driff-2025.webp',
        link: 'https://www.facebook.com/share/p/1AnfM8vW6y/'
    },
    {
        name: 'HOLOLIVE REUNION 2024',
        type: 'OFFLINE',
        category: 'HOLOLIVE',
        date: '29/12/2024',
        img: 'assets/imgs/offline-reunion-2024.webp',
        link: 'https://www.facebook.com/media/set/?set=a.122191460072240990&type=3&locale=vi_VN'
    },
    {
        name: 'HOBBY HORIZON 2024',
        type: 'OFFLINE',
        category: 'HOLOLIVE',
        date: '2/11/2024',
        img: 'assets/imgs/hobby-horizion-2024.webp',
        link: 'https://www.facebook.com/media/set/?set=a.122155490024240990&type=3&locale=vi_VN'
    },
    {
        name: 'BIGGEST HCM OFFLINE 2024',
        type: 'OFFLINE',
        category: 'HOLOLIVE',
        date: '15/9/2024',
        img: 'assets/imgs/biggest-hcm-offline-2024.webp',
        link: 'https://www.facebook.com/media/set/?set=a.122171821736240990&type=3&locale=vi_VN'
    },
    {
        name: 'DA NANG OFFLINE 2024',
        type: 'OFFLINE',
        category: 'HOLOLIVE',
        date: '14/7/2024',
        img: 'assets/imgs/danang-2024.webp',
        link: 'https://www.facebook.com/share/p/18PW4L9D6R/'
    },
    {
        name: 'FIRST HANOI OFFLINE',
        type: 'OFFLINE',
        category: 'HOLOLIVE',
        date: '24/12/2023',
        img: 'assets/imgs/first-hanoi-offline.webp',
        link: 'https://youtu.be/2cjv8_CHgnA?si=eg-kDQVXQclqBwKL'
    },
];

export default async function home() {

    return `
        <section class="about" id="about">
            <h1 class="title">WORLD SIMP &amp; FRIENDS</h1>
            <p class="desc">ABOUT</p>
            <div class="about__wrapper">
                <div class="about__item">
                    <p class="about__item__title">
                        We don't Just Organize Events
                    </p>
                    <div class="about__item__highlight-block">
                        <span>We Create Memories</span>
                    </div>
                    <div class="about__item__blocks">
                        <span class="about__block">Events</span>
                        <span class="about__block">Community</span>
                        <span class="about__block">Connection</span>
                    </div>
                </div>
                <div class="about__icon">
                    <div class="wrap__icon">
                        <img src="assets/imgs/hero.webp" alt="WS&F team illustration">
                    </div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                </div>
            </div>
        </section>

        <section class="about-detail" id="about-detail">
            <h2 class="title">ABOUT US</h2>
            <p class="desc">Who We Are</p>
            <div class="about-detail__content">
                <p class="about-detail__text">
                    World Simp and&nbsp;Friends is a community event organizing team, focused on fandom culture, entertainment, and creative experiences.
                </p>
                <p class="about-detail__text">
                    We build spaces where people can connect, share their passions, and enjoy unforgettable moments together.
                </p>
                <div class="about-detail__highlight-block">
                    <span>We don't just organize events — we create memories</span>
                </div>
            </div>
        </section>

        <section class="projects" id="projects">
            <h2 class="title">PROJECTS</h2>
            <p class="desc">Our events and collaborations</p>
            <div class="projects__grid">
                ${projects.map(project => `
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project__card fade-in-up">
                        <div class="project__card__image-wrapper">
                            <img src="${project.img}" alt="${project.name}" class="project__img" loading="lazy">
                            <div class="project__card__overlay">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="project__card__icon"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </div>
                        </div>
                        <div class="project__card__content">
                            <div class="project__card__badges">
                                <span class="project__type">${project.type}</span>
                                <span class="project__category">${project.category}</span>
                            </div>
                            <div class="project__card__info">
                                <h3 class="project__name">${project.name}</h3>
                                ${project.date ? `<span class="project__date"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="margin-right:6px;vertical-align:-3px"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/></svg>${project.date}</span>` : ''}
                            </div>
                        </div>
                    </a>
                `).join('')}
            </div>
        </section>

        <section class="network" id="network">
            <h2 class="title">NETWORK</h2>
            <p class="desc">Our community</p>
            <div class="network__grid">
                <div class="network__card fade-in-up">
                    <div class="network__card__img">
                        <img src="assets/imgs/oricon.webp" alt="Oricon Project" loading="lazy">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">ORICON PROJECT</h3>
                        <div class="network__card__socials">
                            <a href="https://www.facebook.com/oriconproject" target="_blank" rel="noopener noreferrer" class="network__social" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            <a href="https://x.com/oriconproject" target="_blank" rel="noopener noreferrer" class="network__social" aria-label="X">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="network__card fade-in-up">
                    <div class="network__card__img">
                        <img src="assets/imgs/worldlotho.webp" alt="World Lotho" loading="lazy">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">WORLD LOTHO</h3>
                        <div class="network__card__socials">
                            <a href="https://www.facebook.com/worldlotho" target="_blank" rel="noopener noreferrer" class="network__social" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            <a href="https://www.youtube.com/@WorldLotHo" target="_blank" rel="noopener noreferrer" class="network__social" aria-label="YouTube">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </a>
                            <a href="https://www.tiktok.com/@worldlotho" target="_blank" rel="noopener noreferrer" class="network__social" aria-label="TikTok">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.61-.93-.01 2.63.01 5.26-.02 7.88-.07 1.97-.73 3.91-1.87 5.49-1.79 2.49-4.83 4.01-7.88 3.58-2.41-.3-4.64-1.67-6-3.7-2.24-3.27-1.85-8.03.95-10.81 1.72-1.75 4.19-2.73 6.65-2.58.02 1.36-.03 2.72-.03 4.08-1.35-.12-2.78.28-3.75 1.27-1.13.99-1.56 2.66-1.18 4.09.35 1.39 1.51 2.55 2.93 2.83 1.32.26 2.81-.06 3.73-1.08.69-.78 1.03-1.83 1.06-2.88.04-4.53.01-9.06.03-13.59z"/></svg>
                            </a>
                            <a href="https://x.com/wlh_holofanvn" target="_blank" rel="noopener noreferrer" class="network__social" aria-label="X">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="network__card fade-in-up">
                    <div class="network__card__img">
                        <img src="assets/imgs/wlhvanhungnguoiban.webp" alt="World Lotho And Friends" loading="lazy">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">WORLD LOTHO &amp; FRIENDS</h3>
                        <div class="network__card__socials">
                            <a href="https://www.facebook.com/worldlotho2305" target="_blank" rel="noopener noreferrer" class="network__social" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="network__card fade-in-up">
                    <div class="network__card__img">
                        <img src="assets/imgs/worldsimp.webp" alt="World Simp and Friends" loading="lazy">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">WORLD SIMP AND&nbsp;FRIENDS</h3>
                        <div class="network__card__socials">
                            <a href="https://www.facebook.com/worldsimp235" target="_blank" rel="noopener noreferrer" class="network__social" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="network__card fade-in-up">
                    <div class="network__card__img">
                        <img src="assets/imgs/logo-odctsh.webp" alt="We Simp Hololive Here" loading="lazy">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">WE SIMP HOLOLIVE HERE</h3>
                        <div class="network__card__socials">
                            <a href="https://www.facebook.com/groups/odaychungtoisimpholo" target="_blank" rel="noopener noreferrer" class="network__social network__social--group" aria-label="Facebook Group">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            <a href="https://www.facebook.com/odaychungtoisimpHolo/" target="_blank" rel="noopener noreferrer" class="network__social network__social--page" aria-label="Facebook Page">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.04c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 1.5c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5-8.5-3.8-8.5-8.5 3.8-8.5 8.5-8.5zm-1 4v4h4v1.5h-4v4h-1.5v-4h-4v-1.5h4v-4h1.5z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="network__card fade-in-up">
                    <div class="network__card__img">
                        <img src="assets/imgs/thegioivtuber.webp" alt="VTuber World" loading="lazy">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">VTUBER WORLD</h3>
                        <div class="network__card__socials">
                            <a href="https://www.facebook.com/groups/thegioivtuber" target="_blank" rel="noopener noreferrer" class="network__social network__social--group" aria-label="Facebook Group">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="partner" id="partner">
            <h2 class="title">PARTNER</h2>
            <p class="desc">Our partners</p>
            <div class="partner__grid">
                <a href="https://www.facebook.com/HobbyHorizonVN" target="_blank" rel="noopener noreferrer" class="partner__card fade-in-up">
                    <div class="partner__card__img">
                        <img src="assets/imgs/hobbyhorizon.webp" alt="Hobby Horizon" loading="lazy">
                    </div>
                    <div class="partner__card__info">
                        <h3 class="partner__card__name">HOBBY HORIZON</h3>
                    </div>
                </a>

                <a href="https://www.facebook.com/PeoPoStore" target="_blank" rel="noopener noreferrer" class="partner__card fade-in-up">
                    <div class="partner__card__img">
                        <img src="assets/imgs/peopostore.webp" alt="PeoPo Store" loading="lazy">
                    </div>
                    <div class="partner__card__info">
                        <h3 class="partner__card__name">PEOPO STORE</h3>
                    </div>
                </a>

                <a href="https://www.facebook.com/stellarsteps.event" target="_blank" rel="noopener noreferrer" class="partner__card fade-in-up">
                    <div class="partner__card__img">
                        <img src="assets/imgs/stellarstep.webp" alt="Stellar Steps" loading="lazy">
                    </div>
                    <div class="partner__card__info">
                        <h3 class="partner__card__name">STELLAR STEPS</h3>
                    </div>
                </a>
            </div>
        </section>

        <section class="contact">
            <h2 class="title">CONTACT</h2>
            <p class="desc">
                If you are interested, please contact us via email or facebook below
            </p>
            <div class="contact__cards">
                <!-- Email Card -->
                <div class="contact__card fade-in-up" role="button" tabindex="0" aria-label="Copy email address" data-copy-target=".contact__mail__text">
                    <div class="contact__card__icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"/></svg>
                    </div>
                    <div class="contact__card__content">
                        <span class="contact__card__title">DROP AN EMAIL</span>
                        <span class="contact__mail__text">admin@worldsimp.com</span>
                        <span class="contact__card__hint">Click to copy address</span>
                    </div>
                </div>

                <!-- Facebook Card -->
                <a href="https://www.facebook.com/worldsimp235" target="_blank" rel="noopener noreferrer" class="contact__card fade-in-up">
                    <div class="contact__card__icon">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </div>
                    <div class="contact__card__content">
                        <span class="contact__card__title">FOLLOW ON FACEBOOK</span>
                        <span class="contact__card__desc">World Simp & Friends</span>
                        <span class="contact__card__hint">Join our community</span>
                    </div>
                </a>
            </div>
        </section>
    `;
}

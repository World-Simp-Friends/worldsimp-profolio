const projects = [
  {
    name: 'WELCOME OLLIE AND SHIORI',
    type: 'COMMUNITY',
    category: 'HOLOLIVE',
    date: '',
    img: 'assets/imgs/ollie-and-shiori.webp',
    link: 'https://x.com/oriconproject/status/2040309021341815050'
  },
  {
    name: "DRIVIN' INTO DREAMS",
    type: 'OFFLINE',
    category: 'HOLOLIVE',
    date: '8/3/2026',
    img: 'assets/imgs/drivin-into-dream.png',
    link: 'https://www.facebook.com/media/set/?set=a.122270646638240990&type=3&locale=vi_VN'
  },
  {
    name: 'BanG Dream! & Chill',
    type: 'OFFLINE',
    category: 'BANDORI',
    date: 'HN-T2/2026',
    img: 'assets/imgs/bangdream.png',
    link: 'https://www.facebook.com/share/p/1CgjSDxNHC/'
  },
  {
    name: 'FANTASIA - COSPLAY FESTIVAL',
    type: 'OFFLINE',
    category: 'HOLOLIVE',
    date: '26/10/2025',
    img: 'assets/imgs/fantasia.png',
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
    img: 'assets/imgs/stellar-driff-2025.png',
    link: 'https://www.facebook.com/share/p/1AnfM8vW6y/'
  },
  {
    name: 'HOLOLIVE REUNION 2024',
    type: 'OFFLINE',
    category: 'HOLOLIVE',
    date: '29/12/2024',
    img: 'assets/imgs/offline-reunion-2024.png',
    link: 'https://www.facebook.com/media/set/?set=a.122191460072240990&type=3&locale=vi_VN'
  },
  {
    name: 'HOBBY HORIZON 2024',
    type: 'OFFLINE',
    category: 'HOLOLIVE',
    date: '2/11/2024',
    img: 'assets/imgs/hobby-horizion-2024.png',
    link: 'https://www.facebook.com/media/set/?set=a.122155490024240990&type=3&locale=vi_VN'
  },
  {
    name: 'BIGGEST HCM OFFLINE 2024',
    type: 'OFFLINE',
    category: 'HOLOLIVE',
    date: '15/9/2024',
    img: 'assets/imgs/biggest-hcm-offline-2024.png',
    link: 'https://www.facebook.com/media/set/?set=a.122171821736240990&type=3&locale=vi_VN'
  },
  {
    name: 'DA NANG OFFLINE 2024',
    type: 'OFFLINE',
    category: 'HOLOLIVE',
    date: '14/7/2024',
    img: 'assets/imgs/danang-2024.png',
    link: 'https://www.facebook.com/share/p/18PW4L9D6R/'
  },
  {
    name: 'FIRST HANOI OFFLINE',
    type: 'OFFLINE',
    category: 'HOLOLIVE',
    date: '24/12/2023',
    img: 'assets/imgs/first-hanoi-offline.jpg',
    link: 'https://youtu.be/2cjv8_CHgnA?si=eg-kDQVXQclqBwKL'
  },
];

export default async function home() {

  return `
        <section class="about" id="about">
            <h1 class="title">WORLD SIMP & FRIENDS</h1>
            <h2 class="desc">ABOUT</h2>
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
                        <img src="assets/imgs/hero.png" alt="">
                    </div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                </div>
            </div>
        </section>

        <section class="about-detail" id="about-detail">
            <h1 class="title">ABOUT US</h1>
            <h2 class="desc">Who We Are</h2>
            <div class="about-detail__content">
                <p class="about-detail__text">
                    World Simp and Friends is a community event organizing team, focused on fandom culture, entertainment, and creative experiences.
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
            <h1 class="title">PROJECTS</h1>
            <h2 class="desc">Our events and collaborations</h2>
            <div class="projects__grid">
                ${projects.map(project => `
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project__card">
                        <div class="project__card__badges">
                            <span class="project__type">${project.type}</span>
                            <span class="project__category">${project.category}</span>
                        </div>
                        <div class="project__card__image">
                            <img src="${project.img}" alt="${project.name}" class="project__img">
                        </div>
                        <div class="project__card__info">
                            <h3 class="project__name">${project.name}</h3>
                            ${project.date ? `<span class="project__date">${project.date}</span>` : ''}
                        </div>
                    </a>
                `).join('')}
            </div>
        </section>

        <section class="network" id="network">
            <h1 class="title">NETWORK</h1>
            <h2 class="desc">Our community</h2>
            <div class="network__grid">
                <div class="network__card">
                    <div class="network__card__img">
                        <img src="assets/imgs/oricon.jpg" alt="Oricon Project">
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

                <div class="network__card">
                    <div class="network__card__img">
                        <img src="assets/imgs/worldlotho.jpg" alt="World Lốt Hố">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">WORLD LỐT HỐ</h3>
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

                <div class="network__card">
                    <div class="network__card__img">
                        <img src="assets/imgs/wlhvanhungnguoiban.png" alt="World Lốt Hố Và Những Người Bạn">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">WORLD LỐT HỐ VÀ NHỮNG NGƯỜI BẠN</h3>
                        <div class="network__card__socials">
                            <a href="https://www.facebook.com/worldlotho2305" target="_blank" rel="noopener noreferrer" class="network__social" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="network__card">
                    <div class="network__card__img">
                        <img src="assets/imgs/worldsimp.png" alt="World Simp and Friends">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">WORLD SIMP AND FRIENDS</h3>
                        <div class="network__card__socials">
                            <a href="https://www.facebook.com/worldsimp235" target="_blank" rel="noopener noreferrer" class="network__social" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="network__card">
                    <div class="network__card__img">
                        <img src="assets/imgs/logo-odctsh.png" alt="Ở Đây Chúng Tôi Simp Hololive">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">Ở ĐÂY CHÚNG TÔI SIMP HOLOLIVE</h3>
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

                <div class="network__card">
                    <div class="network__card__img">
                        <img src="assets/imgs/thegioivtuber.png" alt="Thế Giới Vtuber">
                    </div>
                    <div class="network__card__info">
                        <h3 class="network__card__name">THẾ GIỚI VTUBER</h3>
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
            <h1 class="title">PARTNER</h1>
            <h2 class="desc">Our partners</h2>
            <div class="partner__grid">
                <a href="https://www.facebook.com/HobbyHorizonVN" target="_blank" rel="noopener noreferrer" class="partner__card">
                    <div class="partner__card__img">
                        <img src="assets/imgs/hobbyhorizon.png" alt="Hobby Horizon">
                    </div>
                    <div class="partner__card__info">
                        <h3 class="partner__card__name">HOBBY HORIZON</h3>
                    </div>
                </a>

                <a href="https://www.facebook.com/PeoPoStore" target="_blank" rel="noopener noreferrer" class="partner__card">
                    <div class="partner__card__img">
                        <img src="assets/imgs/peopostore.png" alt="PeoPo Store">
                    </div>
                    <div class="partner__card__info">
                        <h3 class="partner__card__name">PEOPO STORE</h3>
                    </div>
                </a>

                <a href="https://www.facebook.com/stellarsteps.event" target="_blank" rel="noopener noreferrer" class="partner__card">
                    <div class="partner__card__img">
                        <img src="assets/imgs/stellarstep.png" alt="Stellar Steps">
                    </div>
                    <div class="partner__card__info">
                        <h3 class="partner__card__name">STELLAR STEPS</h3>
                    </div>
                </a>
            </div>
        </section>

        <section class="contact">
            <h1 class="title">CONTACT</h1>
            <h2 class="desc">
                If you are interested, please contact us via email or facebook below
            </h2>
            <div class="contact__wrapper">
                <span class="contact__social">Email</span>
                <div class="contact__wrapper__email">
                    <a href="mailto:admin@worldsimp.com" class="contact__mail">
                        admin@worldsimp.com
                    </a>
                    <svg class="copy__email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onclick="copyText('.contact__mail');">
                        <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z" />
                    </svg>
                </div> 
            </div>
            <div class="contact__wrapper">
                <span class="contact__social">Facebook</span>
                <div class="contact__wrapper__social">
                    <a href="https://www.facebook.com/worldsimp235" target="_blank" rel="noopener noreferrer" class="contact__icon" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                </div>
            </div>
        </section>
    `;
}

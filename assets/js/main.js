/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
};

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`);

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img', { interval: 200 });
sr.reveal('.projects__container, .projects__img, .projects__description, .projects__content', { interval: 200 });

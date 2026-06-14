/* ================= NAV BAR ================= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/* toggle mobile menu */
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll active link + sticky header */
window.onscroll = () => {

    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    /* sticky navbar */
    if (header) {
        header.classList.toggle('sticky', top > 100);
    }

    /* close mobile menu on scroll */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ================= SCROLL REVEAL ================= */

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-img, .services-container, .portfolio-grid', { origin: 'bottom' });

ScrollReveal().reveal('.about-img, .skills', { origin: 'left' });

ScrollReveal().reveal('.about-content, .contact', { origin: 'right' });

/* ================= PORTFOLIO SCROLL BUTTONS ================= */

const container = document.querySelector(".portfolio-grid");

function scrollLeftBtn(){
    container.scrollBy({ left: -350, behavior: "smooth" });
}

function scrollRightBtn(){
    container.scrollBy({ left: 350, behavior: "smooth" });
}
import './style.css';
import {getHomePage, getCreditsSection} from './home.js';
import getMenuPage from './menu.js';
import getAboutPage from './about.js';
import {getContactPage, addScrollAnimation} from './contact.js';
import getReservePage from './reserve.js';

import gustoBitesBlack from './images/gusto-bites-logo(black).png';

const content = document.querySelector('#content');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const burgerMenu = document.querySelector('.hamburger-menu');

let isLogoAdded = false;
displayHomePage();
document.body.className = 'homeActive';

// change pages dynamically when buttons' click
nav.addEventListener('click', (e) => {
    navigateOnClick(e);
});

// navigate on click
function navigateOnClick(e) {
    switch (e.target.textContent) {
        case 'Home':
            console.log('HOme is clicked');
            displayHomePage();
            break;

        case 'Menu':
            console.log('menu is clicked');
            displayMenuPage();
            break;
        
        case 'About':
            console.log('about is clicked');
            displayAboutPage();
            break;
            
        case 'Contact':
            console.log('contact is clicked');
            displayContactPage();
            break;

        case 'Reservations':
            console.log('reservations is clicked');
            displayReservePage();
            break;
        
    }
}

// Home Page
function displayHomePage() {

    document.body.className = 'homeActive';

    if(!isLogoAdded) {
        const logoBlack = new Image();
        logoBlack.src = gustoBitesBlack;
        logoBlack.alt = "Gusto Bites Logo";
        logoBlack.className = 'logoBlack';
        header.insertBefore(logoBlack, header.children[0]);
        isLogoAdded = true;
    };

    // Clear content div
    content.innerHTML = '';

    content.appendChild(getHomePage());
    content.appendChild(getCreditsSection());

    const sitemap = content.querySelector('.sitemap');
    sitemap.addEventListener('click', (e) => {
        navigateOnClick(e);
    });

    const exploreButton = document.querySelector('.exploreNow');
    exploreButton.addEventListener('click', () => displayMenuPage());

    const reserveButton = document.querySelector('.reserveNow');
    reserveButton.addEventListener('click', () => displayReservePage());

    window.scroll(0, 0);
    closeBurgerMenu();
}

// Menu Page
function displayMenuPage() {

    document.body.className = 'menuActive';
    
    // clear content div
    content.innerHTML = '';

    checkHeaderLogo();

    // append Menu Page
    content.appendChild(getMenuPage());
    
    // Dynamic Cards
    const cardContainers = document.querySelectorAll('.cardContainer');
    cardContainers.forEach(item => {
        item.addEventListener('click', function() {
            cardContainers.forEach(item => {
                if(item !== this) {
                    item.classList.remove('active');
                };
            });
            this.classList.toggle('active');
        })
    });

    window.scroll(0, 0);
    closeBurgerMenu();
}

// About Page
function displayAboutPage () {
    
    document.body.className = 'aboutActive';

    checkHeaderLogo();
    
    // clear content div
    content.innerHTML = '';
    content.appendChild(getAboutPage());

    window.scroll(0, 0);
    closeBurgerMenu();
}

// Contact Page
function displayContactPage() {

    document.body.className = 'contactActive';

    checkHeaderLogo();

    // clear content div
    content.innerHTML = '';
    content.appendChild(getContactPage());
    addScrollAnimation();

    window.scroll(0, 0);
    closeBurgerMenu();

    window.scroll(0, 0);
    closeBurgerMenu();
}

// Reserve Page
function displayReservePage() {

    document.body.className = 'reserveActive';

    checkHeaderLogo();

    // clear content div
    content.innerHTML = '';
    content.appendChild(getReservePage());

    window.scroll(0, 0);
    closeBurgerMenu();
}

// Dynamic nav bar
window.addEventListener('scroll', () => {
    if(nav.offsetTop - window.scrollY + nav.getBoundingClientRect().top < 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    };
});

// Mobile navigation bar 
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    nav.classList.toggle('open');
})

// remove open nav
function closeBurgerMenu() {
    burgerMenu.classList.remove('open');
    nav.classList.remove('open');
}

// Check Header Logo
function checkHeaderLogo() {
    if(document.querySelector('.logoBlack')) {
        document.querySelector('.logoBlack').remove();
        isLogoAdded = false;
    }
};
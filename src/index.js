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
            document.body.className = 'homeActive';
            displayHomePage();
            window.scroll(0, 0);
            break;

        case 'Menu':
            console.log('menu is clicked');
            document.body.className = 'menuActive';
            displayMenuPage();
            window.scroll(0, 0);
            break;
        
        case 'About':
            console.log('about is clicked');
            document.body.className = 'aboutActive';
            displayAboutPage();
            window.scroll(0, 0);
            break;
            
        case 'Contact':
            console.log('contact is clicked');
            document.body.className = 'contactActive';
            displayContactPage();
            window.scroll(0, 0);
            break;

        case 'Reservations':
            console.log('reservations is clicked');
            document.body.className = 'reserveActive';
            displayReservePage();
            window.scroll(0, 0);
            break;
    }
}

// Home Page
function displayHomePage() {

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
}

// Menu Page
function displayMenuPage() {
    
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
}

// About Page
function displayAboutPage () {
    checkHeaderLogo();
    
    // clear content div
    content.innerHTML = '';
    content.appendChild(getAboutPage());
}

// Contact Page
function displayContactPage() {
    checkHeaderLogo();

    // clear content div
    content.innerHTML = '';
    content.appendChild(getContactPage());
    addScrollAnimation();
}

// Reserve Page
function displayReservePage() {
    checkHeaderLogo();

    // clear content div
    content.innerHTML = '';
    content.appendChild(getReservePage());
}

// Dynamic nav bar
window.addEventListener('scroll', () => {
    if(nav.offsetTop - window.scrollY + nav.getBoundingClientRect().top < 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    };
});

// Check Header Logo
function checkHeaderLogo() {
    if(document.querySelector('.logoBlack')) {
        document.querySelector('.logoBlack').remove();
        isLogoAdded = false;
    }
};
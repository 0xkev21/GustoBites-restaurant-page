import './style.css';
import {getHomePage, getCreditsSection} from './home.js';
import getMenuPage from './menu.js';
import gustoBitesBlack from './images/gusto-bites-logo(black).png';

const content = document.querySelector('#content');
const nav = document.querySelector('nav');
const header = document.querySelector('header');

let isLogoAdded = false;
displayHomePage();
document.body.className = 'homeActive';

nav.addEventListener('click', (e) => {
    switch (e.target.textContent) {
        case 'Home':
            console.log('HOme is clicked');
            document.body.className = 'homeActive';
            displayHomePage();
            break;
        case 'Menu':
            console.log('menu is clicked');
            document.body.className = 'menuActive';
            displayMenuPage();
            break;
        
    }
});

function displayHomePage() {
    if(!isLogoAdded) {
        const logoBlack = new Image();
        logoBlack.src = gustoBitesBlack;
        logoBlack.alt = "Gusto Bites Logo";
        logoBlack.className = 'logoBlack';
        header.insertBefore(logoBlack, header.children[0]);
        isLogoAdded = true;
    };
    content.innerHTML = '';
    document.querySelector('img[alt=logoBlack')
    content.appendChild(getHomePage());
    content.appendChild(getCreditsSection());
}

function displayMenuPage() {
    content.innerHTML = '';
    if(document.querySelector('.logoBlack')) {
        document.querySelector('.logoBlack').remove();
        isLogoAdded = false;
    }
    content.appendChild(getMenuPage());
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

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(nav.offsetTop);
    console.log(window.scrollY - nav.offsetTop);
    if(nav.offsetTop - window.scrollY + nav.getBoundingClientRect().top < 0) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    };
});
import './style.css';
import {getHomePage, getCreditsSection} from './home.js';
import getMenuPage from './menu.js';

const content = document.querySelector('#content');
const nav = document.querySelector('nav');

// content.appendChild(getHomePage());
// content.appendChild(getCreditsSection());

content.appendChild(getMenuPage());
nav.classList.add('active');
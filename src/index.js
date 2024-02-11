import './style.css';
import {getHomePage, getCreditsSection} from './home.js';

document.body.appendChild(getHomePage());
document.body.appendChild(getCreditsSection());
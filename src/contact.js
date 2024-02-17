import capreseCrostini from './images/caprese-crostini.webp';
import truffleParmesanFries from './images/truffle-parmesan-fries.webp';
import mangoAvocadoSalad from './images/mango-avocado-salad.webp';
import quinoaGreekSalad from './images/quinoa-greek-salad.webp';
import gourmetBurger from './images/gourmet-burger.webp';
import lemonHerbGrilledChicken from './images/lemon-herb-grilled-chicken.webp';
import pestoShrimpLinguine from './images/pesto-shrimp-linguine.webp';
import darkChocolateRaspberryTart from './images/dark-chocolate-raspberry-tart.webp';
import tiramisuDelight from './images/tiramisu-delight.webp';

import getFooter from './footer.js';

function getContactPage () {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contactPage');
    contactPage.innerHTML = `
        <h2>Contact Us</h2>
        <div class="contactContainer">
            <div class="scrollerContainer">
                <div class="scrollingMenu">
                    <img src="${truffleParmesanFries}" alt="Truffle Parmesan Fries">
                    <img src="${mangoAvocadoSalad}" alt="Mango Avocado Salad">
                    <img src="${gourmetBurger}" alt="Gourmet Burger">
                    <img src="${darkChocolateRaspberryTart}" alt="Dark Chocolate RaspberryTart">
                    <img src="${capreseCrostini}" alt="Caprese Crostini">
                    <img src="${quinoaGreekSalad}" alt="Quinoa Greek Salad">
                    <img src="${lemonHerbGrilledChicken}" alt="Lemon Herb Grilled Chicken">
                    <img src="${tiramisuDelight}" alt="Tiramisu Delight">
                    <img src="${pestoShrimpLinguine}" alt="Pesto Shrimp Linguine">
                </div>
            </div>
            
            <div class="contactContentContainer">
                <p>
                    Thank you for considering Gusto Bites for your dining experience. We're here to assist you in any way possible. Feel free to get in touch with us using the contact information below:
                </p>
            
                <h6>Address:</h6>
                <p>
                    Gusto Bites Restaurant 123 Main Street Cityville, Stateburg, 98765
                </p>
            
                <h6>Phone:</h6>
                <p>
                    <a href="tel:+15551234567">(555) 123-4567</a>
                </p>

                <h6>Email:</h6>
                <p>
                    <a href="mailto:info@gustobites.com">info@gustobites.com</a>
                </p>
            
                <h6>Openning Hours:</h6>
                <p>
                    Monday - Friday: 10:00 AM - 10:00 PM<br>
                    Saturday - Sunday: 1:00 PM - 10:00 PM
                </p>
            
                <h6>Connect on Social Media:</h6>
                <p>
                    Follow us on <a href="https://facebook.com">Facebook</a> / <a href="https://instagram.com">Instagram</a> / <a href="https://twitter.com">Twitter</a> / <a href="https://linkedin.com">LinkedIn</a> / <a href="https://youtube.com">Youtube</a> for the latest updates, special promotions, and behind-the-scenes glimpses.
                </p>
            
                <h6>Feedback:</h6>
                <p>
                    Your opinion matters! <a href="mailto:info@gustobites.com">Let us know</a> about your experience at Gusto Bites. We value your feedback as it helps us continually improve and enhance our offerings.
                </p>
            
                <h6>Reservations</h6>
                <p>
                    To secure a table for your next visit, you can make a reservation <a class="reserveButton">online through our website</a> or by <a href="tel:+15551234567">calling us directly</a>.
                </p>
            </div>
        </div>
        
        <p class="contactLookForward">
            We look forward to welcoming you to Gusto Bites for a delightful dining experience.
            Best Regards, <span class="restaurantName">The Gusto Bites Team</span>
        </p>
    `;

    contactPage.appendChild(getFooter());
    
    return contactPage;
};

function addScrollAnimation() {
    const scroller = document.querySelector('.scrollerContainer');

    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scrollingMenu');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);

            scrollerInner.appendChild(duplicatedItem);
        });
    };
};

export {getContactPage, addScrollAnimation};
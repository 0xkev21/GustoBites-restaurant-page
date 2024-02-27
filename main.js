/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getAboutPage)
/* harmony export */ });
/* harmony import */ var _images_dish_story_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/dish-story.webp */ "./src/images/dish-story.webp");
/* harmony import */ var _images_gusto_bites_logo_big_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/gusto-bites-logo-big.png */ "./src/images/gusto-bites-logo-big.png");
/* harmony import */ var _images_story_beginning_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/story-beginning.webp */ "./src/images/story-beginning.webp");
/* harmony import */ var _images_story_culinary_journey_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/story-culinary-journey.webp */ "./src/images/story-culinary-journey.webp");
/* harmony import */ var _images_hospitality_passion_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/hospitality-passion.webp */ "./src/images/hospitality-passion.webp");
/* harmony import */ var _images_crafting_memories_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/crafting-memories.webp */ "./src/images/crafting-memories.webp");
/* harmony import */ var _images_chef_portrait_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/chef-portrait.webp */ "./src/images/chef-portrait.webp");
/* harmony import */ var _images_wave_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/wave.svg */ "./src/images/wave.svg");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");











const ourStory = document.createElement('div');
ourStory.setAttribute('id', 'ourStory');
ourStory.innerHTML = `
    <section class="storyWelcome">
    <div class="storyWelcomeAssets">
        <img src="${_images_dish_story_webp__WEBPACK_IMPORTED_MODULE_0__}" alt="dishes background for logo">
        <img src="${_images_gusto_bites_logo_big_png__WEBPACK_IMPORTED_MODULE_1__}" alt="Gusto Bites Logo" class="gustoBitesLogoBlack">
    </div>
    <div class="storyWelcomeText">
        Welcome to <span class="typeface">Gusto Bites</span>,<br>
        where every dish tells a story of <span class="bigWord">Passion</span>, <span class="bigWord">Dedication</span>,<br> and the <span class="bigWord">Love</span> for extraordinary flavors.
    </div>
    </section>
    <section class="storyBeginning">
    <div class="storyBeginningContent">
        <h4>The Beginning</h4>
        <p>
            <span class="restaurantName">Gusto Bites</span> was born out of a shared love for culinary artistry and a desire to create a dining experience that goes beyond the ordinary.
        </p>
        <p>
            It all started when our founders, <span class="founderName">Chef Alessandra Rossi</span> and <span class="founderName">Restaurateur Marco De Luca</span>, crossed paths with a common dream – to bring a touch of sophistication and joy to the dining tables of our community.
        </p>
    </div>
    <img src="${_images_story_beginning_webp__WEBPACK_IMPORTED_MODULE_2__}" alt="Story Beginning Image">
    </section>
    <section class="storyCulinaryJourney">
    <div class="storyCulinaryContent">
        <h4>A Culinary Journey</h4>
        <p>
            <span class="founderName">Chef Alessandra</span>, with her culinary expertise honed in the heart of Italy, brings a wealth of knowledge and creativity to our kitchen.
        </p>
        <p>
            Her commitment to using only the finest and freshest ingredients ensures that every dish at Gusto Bites is a masterpiece of flavor and presentation.
        </p>
    </div>
    <img src="${_images_story_culinary_journey_webp__WEBPACK_IMPORTED_MODULE_3__}" alt="Story Culinary Journey Image">
    </section>
    <section class="storyHospitalityPassion">
    <div class="storyHospitalityContent">
        <h4>Passion for Hospitality</h4>
        <p>
            <span class="founderName">Marco</span>, with a background in hospitality management, complements <span class="founderName">Chef Alessandra</span>'s culinary skills with a dedication to providing an exceptional dining experience.
        </p>
        <p>
            From the warm welcome at our entrance to the attentive service at your table, <span class="founderName">Marco</span> and the entire <span class="restaurantName">Gusto Bites team</span> are committed to making your visit memorable.
        </p>
        </div>
    <img src="${_images_hospitality_passion_webp__WEBPACK_IMPORTED_MODULE_4__}" alt="Story Hospitality Image">
    </section>
    <section class="storyCraftingMemories">
    <div class="storyCraftingMemoriesContent">
        <h4>Crafting Memories</h4>
        <p>
            At <span class="restaurantName">Gusto Bites</span>, we believe that dining is not just about nourishment; it's an artful blend of flavors, ambiance, and shared moments.
        </p>
        <p>
            Each dish on our menu is a result of meticulous craftsmanship, inspired by both traditional and contemporary culinary techniques.
        </p>
        </div>
    <img src="${_images_crafting_memories_webp__WEBPACK_IMPORTED_MODULE_5__}" alt="Crafting Memories Image">
    </section>
    <section class="storyCommunityConnection">
    <div class="storyCommunityContent">
        <h4>Community Connection</h4>
        <p>We are proud to be an integral part of this vibrant community.</p>
        <p>Gusto Bites is not just a restaurant; it's a place where friends and families come together to celebrate, to savor, and to create lasting memories.</p>
        <p>We value the relationships we build with our patrons and the community, and we look forward to being a part of your special moments.</p>
    </div>
    </section>
    <section class="thankYou">
    <p class="thankYouContent">
        Thank you for joining us on this culinary journey.<br>
        Whether you're a seasoned food enthusiast or a curious newcomer,<br>
        we invite you to experience the passion and flavor that define Gusto Bites.
    </p>
    <p class="author">
        <em>Buon Appetito!</em><br>
        Chef Alessandra Rossi & Marco De Luca<br>
        Founders, Gusto Bites<br>
    </p>
    </section>
`;

const chefProfile = document.createElement('div');
chefProfile.setAttribute('id', 'chefProfile');
chefProfile.innerHTML = `
    <h2>Chef Profile</h2>
    <div class="chefProfileContainer">
        <div class="chefPortraitWrapper">
            <div class="chefPortraitContainer">
                <img src="${_images_chef_portrait_webp__WEBPACK_IMPORTED_MODULE_6__}" alt="Chef Portrait Photo">
                <div class="yellowRectangle"></div>
                <div class="orangeRectangle"></div>
            </div>
        </div>
        <div class="chefProfileContent">
            <section class="chefBriefInfo">
                <h4>Chef Alessandra Rossi</h4>
                <p>Meet the creative force behind the delectable dishes at Gusto Bites, Chef Alessandra Rossi. Hailing from the picturesque landscapes of Italy, Chef Alessandra brings a rich tapestry of culinary experiences and a passion for crafting exquisite flavors.</p>
            </section>
            <section class="chefCulinaryRoots">
                <h4>Culinary Roots:</h4>
                <p>
                    Chef Alessandra's journey in the culinary world began in the heart of Tuscany, where she immersed herself in the time-honored traditions of Italian cooking.
                </p>
                <p>
                    Her formative years were spent under the guidance of renowned chefs, mastering the art of pasta-making, perfecting the delicate balance of flavors, and developing a deep appreciation for locally sourced, seasonal ingredients.
                </p>
            </section>
            <section class="chefCulinaryOdyssey">
                <h4>Global Culinary Odyssey:</h4>
                <p>
                    Driven by a desire to explore diverse culinary landscapes, Chef Alessandra embarked on a global odyssey, working in acclaimed kitchens from Paris to Tokyo.
                </p>
                <p>
                    These experiences not only broadened her culinary horizons but also allowed her to infuse a touch of international flair into her creations..
                </p>
            </section>
            <section class="chefFlovorPhilosophy">
                <h4>Philosophy of Flavor:</h4>
                <p>
                    At the heart of Chef Alessandra's culinary philosophy is the belief that each dish should tell a story, invoking memories and emotions through the marriage of flavors and textures.
                </p>
                <p>
                    Her dedication to culinary excellence is reflected in every meticulously crafted dish that graces the tables of Gusto Bites.
                </p>
            </section>
            <section class="chefPassion">
                <h4>Philosophy of Flavor:</h4>
                <p>
                    Returning to her roots in Italy, Chef Alessandra Rossi brings a global perspective to local ingredients, creating a menu that celebrates the best of both worlds.
                <p>
                    Her commitment to sustainability and a farm-to-table approach ensures that every bite is not only a delight to the senses but also a nod to responsible dining.            </p>
                </p>
            </section>
        </div>
    </div>
    <p class="chefInvitation">
        We invite you to savor the culinary magic curated by
        Chef Alessandra Rossi at Gusto Bites—an expression of her culinary artistry, passion, and dedication to delivering an exceptional dining experience.
    </p>
`;

function getAboutPage() {
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('aboutPage');
    const waveSVG = new Image();
    waveSVG.src = _images_wave_svg__WEBPACK_IMPORTED_MODULE_7__;
    waveSVG.setAttribute('alt', "An SVG Wave Decoration");
    waveSVG.setAttribute('aria-hidden', true);
    waveSVG.className = "svgWave";

    aboutPage.appendChild(ourStory);
    aboutPage.appendChild(waveSVG);
    aboutPage.appendChild(chefProfile);
    aboutPage.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_8__["default"])());

    return aboutPage;
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addScrollAnimation: () => (/* binding */ addScrollAnimation),
/* harmony export */   getContactPage: () => (/* binding */ getContactPage)
/* harmony export */ });
/* harmony import */ var _images_caprese_crostini_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/caprese-crostini.webp */ "./src/images/caprese-crostini.webp");
/* harmony import */ var _images_truffle_parmesan_fries_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/truffle-parmesan-fries.webp */ "./src/images/truffle-parmesan-fries.webp");
/* harmony import */ var _images_mango_avocado_salad_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/mango-avocado-salad.webp */ "./src/images/mango-avocado-salad.webp");
/* harmony import */ var _images_quinoa_greek_salad_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/quinoa-greek-salad.webp */ "./src/images/quinoa-greek-salad.webp");
/* harmony import */ var _images_gourmet_burger_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/gourmet-burger.webp */ "./src/images/gourmet-burger.webp");
/* harmony import */ var _images_lemon_herb_grilled_chicken_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/lemon-herb-grilled-chicken.webp */ "./src/images/lemon-herb-grilled-chicken.webp");
/* harmony import */ var _images_pesto_shrimp_linguine_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pesto-shrimp-linguine.webp */ "./src/images/pesto-shrimp-linguine.webp");
/* harmony import */ var _images_dark_chocolate_raspberry_tart_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/dark-chocolate-raspberry-tart.webp */ "./src/images/dark-chocolate-raspberry-tart.webp");
/* harmony import */ var _images_tiramisu_delight_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/tiramisu-delight.webp */ "./src/images/tiramisu-delight.webp");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");












function getContactPage () {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contactPage');
    contactPage.innerHTML = `
        <h2>Contact Us</h2>
        <div class="contactContainer">
            <div class="scrollerContainer">
                <div class="scrollingMenu">
                    <img src="${_images_truffle_parmesan_fries_webp__WEBPACK_IMPORTED_MODULE_1__}" alt="Truffle Parmesan Fries">
                    <img src="${_images_mango_avocado_salad_webp__WEBPACK_IMPORTED_MODULE_2__}" alt="Mango Avocado Salad">
                    <img src="${_images_gourmet_burger_webp__WEBPACK_IMPORTED_MODULE_4__}" alt="Gourmet Burger">
                    <img src="${_images_dark_chocolate_raspberry_tart_webp__WEBPACK_IMPORTED_MODULE_7__}" alt="Dark Chocolate RaspberryTart">
                    <img src="${_images_caprese_crostini_webp__WEBPACK_IMPORTED_MODULE_0__}" alt="Caprese Crostini">
                    <img src="${_images_quinoa_greek_salad_webp__WEBPACK_IMPORTED_MODULE_3__}" alt="Quinoa Greek Salad">
                    <img src="${_images_lemon_herb_grilled_chicken_webp__WEBPACK_IMPORTED_MODULE_5__}" alt="Lemon Herb Grilled Chicken">
                    <img src="${_images_tiramisu_delight_webp__WEBPACK_IMPORTED_MODULE_8__}" alt="Tiramisu Delight">
                    <img src="${_images_pesto_shrimp_linguine_webp__WEBPACK_IMPORTED_MODULE_6__}" alt="Pesto Shrimp Linguine">
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
            
                <h6>Opening Hours:</h6>
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

    contactPage.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_9__["default"])());
    
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



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFooter)
/* harmony export */ });
function getFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p class="address">
            Gusto Bites Restaurant, 123 Main Street Cityville, Stateburg, 98765
        </p>
        <p class="phone">
            Phone: <a href="tel:+1(555)123-4567" class="link">(555) 123-4567</a>
        </p>
        <p class="email">
            Email: <a href="mailto:not-real-email@gustobites.com" class="link">not-real-email@gustobites.com</a>
        </p>
    `;

    return footer;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCreditsSection: () => (/* binding */ getCreditsSection),
/* harmony export */   getHomePage: () => (/* binding */ getHomePage)
/* harmony export */ });
/* harmony import */ var _images_culinary_excellence_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/culinary-excellence.webp */ "./src/images/culinary-excellence.webp");
/* harmony import */ var _images_caprese_crostini_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/caprese-crostini.webp */ "./src/images/caprese-crostini.webp");
/* harmony import */ var _images_pesto_shrimp_linguine_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/pesto-shrimp-linguine.webp */ "./src/images/pesto-shrimp-linguine.webp");
/* harmony import */ var _images_tiramisu_delight_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/tiramisu-delight.webp */ "./src/images/tiramisu-delight.webp");
/* harmony import */ var _images_burger_home_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/burger-home.webp */ "./src/images/burger-home.webp");
/* harmony import */ var _images_gusto_bites_logo_transparent_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/gusto-bites-logo(transparent).png */ "./src/images/gusto-bites-logo(transparent).png");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");








function getHomePage () {
    const homePage = document.createElement('div');
    homePage.classList.add('homePage');
    homePage.innerHTML = `
    <section class="heroSection">
        <div class="typeface">
            Welcome To <span class="name">Gusto Bites</span>:<br>
            Where Every Bite Tells a Story
        </div>
    </section>
    <section class="culinaryExcellence">
        <img src="${_images_culinary_excellence_webp__WEBPACK_IMPORTED_MODULE_0__}" alt= "Culinary Excellence">
        <div class="culinaryExcellenceContent">
            <h2>Culinary Excellence:</h2>
            <p>
                Indulge in a symphony of flavors meticulously crafted by our chef, <span class="chefName">Alessandra Rossi</span>.<br>
                Each dish is a masterpiece, a fusion of culinary artistry and the finest, freshest ingredients.<br>
                From tantalizing appetizers to decadent desserts, every bite at Gusto Bites tells a story of passion and creativity.
            </p>
        </div>
    </section>
    <section class="everyOccasion">
        <div class="everyOccasionContent">
            <h2>A Place for Every Occasion:</h2>
            <p>
                Whether you're celebrating a special occasion or looking for a cozy spot to unwind, Gusto Bites offers the perfect ambiance.<br>
                Our thoughtfully designed space, coupled with attentive service, creates an inviting atmosphere for both intimate gatherings and festive celebrations.
            </p>
        </div>
    </section>
    <section class="menus">
        <h2>Explore Our Menu:</h2>
        <div class="menusContainer">
            <div class="cardsContainer">
                <img src="${_images_caprese_crostini_webp__WEBPACK_IMPORTED_MODULE_1__}" alt="Caprese Crostini">
                <img src="${_images_pesto_shrimp_linguine_webp__WEBPACK_IMPORTED_MODULE_2__}" alt="Pesto Shrimp Linguine">
                <img src="${_images_tiramisu_delight_webp__WEBPACK_IMPORTED_MODULE_3__}" alt="Tiramisu Delight">
                <div class="square"></div>
            </div>
            <div class="menusContent">
                <p>
                    Embark on a gastronomic adventure with our diverse menu.<br>
                    From mouthwatering appetizers to hearty main courses and delightful desserts, Gusto Bites is a haven for food enthusiasts.<br>
                    Explore our menu and savor the symphony of flavors that awaits you.
                </p>
                <button class="secondary exploreNow" type="button">Explore Now</button>
            </div>
        </div>
    </section>
    <section class="makeReservations">
        <img src="${_images_burger_home_webp__WEBPACK_IMPORTED_MODULE_4__}" alt="A nice Hamburger Picture">
        <div class="makeReservationsContent">
            <h2>Make Reservations</h2>
            <p>
                Ready to experience Gusto Bites? Secure your spot by making a reservation. Whether it's a romantic dinner for two or a gathering with friends, we look forward to creating memorable moments for you.
            </p>
            <button class="primary reserveNow" type="button">Reserve Now</button>
        </div>
    </section>
    <section class="stayConnected">
        <div class="stayConnectedContainer">
            <div class="stayConnectedContent">
                <h2>Stay Connected:</h2>
                <p>
                    Follow us on social media for the latest updates, behind-the-scenes glimpses, and special promotions.<br>
                    Join our community of food enthusiasts who appreciate the art of fine dining.
                </p>
            </div>
        </div>
        <div class="socialIcons">
                <a href="https://facebook.com">
                    <svg width="96" height="97" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.438477" width="96" height="96" rx="48" fill="#FF5733"/>
                        <path d="M59.7434 51.5633L61.1113 42.8727H52.6855V37.2238C52.6855 34.8475 53.8619 32.5255 57.6233 32.5255H61.5079V25.1249C59.2457 24.7642 56.9599 24.569 54.6689 24.541C47.7341 24.541 43.2066 28.7098 43.2066 36.2462V42.8727H35.5195V51.5633H43.2066V72.5837H52.6855V51.5633H59.7434Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://instagram.com">
                    <svg width="96" height="97" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.438477" width="96" height="96" rx="48" fill="#FF5733"/>
                        <path d="M40.0109 48.5614C40.0109 44.1393 43.5936 40.5536 48.0144 40.5536C52.4352 40.5536 56.0198 44.1393 56.0198 48.5614C56.0198 52.9834 52.4352 56.5691 48.0144 56.5691C43.5936 56.5691 40.0109 52.9834 40.0109 48.5614ZM35.6833 48.5614C35.6833 55.3738 41.2039 60.896 48.0144 60.896C54.8249 60.896 60.3455 55.3738 60.3455 48.5614C60.3455 41.7489 54.8249 36.2267 48.0144 36.2267C41.2039 36.2267 35.6833 41.7489 35.6833 48.5614ZM57.9519 35.7376C57.9517 36.3077 58.1205 36.8651 58.437 37.3393C58.7534 37.8135 59.2033 38.1831 59.7298 38.4015C60.2563 38.6199 60.8357 38.6772 61.3947 38.5662C61.9538 38.4552 62.4674 38.1808 62.8705 37.7779C63.2737 37.3749 63.5484 36.8614 63.6598 36.3023C63.7712 35.7432 63.7144 35.1635 63.4965 34.6367C63.2786 34.1099 62.9094 33.6596 62.4356 33.3427C61.9619 33.0257 61.4048 32.8565 60.8348 32.8562H60.8337C60.0697 32.8566 59.3371 33.1602 58.7968 33.7005C58.2565 34.2408 57.9526 34.9734 57.9519 35.7376ZM38.3126 68.1142C35.9713 68.0075 34.6987 67.6174 33.853 67.2878C32.7318 66.8512 31.9319 66.3312 31.0908 65.491C30.2497 64.6509 29.7291 63.8514 29.2945 62.7299C28.9648 61.8844 28.5748 60.611 28.4684 58.2691C28.352 55.737 28.3287 54.9764 28.3287 48.5616C28.3287 42.1467 28.3539 41.3882 28.4684 38.8541C28.575 36.5121 28.9679 35.2413 29.2945 34.3932C29.731 33.2717 30.2509 32.4715 31.0908 31.6302C31.9307 30.7889 32.7299 30.2681 33.853 29.8334C34.6983 29.5036 35.9713 29.1135 38.3126 29.007C40.8439 28.8906 41.6043 28.8673 48.0144 28.8673C54.4245 28.8673 55.1857 28.8925 57.7191 29.007C60.0604 29.1137 61.3309 29.5067 62.1787 29.8334C63.2999 30.2681 64.0998 30.79 64.9409 31.6302C65.782 32.4703 66.3007 33.2717 66.7372 34.3932C67.0669 35.2388 67.4568 36.5121 67.5633 38.8541C67.6797 41.3882 67.7029 42.1467 67.7029 48.5616C67.7029 54.9764 67.6797 55.7349 67.5633 58.2691C67.4567 60.611 67.0647 61.884 66.7372 62.7299C66.3007 63.8514 65.7808 64.6516 64.9409 65.491C64.101 66.3304 63.2999 66.8512 62.1787 67.2878C61.3334 67.6176 60.0604 68.0077 57.7191 68.1142C55.1878 68.2306 54.4274 68.2539 48.0144 68.2539C41.6014 68.2539 40.8431 68.2306 38.3126 68.1142ZM38.1137 24.6855C35.5573 24.802 33.8104 25.2074 32.2848 25.8013C30.7048 26.4145 29.3673 27.2372 28.0308 28.572C26.6942 29.9068 25.8739 31.2468 25.2609 32.8272C24.6672 34.3542 24.2619 36.1006 24.1454 38.6579C24.0271 41.2191 24 42.0379 24 48.5614C24 55.0848 24.0271 55.9036 24.1454 58.4649C24.2619 61.0223 24.6672 62.7686 25.2609 64.2955C25.8739 65.875 26.6944 67.2165 28.0308 68.5508C29.3671 69.885 30.7048 70.7065 32.2848 71.3215C33.8132 71.9153 35.5573 72.3208 38.1137 72.4372C40.6756 72.5537 41.4929 72.5827 48.0144 72.5827C54.5359 72.5827 55.3545 72.5556 57.9151 72.4372C60.4717 72.3208 62.2175 71.9153 63.744 71.3215C65.323 70.7065 66.6615 69.8856 67.998 68.5508C69.3346 67.216 70.1532 65.875 70.768 64.2955C71.3616 62.7686 71.7689 61.0221 71.8834 58.4649C71.9998 55.9017 72.0269 55.0848 72.0269 48.5614C72.0269 42.0379 71.9998 41.2191 71.8834 38.6579C71.7669 36.1005 71.3616 34.3532 70.768 32.8272C70.1532 31.2478 69.3325 29.9089 67.998 28.572C66.6636 27.235 65.323 26.4145 63.7459 25.8013C62.2175 25.2074 60.4715 24.8 57.917 24.6855C55.3565 24.5691 54.5379 24.54 48.0163 24.54C41.4948 24.54 40.6756 24.5671 38.1137 24.6855Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://linkedin.com">
                    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="96" height="96" rx="48" fill="#FF5733"/>
                        <path d="M36.9554 67.4528V41.5204H28.3435V67.4528H36.9563H36.9554ZM32.6513 37.9804C35.6538 37.9804 37.523 35.9891 37.523 33.5005C37.4668 30.9553 35.6538 29.0195 32.7084 29.0195C29.761 29.0195 27.8359 30.9553 27.8359 33.5003C27.8359 35.9889 29.7045 37.9802 32.5949 37.9802H32.6506L32.6513 37.9804ZM41.7222 67.4528H50.3334V52.9725C50.3334 52.1985 50.3896 51.4225 50.6171 50.8696C51.2394 49.3204 52.6563 47.7168 55.0359 47.7168C58.1512 47.7168 59.3982 50.0947 59.3982 53.5812V67.4528H68.0092V52.5839C68.0092 44.619 63.7613 40.9124 58.0955 40.9124C53.4503 40.9124 51.4102 43.511 50.2767 45.2809H50.3341V41.5213H41.7226C41.8351 43.9541 41.722 67.4537 41.722 67.4537L41.7222 67.4528Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://twitter.com">
                    <svg width="96" height="97" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.438477" width="96" height="96" rx="48" fill="#FF5733"/>
                        <path d="M71.8273 33.2395C70.2421 33.9223 68.5757 34.3978 66.8692 34.6541C67.667 34.5172 68.841 33.0798 69.3083 32.498C70.0183 31.6204 70.5593 30.6186 70.904 29.5434C70.904 29.4635 70.9838 29.3494 70.904 29.2924C70.8638 29.2704 70.8187 29.2589 70.7729 29.2589C70.7271 29.2589 70.6821 29.2704 70.6419 29.2924C68.7888 30.2968 66.8166 31.0633 64.772 31.574C64.7007 31.5958 64.6248 31.5977 64.5526 31.5796C64.4803 31.5615 64.4143 31.5241 64.3616 31.4713C64.2025 31.2816 64.0312 31.1025 63.8487 30.9351C63.0148 30.1873 62.0686 29.5752 61.0448 29.1213C59.6629 28.5538 58.1702 28.308 56.6795 28.4026C55.233 28.494 53.8208 28.8823 52.5306 29.5434C51.2602 30.2403 50.1436 31.1871 49.248 32.3269C48.306 33.5001 47.6259 34.8615 47.2534 36.3197C46.9463 37.7068 46.9114 39.1403 47.1508 40.5407C47.1508 40.7802 47.1508 40.8145 46.9457 40.7802C38.819 39.5824 32.1512 36.6962 26.703 30.5016C26.4637 30.2278 26.3383 30.2278 26.1445 30.5016C23.7738 34.1066 24.925 39.8106 27.8884 42.6283C28.2873 43.0048 28.6977 43.3699 29.1308 43.7121C27.7721 43.6156 26.4465 43.247 25.2327 42.6283C25.0047 42.48 24.8794 42.5599 24.868 42.8337C24.8357 43.2133 24.8357 43.5949 24.868 43.9745C25.1058 45.7936 25.8221 47.5169 26.9435 48.9681C28.065 50.4192 29.5514 51.5463 31.2508 52.2339C31.665 52.4115 32.0967 52.5453 32.5387 52.6332C31.2809 52.881 29.9908 52.9196 28.7205 52.7473C28.4469 52.6902 28.3443 52.8385 28.4469 53.1009C30.1224 57.6641 33.7583 59.0559 36.4254 59.8316C36.7902 59.8887 37.1549 59.8887 37.5652 59.9799C37.5652 59.9799 37.5652 59.9799 37.4968 60.0484C36.7104 61.4858 33.5304 62.4555 32.0714 62.9574C29.4085 63.9148 26.5693 64.2807 23.751 64.0298C23.3065 63.9613 23.2039 63.9727 23.0899 64.0298C22.9759 64.0868 23.0899 64.2123 23.2153 64.3264C23.7852 64.7029 24.3551 65.0337 24.9478 65.3531C26.7122 66.3164 28.5776 67.0815 30.5099 67.6347C40.5173 70.3955 51.7784 68.3648 59.2896 60.8926C65.1937 55.0289 67.2681 46.9406 67.2681 38.8409C67.2681 38.5329 67.6442 38.3503 67.8608 38.1906C69.3545 37.0257 70.6714 35.6501 71.7703 34.1066C71.9606 33.8765 72.0581 33.5835 72.0438 33.2852C72.0438 33.1141 72.0438 33.1483 71.8273 33.2395Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://youtube.com">
                    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="96" height="96" rx="48" fill="#FF5733"/>
                        <path d="M74.7007 34.7954C74.074 32.4391 72.2198 30.5802 69.8607 29.9431C65.5952 28.7998 48.4811 28.7998 48.4811 28.7998C48.4811 28.7998 31.3757 28.7998 27.1015 29.9431C24.7511 30.5714 22.8969 32.4303 22.2615 34.7954C21.1211 39.0718 21.1211 47.9998 21.1211 47.9998C21.1211 47.9998 21.1211 56.9278 22.2615 61.2042C22.8882 63.5605 24.7424 65.4194 27.1015 66.0565C31.3757 67.1998 48.4811 67.1998 48.4811 67.1998C48.4811 67.1998 65.5952 67.1998 69.8607 66.0565C72.2111 65.4282 74.0653 63.5693 74.7007 61.2042C75.8411 56.9278 75.8411 47.9998 75.8411 47.9998C75.8411 47.9998 75.8411 39.0718 74.7007 34.7954Z" fill="white"/>
                        <path d="M43.0143 56.2296L57.2297 47.9998L43.0143 39.77V56.2296Z" fill="#FF5733"/>
                    </svg>
                </a>
            </div>
        <div class="newsletterContainer">
            <h3>Subscribe our Newsletter</h3>
            <input type="text" name="email" id="email" placeholder="example@gmail.com" title="Email Address" class="emailInput">
            <button type="button" class="secondary">Subscribe</button>
        </div>
        <div class="yellowCircle"></div>
        <div class="orangeCircle"></div>
    </section>
    <section class="quote">
        <blockquote>
            <q>At Gusto Bites, we don't just serve food; we craft experiences.<br>
            Welcome to a world where every bite tells a story, and every moment is savored.</q>

            <p>Bon Appétit! <em>The Gusto Bites Team</em></p>
        </blockquote>
    </section>
    `;
    homePage.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_6__["default"])());
    return homePage;
}

function getCreditsSection() {
    const creditsSection = document.createElement('section');
    creditsSection.classList.add('credits');
    creditsSection.innerHTML = `
    <img src="${_images_gusto_bites_logo_transparent_png__WEBPACK_IMPORTED_MODULE_5__}" alt="Gusto Bites Logo">
    <div class="sitemap">
        <button type="button" class="link">Home</button>
        <button type="button" class="link">Menu</button>
        <button type="button" class="link">About</button>
        <button type="button" class="link">Contact</button>
        <button type="button" class="link">Reservations</button>
        <a href="mailto:info@gustobites.com" class="link">Feedback</a>
    </div>
    <div class="creditsContainer">
        <div class="developer">
            <p>
                &copy; Built by <a href="https://github.com/0xkev21" class="link">Kev</a>,
                Source: <a href="https://github.com/0xkev21/GustoBites-restaurant-page" class="link">Github</a>
            </p>
            <div class="devSocialIcons">
                <a href="https://www.facebook.com/0xkev">
                    <svg width="57" height="57" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.438477" width="96" height="96" rx="48" fill="#866C20"/>
                        <path d="M59.7434 51.5633L61.1113 42.8727H52.6855V37.2238C52.6855 34.8475 53.8619 32.5255 57.6233 32.5255H61.5079V25.1249C59.2457 24.7642 56.9599 24.569 54.6689 24.541C47.7341 24.541 43.2066 28.7098 43.2066 36.2462V42.8727H35.5195V51.5633H43.2066V72.5837H52.6855V51.5633H59.7434Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/0xkev_">
                    <svg width="57" height="57" viewBox="0 0 96 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.438477" width="96" height="96" rx="48" fill="#866C20"/>
                        <path d="M40.0109 48.5614C40.0109 44.1393 43.5936 40.5536 48.0144 40.5536C52.4352 40.5536 56.0198 44.1393 56.0198 48.5614C56.0198 52.9834 52.4352 56.5691 48.0144 56.5691C43.5936 56.5691 40.0109 52.9834 40.0109 48.5614ZM35.6833 48.5614C35.6833 55.3738 41.2039 60.896 48.0144 60.896C54.8249 60.896 60.3455 55.3738 60.3455 48.5614C60.3455 41.7489 54.8249 36.2267 48.0144 36.2267C41.2039 36.2267 35.6833 41.7489 35.6833 48.5614ZM57.9519 35.7376C57.9517 36.3077 58.1205 36.8651 58.437 37.3393C58.7534 37.8135 59.2033 38.1831 59.7298 38.4015C60.2563 38.6199 60.8357 38.6772 61.3947 38.5662C61.9538 38.4552 62.4674 38.1808 62.8705 37.7779C63.2737 37.3749 63.5484 36.8614 63.6598 36.3023C63.7712 35.7432 63.7144 35.1635 63.4965 34.6367C63.2786 34.1099 62.9094 33.6596 62.4356 33.3427C61.9619 33.0257 61.4048 32.8565 60.8348 32.8562H60.8337C60.0697 32.8566 59.3371 33.1602 58.7968 33.7005C58.2565 34.2408 57.9526 34.9734 57.9519 35.7376ZM38.3126 68.1142C35.9713 68.0075 34.6987 67.6174 33.853 67.2878C32.7318 66.8512 31.9319 66.3312 31.0908 65.491C30.2497 64.6509 29.7291 63.8514 29.2945 62.7299C28.9648 61.8844 28.5748 60.611 28.4684 58.2691C28.352 55.737 28.3287 54.9764 28.3287 48.5616C28.3287 42.1467 28.3539 41.3882 28.4684 38.8541C28.575 36.5121 28.9679 35.2413 29.2945 34.3932C29.731 33.2717 30.2509 32.4715 31.0908 31.6302C31.9307 30.7889 32.7299 30.2681 33.853 29.8334C34.6983 29.5036 35.9713 29.1135 38.3126 29.007C40.8439 28.8906 41.6043 28.8673 48.0144 28.8673C54.4245 28.8673 55.1857 28.8925 57.7191 29.007C60.0604 29.1137 61.3309 29.5067 62.1787 29.8334C63.2999 30.2681 64.0998 30.79 64.9409 31.6302C65.782 32.4703 66.3007 33.2717 66.7372 34.3932C67.0669 35.2388 67.4568 36.5121 67.5633 38.8541C67.6797 41.3882 67.7029 42.1467 67.7029 48.5616C67.7029 54.9764 67.6797 55.7349 67.5633 58.2691C67.4567 60.611 67.0647 61.884 66.7372 62.7299C66.3007 63.8514 65.7808 64.6516 64.9409 65.491C64.101 66.3304 63.2999 66.8512 62.1787 67.2878C61.3334 67.6176 60.0604 68.0077 57.7191 68.1142C55.1878 68.2306 54.4274 68.2539 48.0144 68.2539C41.6014 68.2539 40.8431 68.2306 38.3126 68.1142ZM38.1137 24.6855C35.5573 24.802 33.8104 25.2074 32.2848 25.8013C30.7048 26.4145 29.3673 27.2372 28.0308 28.572C26.6942 29.9068 25.8739 31.2468 25.2609 32.8272C24.6672 34.3542 24.2619 36.1006 24.1454 38.6579C24.0271 41.2191 24 42.0379 24 48.5614C24 55.0848 24.0271 55.9036 24.1454 58.4649C24.2619 61.0223 24.6672 62.7686 25.2609 64.2955C25.8739 65.875 26.6944 67.2165 28.0308 68.5508C29.3671 69.885 30.7048 70.7065 32.2848 71.3215C33.8132 71.9153 35.5573 72.3208 38.1137 72.4372C40.6756 72.5537 41.4929 72.5827 48.0144 72.5827C54.5359 72.5827 55.3545 72.5556 57.9151 72.4372C60.4717 72.3208 62.2175 71.9153 63.744 71.3215C65.323 70.7065 66.6615 69.8856 67.998 68.5508C69.3346 67.216 70.1532 65.875 70.768 64.2955C71.3616 62.7686 71.7689 61.0221 71.8834 58.4649C71.9998 55.9017 72.0269 55.0848 72.0269 48.5614C72.0269 42.0379 71.9998 41.2191 71.8834 38.6579C71.7669 36.1005 71.3616 34.3532 70.768 32.8272C70.1532 31.2478 69.3325 29.9089 67.998 28.572C66.6636 27.235 65.323 26.4145 63.7459 25.8013C62.2175 25.2074 60.4715 24.8 57.917 24.6855C55.3565 24.5691 54.5379 24.54 48.0163 24.54C41.4948 24.54 40.6756 24.5671 38.1137 24.6855Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/0xkev">
                    <svg width="57" height="57" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="96" height="96" rx="48" fill="#866C20"/>
                        <path d="M36.9554 67.4528V41.5204H28.3435V67.4528H36.9563H36.9554ZM32.6513 37.9804C35.6538 37.9804 37.523 35.9891 37.523 33.5005C37.4668 30.9553 35.6538 29.0195 32.7084 29.0195C29.761 29.0195 27.8359 30.9553 27.8359 33.5003C27.8359 35.9889 29.7045 37.9802 32.5949 37.9802H32.6506L32.6513 37.9804ZM41.7222 67.4528H50.3334V52.9725C50.3334 52.1985 50.3896 51.4225 50.6171 50.8696C51.2394 49.3204 52.6563 47.7168 55.0359 47.7168C58.1512 47.7168 59.3982 50.0947 59.3982 53.5812V67.4528H68.0092V52.5839C68.0092 44.619 63.7613 40.9124 58.0955 40.9124C53.4503 40.9124 51.4102 43.511 50.2767 45.2809H50.3341V41.5213H41.7226C41.8351 43.9541 41.722 67.4537 41.722 67.4537L41.7222 67.4528Z" fill="white"/>
                    </svg>
                </a>
                <a href="https://github.com/0xkev21">
                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.925781" y="0.0429688" width="56" height="56" rx="28" fill="#866C20"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8958 12.8867C20.1997 12.8867 13.1562 19.9022 13.1562 28.5637C13.1562 35.5007 17.6617 41.36 23.9182 43.4372C24.7052 43.5744 25.0003 43.1041 25.0003 42.6926C25.0003 42.3202 24.9806 41.0857 24.9806 39.7727C21.026 40.4978 20.003 38.8125 19.6882 37.9307C19.5111 37.48 18.7438 36.0886 18.0749 35.7163C17.524 35.4224 16.737 34.6973 18.0552 34.6777C19.2947 34.6581 20.18 35.8143 20.4751 36.2846C21.8917 38.6557 24.1543 37.9895 25.0593 37.5779C25.197 36.5589 25.6102 35.8731 26.0627 35.4811C22.5606 35.0892 18.9012 33.7371 18.9012 27.7406C18.9012 26.0358 19.5111 24.6248 20.5145 23.5275C20.3571 23.1355 19.8062 21.5286 20.6719 19.3731C20.6719 19.3731 21.9901 18.9615 25.0003 20.98C26.2594 20.6272 27.5973 20.4509 28.9352 20.4509C30.273 20.4509 31.6109 20.6272 32.8701 20.98C35.8803 18.9419 37.1984 19.3731 37.1984 19.3731C38.0641 21.5286 37.5132 23.1355 37.3558 23.5275C38.3592 24.6248 38.9691 26.0162 38.9691 27.7406C38.9691 33.7567 35.29 35.0892 31.788 35.4811C32.3585 35.9711 32.8504 36.9117 32.8504 38.3814C32.8504 40.4782 32.8307 42.1635 32.8307 42.6926C32.8307 43.1041 33.1258 43.594 33.9128 43.4372C40.1299 41.36 44.6354 35.4811 44.6354 28.5637C44.6354 19.9022 37.5919 12.8867 28.8958 12.8867Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </div>
        <a class="creditsLink link" href="./credits/index.html">Credits & Thanks To:</a>
    </div>
    `;
    return creditsSection;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMenuPage)
/* harmony export */ });
/* harmony import */ var _images_caprese_crostini_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/caprese-crostini.webp */ "./src/images/caprese-crostini.webp");
/* harmony import */ var _images_truffle_parmesan_fries_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/truffle-parmesan-fries.webp */ "./src/images/truffle-parmesan-fries.webp");
/* harmony import */ var _images_mango_avocado_salad_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/mango-avocado-salad.webp */ "./src/images/mango-avocado-salad.webp");
/* harmony import */ var _images_quinoa_greek_salad_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/quinoa-greek-salad.webp */ "./src/images/quinoa-greek-salad.webp");
/* harmony import */ var _images_gourmet_burger_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/gourmet-burger.webp */ "./src/images/gourmet-burger.webp");
/* harmony import */ var _images_lemon_herb_grilled_chicken_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/lemon-herb-grilled-chicken.webp */ "./src/images/lemon-herb-grilled-chicken.webp");
/* harmony import */ var _images_pesto_shrimp_linguine_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/pesto-shrimp-linguine.webp */ "./src/images/pesto-shrimp-linguine.webp");
/* harmony import */ var _images_dark_chocolate_raspberry_tart_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/dark-chocolate-raspberry-tart.webp */ "./src/images/dark-chocolate-raspberry-tart.webp");
/* harmony import */ var _images_tiramisu_delight_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/tiramisu-delight.webp */ "./src/images/tiramisu-delight.webp");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");











const menu = {
    appetizers: [
        {
            name: "Caprese Crostini",
            description: "Sliced cherry tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze, served on crispy baguette slices.",
            price: 9.99,
            image: _images_caprese_crostini_webp__WEBPACK_IMPORTED_MODULE_0__,
        },
        {
            name: "Truffle Parmesan Fries",
            description: "Crispy shoestring fries tossed with truffle oil and grated Parmesan, served with a side of garlic aioli.",
            price: 8.99,
            image: _images_truffle_parmesan_fries_webp__WEBPACK_IMPORTED_MODULE_1__,
        }
    ],
    salads: [
        {
            name: "Mango Avocado Salad",
            description: "Mixed greens, ripe mango slices, avocado, red onion, and feta cheese, dressed with a honey lime vinaigrette.",
            price: 11.99,
            image: _images_mango_avocado_salad_webp__WEBPACK_IMPORTED_MODULE_2__,
        },
        {
            name: "Quinoa Greek Salad",
            description: "Quinoa, cherry tomatoes, cucumber, Kalamata olives, and feta cheese, tossed in a lemon herb dressing.",
            price: 10.99,
            image: _images_quinoa_greek_salad_webp__WEBPACK_IMPORTED_MODULE_3__,
        },
    ],
    mainCourses: [
        {
            name: "Gourmet Burger",
            description: "Juicy Angus beef patty topped with caramelized onions, Swiss cheese, arugula, and truffle aioli on a brioche bun. Served with truffle Parmesan fries.",
            price: 15.99,
            image: _images_gourmet_burger_webp__WEBPACK_IMPORTED_MODULE_4__,
        },
        {
            name: "Lemon Herb Grilled Chicken",
            description: "Tender chicken breast marinated in lemon and herbs, grilled to perfection, and served with garlic mashed potatoes and sautéed green beans.",
            price: 16.99,
            image: _images_lemon_herb_grilled_chicken_webp__WEBPACK_IMPORTED_MODULE_5__,
        },
        {
            name: "Pesto Shrimp Linguine",
            description: "Succulent shrimp tossed in basil pesto with cherry tomatoes, pine nuts, and Parmesan cheese over a bed of linguine.",
            price: 18.99,
            image: _images_pesto_shrimp_linguine_webp__WEBPACK_IMPORTED_MODULE_6__,
        },
    ],
    desserts: [
        {
            name: "Dark Chocolate Raspberry Tart",
            description: "Rich dark chocolate ganache on a buttery tart crust, topped with fresh raspberries and a raspberry coulis.",
            price: 8.99,
            image: _images_dark_chocolate_raspberry_tart_webp__WEBPACK_IMPORTED_MODULE_7__,
        },
        {
            name: "Tiramisu Delight",
            description: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder and served with a drizzle of chocolate sauce.",
            price: 7.99,
            image: _images_tiramisu_delight_webp__WEBPACK_IMPORTED_MODULE_8__,
        },
    ]
};

function createCard(item) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');

    const orangeRectangle = document.createElement('div');
    orangeRectangle.classList.add('orangeRectangle');
    const yellowRectangle = document.createElement('div');
    yellowRectangle.classList.add('yellowRectangle');

    const itemName = document.createElement('p');
    itemName.textContent = item.name;
    const itemDescription = document.createElement('p');
    itemDescription.textContent = item.description;
    const itemPrice = document.createElement('p');
    itemPrice.textContent = '$' + item.price;
    itemPrice.className = 'itemPrice';
    const itemImage = document.createElement('img');
    itemImage.setAttribute('alt', item.name);
    itemImage.src = item.image;

    yellowRectangle.appendChild(itemDescription);
    yellowRectangle.appendChild(itemPrice);

    orangeRectangle.appendChild(itemImage);

    cardContainer.appendChild(itemName);
    cardContainer.appendChild(yellowRectangle);
    cardContainer.appendChild(orangeRectangle);
    
    return cardContainer;
}

function getMenuPage () {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menuPage');

    const appetizers = document.createElement('div');
    appetizers.classList.add('menuContainer');

    menu.appetizers.forEach(function (item) {
        const menuItem = createCard(item);
        appetizers.appendChild(menuItem);
    });

    const salads = document.createElement('div');
    salads.classList.add('menuContainer');

    menu.salads.forEach(item => {
        const menuItem = createCard(item);
        salads.appendChild(menuItem);
    });

    const mainCourses = document.createElement('div');
    mainCourses.classList.add('menuContainer');

    menu.mainCourses.forEach(item => {
        const menuItem = createCard(item);
        mainCourses.appendChild(menuItem);
    });

    const desserts = document.createElement('div');
    desserts.classList.add('menuContainer');

    menu.desserts.forEach(item => {
        const menuItem = createCard(item);
        desserts.appendChild(menuItem);
    });

    menuPage.innerHTML = `
        <h2>Explore our Menu</h2>
        <div class="categories">
            <h3>Appetizers</h3>
            <div class="appetizer menuContainer">${appetizers.innerHTML}</div>
            <h3>Salads</h3>
            <div class="appetizer menuContainer">${salads.innerHTML}</div>
            <h3>Main Courses</h3>
            <div class="appetizer menuContainer">${mainCourses.innerHTML}</div>
            <h3>Desserts</h3>
            <div class="appetizer menuContainer">${desserts.innerHTML}</div>
        </div>
    `;

    menuPage.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_9__["default"])());

    return menuPage;
}

/***/ }),

/***/ "./src/reserve.js":
/*!************************!*\
  !*** ./src/reserve.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getReservePage)
/* harmony export */ });
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");


function getReservePage() {
    const reservePage = document.createElement('div');
    reservePage.classList.add('reservePage');
    reservePage.innerHTML = `
        <h2>Reservations</h2>
        <form action="POST">
            <div class="openingHours">
                <h6>Opening Hours</h6>
                <p>
                    Monday - Friday: 10:00 AM - 10:00 PM<br>
                    Saturday - Sunday: 1:00 PM - 10:00 PM
                </p>
            </div>
            <div class="inputsContainer">
                <div class="numberOfPeople">
                    <label for="numberOfPeople">Number of People:</label>
                    <input type="number" id="numberOfPeople" name="number-of-people" placeholder="1" min="1" max="40" value="1">
                </div>
                <div class="Date">
                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date" placeholder="" min="${new Date().toISOString().split('T')[0]}">
                </div>
                <div class="time">
                    <label for="time">Time:</label>
                    <input type="time" id="time" name="time" placeholder="Time" min="10:00:00" max="22:00:00">
                </div>
            </div>
            <button type="button" class="primary">Reserve Now</button>
        </form>
    `;

    reservePage.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

    return reservePage;
}

/***/ }),

/***/ "./src/images/burger-home.webp":
/*!*************************************!*\
  !*** ./src/images/burger-home.webp ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eab35c36d630e5b98178.webp";

/***/ }),

/***/ "./src/images/caprese-crostini.webp":
/*!******************************************!*\
  !*** ./src/images/caprese-crostini.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffd79993101a74480ad5.webp";

/***/ }),

/***/ "./src/images/chef-portrait.webp":
/*!***************************************!*\
  !*** ./src/images/chef-portrait.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc292b47f30eadc4ff0d.webp";

/***/ }),

/***/ "./src/images/crafting-memories.webp":
/*!*******************************************!*\
  !*** ./src/images/crafting-memories.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1c90638ff258b178fe2.webp";

/***/ }),

/***/ "./src/images/culinary-excellence.webp":
/*!*********************************************!*\
  !*** ./src/images/culinary-excellence.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9f515847a37a85b2bbc.webp";

/***/ }),

/***/ "./src/images/dark-chocolate-raspberry-tart.webp":
/*!*******************************************************!*\
  !*** ./src/images/dark-chocolate-raspberry-tart.webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da4ceab572173697604f.webp";

/***/ }),

/***/ "./src/images/dish-story.webp":
/*!************************************!*\
  !*** ./src/images/dish-story.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f04030faf7729ebf158.webp";

/***/ }),

/***/ "./src/images/gourmet-burger.webp":
/*!****************************************!*\
  !*** ./src/images/gourmet-burger.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95c9f6f94ba5162b7069.webp";

/***/ }),

/***/ "./src/images/gusto-bites-logo(black).png":
/*!************************************************!*\
  !*** ./src/images/gusto-bites-logo(black).png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b4b8e118033ec950d89.png";

/***/ }),

/***/ "./src/images/gusto-bites-logo(transparent).png":
/*!******************************************************!*\
  !*** ./src/images/gusto-bites-logo(transparent).png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9eb0878ca0f513b1878.png";

/***/ }),

/***/ "./src/images/gusto-bites-logo-big.png":
/*!*********************************************!*\
  !*** ./src/images/gusto-bites-logo-big.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "319574031478e7a2f7f4.png";

/***/ }),

/***/ "./src/images/hospitality-passion.webp":
/*!*********************************************!*\
  !*** ./src/images/hospitality-passion.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adb6295eee8c886529f4.webp";

/***/ }),

/***/ "./src/images/lemon-herb-grilled-chicken.webp":
/*!****************************************************!*\
  !*** ./src/images/lemon-herb-grilled-chicken.webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e80305d2905846191296.webp";

/***/ }),

/***/ "./src/images/mango-avocado-salad.webp":
/*!*********************************************!*\
  !*** ./src/images/mango-avocado-salad.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f270eb86591c85845d22.webp";

/***/ }),

/***/ "./src/images/pesto-shrimp-linguine.webp":
/*!***********************************************!*\
  !*** ./src/images/pesto-shrimp-linguine.webp ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9850deb05149dbdb1e1.webp";

/***/ }),

/***/ "./src/images/quinoa-greek-salad.webp":
/*!********************************************!*\
  !*** ./src/images/quinoa-greek-salad.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8af85e3984fcd307a97a.webp";

/***/ }),

/***/ "./src/images/story-beginning.webp":
/*!*****************************************!*\
  !*** ./src/images/story-beginning.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eefe0032b700771c0b53.webp";

/***/ }),

/***/ "./src/images/story-culinary-journey.webp":
/*!************************************************!*\
  !*** ./src/images/story-culinary-journey.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "297bdf16bf63347f3d10.webp";

/***/ }),

/***/ "./src/images/tiramisu-delight.webp":
/*!******************************************!*\
  !*** ./src/images/tiramisu-delight.webp ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c1dd8aea130025f4a4e.webp";

/***/ }),

/***/ "./src/images/truffle-parmesan-fries.webp":
/*!************************************************!*\
  !*** ./src/images/truffle-parmesan-fries.webp ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bfb7d70eeb77e24d78fb.webp";

/***/ }),

/***/ "./src/images/wave.svg":
/*!*****************************!*\
  !*** ./src/images/wave.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "caebc055f2bc1f2012fc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _reserve_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reserve.js */ "./src/reserve.js");
/* harmony import */ var _images_gusto_bites_logo_black_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/gusto-bites-logo(black).png */ "./src/images/gusto-bites-logo(black).png");









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
        logoBlack.src = _images_gusto_bites_logo_black_png__WEBPACK_IMPORTED_MODULE_6__;
        logoBlack.alt = "Gusto Bites Logo";
        logoBlack.className = 'logoBlack';
        header.insertBefore(logoBlack, header.children[0]);
        isLogoAdded = true;
    };

    // Clear content div
    content.innerHTML = '';

    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.getHomePage)());
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.getCreditsSection)());

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
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    
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
    content.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])());

    window.scroll(0, 0);
    closeBurgerMenu();
}

// Contact Page
function displayContactPage() {

    document.body.className = 'contactActive';

    checkHeaderLogo();

    // clear content div
    content.innerHTML = '';
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.getContactPage)());
    (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.addScrollAnimation)();

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
    content.appendChild((0,_reserve_js__WEBPACK_IMPORTED_MODULE_5__["default"])());

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLHdCQUF3QixxREFBVztBQUNuQyx3QkFBd0IsMkRBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFjO0FBQ3RDLElBQUksK0RBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc2VydmUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgbG9nb0JhY2tncm91bmQgZnJvbSAnLi9pbWFnZXMvZGlzaC1zdG9yeS53ZWJwJztcclxuaW1wb3J0IGd1c3RvQml0ZXNCbGFjayBmcm9tICcuL2ltYWdlcy9ndXN0by1iaXRlcy1sb2dvLWJpZy5wbmcnO1xyXG5pbXBvcnQgc3RvcnlCZWdpbm5pbmcgZnJvbSAnLi9pbWFnZXMvc3RvcnktYmVnaW5uaW5nLndlYnAnO1xyXG5pbXBvcnQgY3VsaW5hcnlKb3VybmV5IGZyb20gJy4vaW1hZ2VzL3N0b3J5LWN1bGluYXJ5LWpvdXJuZXkud2VicCc7XHJcbmltcG9ydCBob3NwaXRhbGl0eVBhc3Npb24gZnJvbSAnLi9pbWFnZXMvaG9zcGl0YWxpdHktcGFzc2lvbi53ZWJwJztcclxuaW1wb3J0IGNyYWZ0aW5nTWVtb3JpZXMgZnJvbSAnLi9pbWFnZXMvY3JhZnRpbmctbWVtb3JpZXMud2VicCc7XHJcbmltcG9ydCBjaGVmUG9ydHJhaXQgZnJvbSAnLi9pbWFnZXMvY2hlZi1wb3J0cmFpdC53ZWJwJztcclxuaW1wb3J0IHN2Z1dhdmUgZnJvbSAnLi9pbWFnZXMvd2F2ZS5zdmcnO1xyXG5cclxuaW1wb3J0IGdldEZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcyc7XHJcblxyXG5jb25zdCBvdXJTdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5vdXJTdG9yeS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ291clN0b3J5Jyk7XHJcbm91clN0b3J5LmlubmVySFRNTCA9IGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic3RvcnlXZWxjb21lXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3RvcnlXZWxjb21lQXNzZXRzXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2xvZ29CYWNrZ3JvdW5kfVwiIGFsdD1cImRpc2hlcyBiYWNrZ3JvdW5kIGZvciBsb2dvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2d1c3RvQml0ZXNCbGFja31cIiBhbHQ9XCJHdXN0byBCaXRlcyBMb2dvXCIgY2xhc3M9XCJndXN0b0JpdGVzTG9nb0JsYWNrXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzdG9yeVdlbGNvbWVUZXh0XCI+XHJcbiAgICAgICAgV2VsY29tZSB0byA8c3BhbiBjbGFzcz1cInR5cGVmYWNlXCI+R3VzdG8gQml0ZXM8L3NwYW4+LDxicj5cclxuICAgICAgICB3aGVyZSBldmVyeSBkaXNoIHRlbGxzIGEgc3Rvcnkgb2YgPHNwYW4gY2xhc3M9XCJiaWdXb3JkXCI+UGFzc2lvbjwvc3Bhbj4sIDxzcGFuIGNsYXNzPVwiYmlnV29yZFwiPkRlZGljYXRpb248L3NwYW4+LDxicj4gYW5kIHRoZSA8c3BhbiBjbGFzcz1cImJpZ1dvcmRcIj5Mb3ZlPC9zcGFuPiBmb3IgZXh0cmFvcmRpbmFyeSBmbGF2b3JzLlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInN0b3J5QmVnaW5uaW5nXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3RvcnlCZWdpbm5pbmdDb250ZW50XCI+XHJcbiAgICAgICAgPGg0PlRoZSBCZWdpbm5pbmc8L2g0PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc3RhdXJhbnROYW1lXCI+R3VzdG8gQml0ZXM8L3NwYW4+IHdhcyBib3JuIG91dCBvZiBhIHNoYXJlZCBsb3ZlIGZvciBjdWxpbmFyeSBhcnRpc3RyeSBhbmQgYSBkZXNpcmUgdG8gY3JlYXRlIGEgZGluaW5nIGV4cGVyaWVuY2UgdGhhdCBnb2VzIGJleW9uZCB0aGUgb3JkaW5hcnkuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICBJdCBhbGwgc3RhcnRlZCB3aGVuIG91ciBmb3VuZGVycywgPHNwYW4gY2xhc3M9XCJmb3VuZGVyTmFtZVwiPkNoZWYgQWxlc3NhbmRyYSBSb3NzaTwvc3Bhbj4gYW5kIDxzcGFuIGNsYXNzPVwiZm91bmRlck5hbWVcIj5SZXN0YXVyYXRldXIgTWFyY28gRGUgTHVjYTwvc3Bhbj4sIGNyb3NzZWQgcGF0aHMgd2l0aCBhIGNvbW1vbiBkcmVhbSDigJMgdG8gYnJpbmcgYSB0b3VjaCBvZiBzb3BoaXN0aWNhdGlvbiBhbmQgam95IHRvIHRoZSBkaW5pbmcgdGFibGVzIG9mIG91ciBjb21tdW5pdHkuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aW1nIHNyYz1cIiR7c3RvcnlCZWdpbm5pbmd9XCIgYWx0PVwiU3RvcnkgQmVnaW5uaW5nIEltYWdlXCI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInN0b3J5Q3VsaW5hcnlKb3VybmV5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3RvcnlDdWxpbmFyeUNvbnRlbnRcIj5cclxuICAgICAgICA8aDQ+QSBDdWxpbmFyeSBKb3VybmV5PC9oND5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3VuZGVyTmFtZVwiPkNoZWYgQWxlc3NhbmRyYTwvc3Bhbj4sIHdpdGggaGVyIGN1bGluYXJ5IGV4cGVydGlzZSBob25lZCBpbiB0aGUgaGVhcnQgb2YgSXRhbHksIGJyaW5ncyBhIHdlYWx0aCBvZiBrbm93bGVkZ2UgYW5kIGNyZWF0aXZpdHkgdG8gb3VyIGtpdGNoZW4uXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICBIZXIgY29tbWl0bWVudCB0byB1c2luZyBvbmx5IHRoZSBmaW5lc3QgYW5kIGZyZXNoZXN0IGluZ3JlZGllbnRzIGVuc3VyZXMgdGhhdCBldmVyeSBkaXNoIGF0IEd1c3RvIEJpdGVzIGlzIGEgbWFzdGVycGllY2Ugb2YgZmxhdm9yIGFuZCBwcmVzZW50YXRpb24uXHJcbiAgICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aW1nIHNyYz1cIiR7Y3VsaW5hcnlKb3VybmV5fVwiIGFsdD1cIlN0b3J5IEN1bGluYXJ5IEpvdXJuZXkgSW1hZ2VcIj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic3RvcnlIb3NwaXRhbGl0eVBhc3Npb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzdG9yeUhvc3BpdGFsaXR5Q29udGVudFwiPlxyXG4gICAgICAgIDxoND5QYXNzaW9uIGZvciBIb3NwaXRhbGl0eTwvaDQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm91bmRlck5hbWVcIj5NYXJjbzwvc3Bhbj4sIHdpdGggYSBiYWNrZ3JvdW5kIGluIGhvc3BpdGFsaXR5IG1hbmFnZW1lbnQsIGNvbXBsZW1lbnRzIDxzcGFuIGNsYXNzPVwiZm91bmRlck5hbWVcIj5DaGVmIEFsZXNzYW5kcmE8L3NwYW4+J3MgY3VsaW5hcnkgc2tpbGxzIHdpdGggYSBkZWRpY2F0aW9uIHRvIHByb3ZpZGluZyBhbiBleGNlcHRpb25hbCBkaW5pbmcgZXhwZXJpZW5jZS5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEZyb20gdGhlIHdhcm0gd2VsY29tZSBhdCBvdXIgZW50cmFuY2UgdG8gdGhlIGF0dGVudGl2ZSBzZXJ2aWNlIGF0IHlvdXIgdGFibGUsIDxzcGFuIGNsYXNzPVwiZm91bmRlck5hbWVcIj5NYXJjbzwvc3Bhbj4gYW5kIHRoZSBlbnRpcmUgPHNwYW4gY2xhc3M9XCJyZXN0YXVyYW50TmFtZVwiPkd1c3RvIEJpdGVzIHRlYW08L3NwYW4+IGFyZSBjb21taXR0ZWQgdG8gbWFraW5nIHlvdXIgdmlzaXQgbWVtb3JhYmxlLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDxpbWcgc3JjPVwiJHtob3NwaXRhbGl0eVBhc3Npb259XCIgYWx0PVwiU3RvcnkgSG9zcGl0YWxpdHkgSW1hZ2VcIj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwic3RvcnlDcmFmdGluZ01lbW9yaWVzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic3RvcnlDcmFmdGluZ01lbW9yaWVzQ29udGVudFwiPlxyXG4gICAgICAgIDxoND5DcmFmdGluZyBNZW1vcmllczwvaDQ+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEF0IDxzcGFuIGNsYXNzPVwicmVzdGF1cmFudE5hbWVcIj5HdXN0byBCaXRlczwvc3Bhbj4sIHdlIGJlbGlldmUgdGhhdCBkaW5pbmcgaXMgbm90IGp1c3QgYWJvdXQgbm91cmlzaG1lbnQ7IGl0J3MgYW4gYXJ0ZnVsIGJsZW5kIG9mIGZsYXZvcnMsIGFtYmlhbmNlLCBhbmQgc2hhcmVkIG1vbWVudHMuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgICBFYWNoIGRpc2ggb24gb3VyIG1lbnUgaXMgYSByZXN1bHQgb2YgbWV0aWN1bG91cyBjcmFmdHNtYW5zaGlwLCBpbnNwaXJlZCBieSBib3RoIHRyYWRpdGlvbmFsIGFuZCBjb250ZW1wb3JhcnkgY3VsaW5hcnkgdGVjaG5pcXVlcy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8aW1nIHNyYz1cIiR7Y3JhZnRpbmdNZW1vcmllc31cIiBhbHQ9XCJDcmFmdGluZyBNZW1vcmllcyBJbWFnZVwiPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzdG9yeUNvbW11bml0eUNvbm5lY3Rpb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzdG9yeUNvbW11bml0eUNvbnRlbnRcIj5cclxuICAgICAgICA8aDQ+Q29tbXVuaXR5IENvbm5lY3Rpb248L2g0PlxyXG4gICAgICAgIDxwPldlIGFyZSBwcm91ZCB0byBiZSBhbiBpbnRlZ3JhbCBwYXJ0IG9mIHRoaXMgdmlicmFudCBjb21tdW5pdHkuPC9wPlxyXG4gICAgICAgIDxwPkd1c3RvIEJpdGVzIGlzIG5vdCBqdXN0IGEgcmVzdGF1cmFudDsgaXQncyBhIHBsYWNlIHdoZXJlIGZyaWVuZHMgYW5kIGZhbWlsaWVzIGNvbWUgdG9nZXRoZXIgdG8gY2VsZWJyYXRlLCB0byBzYXZvciwgYW5kIHRvIGNyZWF0ZSBsYXN0aW5nIG1lbW9yaWVzLjwvcD5cclxuICAgICAgICA8cD5XZSB2YWx1ZSB0aGUgcmVsYXRpb25zaGlwcyB3ZSBidWlsZCB3aXRoIG91ciBwYXRyb25zIGFuZCB0aGUgY29tbXVuaXR5LCBhbmQgd2UgbG9vayBmb3J3YXJkIHRvIGJlaW5nIGEgcGFydCBvZiB5b3VyIHNwZWNpYWwgbW9tZW50cy48L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwidGhhbmtZb3VcIj5cclxuICAgIDxwIGNsYXNzPVwidGhhbmtZb3VDb250ZW50XCI+XHJcbiAgICAgICAgVGhhbmsgeW91IGZvciBqb2luaW5nIHVzIG9uIHRoaXMgY3VsaW5hcnkgam91cm5leS48YnI+XHJcbiAgICAgICAgV2hldGhlciB5b3UncmUgYSBzZWFzb25lZCBmb29kIGVudGh1c2lhc3Qgb3IgYSBjdXJpb3VzIG5ld2NvbWVyLDxicj5cclxuICAgICAgICB3ZSBpbnZpdGUgeW91IHRvIGV4cGVyaWVuY2UgdGhlIHBhc3Npb24gYW5kIGZsYXZvciB0aGF0IGRlZmluZSBHdXN0byBCaXRlcy5cclxuICAgIDwvcD5cclxuICAgIDxwIGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgPGVtPkJ1b24gQXBwZXRpdG8hPC9lbT48YnI+XHJcbiAgICAgICAgQ2hlZiBBbGVzc2FuZHJhIFJvc3NpICYgTWFyY28gRGUgTHVjYTxicj5cclxuICAgICAgICBGb3VuZGVycywgR3VzdG8gQml0ZXM8YnI+XHJcbiAgICA8L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbmA7XHJcblxyXG5jb25zdCBjaGVmUHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jaGVmUHJvZmlsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWZQcm9maWxlJyk7XHJcbmNoZWZQcm9maWxlLmlubmVySFRNTCA9IGBcclxuICAgIDxoMj5DaGVmIFByb2ZpbGU8L2gyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNoZWZQcm9maWxlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNoZWZQb3J0cmFpdFdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWZQb3J0cmFpdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2NoZWZQb3J0cmFpdH1cIiBhbHQ9XCJDaGVmIFBvcnRyYWl0IFBob3RvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieWVsbG93UmVjdGFuZ2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JhbmdlUmVjdGFuZ2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVmUHJvZmlsZUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjaGVmQnJpZWZJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+Q2hlZiBBbGVzc2FuZHJhIFJvc3NpPC9oND5cclxuICAgICAgICAgICAgICAgIDxwPk1lZXQgdGhlIGNyZWF0aXZlIGZvcmNlIGJlaGluZCB0aGUgZGVsZWN0YWJsZSBkaXNoZXMgYXQgR3VzdG8gQml0ZXMsIENoZWYgQWxlc3NhbmRyYSBSb3NzaS4gSGFpbGluZyBmcm9tIHRoZSBwaWN0dXJlc3F1ZSBsYW5kc2NhcGVzIG9mIEl0YWx5LCBDaGVmIEFsZXNzYW5kcmEgYnJpbmdzIGEgcmljaCB0YXBlc3RyeSBvZiBjdWxpbmFyeSBleHBlcmllbmNlcyBhbmQgYSBwYXNzaW9uIGZvciBjcmFmdGluZyBleHF1aXNpdGUgZmxhdm9ycy48L3A+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjaGVmQ3VsaW5hcnlSb290c1wiPlxyXG4gICAgICAgICAgICAgICAgPGg0PkN1bGluYXJ5IFJvb3RzOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBDaGVmIEFsZXNzYW5kcmEncyBqb3VybmV5IGluIHRoZSBjdWxpbmFyeSB3b3JsZCBiZWdhbiBpbiB0aGUgaGVhcnQgb2YgVHVzY2FueSwgd2hlcmUgc2hlIGltbWVyc2VkIGhlcnNlbGYgaW4gdGhlIHRpbWUtaG9ub3JlZCB0cmFkaXRpb25zIG9mIEl0YWxpYW4gY29va2luZy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEhlciBmb3JtYXRpdmUgeWVhcnMgd2VyZSBzcGVudCB1bmRlciB0aGUgZ3VpZGFuY2Ugb2YgcmVub3duZWQgY2hlZnMsIG1hc3RlcmluZyB0aGUgYXJ0IG9mIHBhc3RhLW1ha2luZywgcGVyZmVjdGluZyB0aGUgZGVsaWNhdGUgYmFsYW5jZSBvZiBmbGF2b3JzLCBhbmQgZGV2ZWxvcGluZyBhIGRlZXAgYXBwcmVjaWF0aW9uIGZvciBsb2NhbGx5IHNvdXJjZWQsIHNlYXNvbmFsIGluZ3JlZGllbnRzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2hlZkN1bGluYXJ5T2R5c3NleVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0Pkdsb2JhbCBDdWxpbmFyeSBPZHlzc2V5OjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBEcml2ZW4gYnkgYSBkZXNpcmUgdG8gZXhwbG9yZSBkaXZlcnNlIGN1bGluYXJ5IGxhbmRzY2FwZXMsIENoZWYgQWxlc3NhbmRyYSBlbWJhcmtlZCBvbiBhIGdsb2JhbCBvZHlzc2V5LCB3b3JraW5nIGluIGFjY2xhaW1lZCBraXRjaGVucyBmcm9tIFBhcmlzIHRvIFRva3lvLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlc2UgZXhwZXJpZW5jZXMgbm90IG9ubHkgYnJvYWRlbmVkIGhlciBjdWxpbmFyeSBob3Jpem9ucyBidXQgYWxzbyBhbGxvd2VkIGhlciB0byBpbmZ1c2UgYSB0b3VjaCBvZiBpbnRlcm5hdGlvbmFsIGZsYWlyIGludG8gaGVyIGNyZWF0aW9ucy4uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjaGVmRmxvdm9yUGhpbG9zb3BoeVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlBoaWxvc29waHkgb2YgRmxhdm9yOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBBdCB0aGUgaGVhcnQgb2YgQ2hlZiBBbGVzc2FuZHJhJ3MgY3VsaW5hcnkgcGhpbG9zb3BoeSBpcyB0aGUgYmVsaWVmIHRoYXQgZWFjaCBkaXNoIHNob3VsZCB0ZWxsIGEgc3RvcnksIGludm9raW5nIG1lbW9yaWVzIGFuZCBlbW90aW9ucyB0aHJvdWdoIHRoZSBtYXJyaWFnZSBvZiBmbGF2b3JzIGFuZCB0ZXh0dXJlcy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEhlciBkZWRpY2F0aW9uIHRvIGN1bGluYXJ5IGV4Y2VsbGVuY2UgaXMgcmVmbGVjdGVkIGluIGV2ZXJ5IG1ldGljdWxvdXNseSBjcmFmdGVkIGRpc2ggdGhhdCBncmFjZXMgdGhlIHRhYmxlcyBvZiBHdXN0byBCaXRlcy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNoZWZQYXNzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+UGhpbG9zb3BoeSBvZiBGbGF2b3I6PC9oND5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIFJldHVybmluZyB0byBoZXIgcm9vdHMgaW4gSXRhbHksIENoZWYgQWxlc3NhbmRyYSBSb3NzaSBicmluZ3MgYSBnbG9iYWwgcGVyc3BlY3RpdmUgdG8gbG9jYWwgaW5ncmVkaWVudHMsIGNyZWF0aW5nIGEgbWVudSB0aGF0IGNlbGVicmF0ZXMgdGhlIGJlc3Qgb2YgYm90aCB3b3JsZHMuXHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBIZXIgY29tbWl0bWVudCB0byBzdXN0YWluYWJpbGl0eSBhbmQgYSBmYXJtLXRvLXRhYmxlIGFwcHJvYWNoIGVuc3VyZXMgdGhhdCBldmVyeSBiaXRlIGlzIG5vdCBvbmx5IGEgZGVsaWdodCB0byB0aGUgc2Vuc2VzIGJ1dCBhbHNvIGEgbm9kIHRvIHJlc3BvbnNpYmxlIGRpbmluZy4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJjaGVmSW52aXRhdGlvblwiPlxyXG4gICAgICAgIFdlIGludml0ZSB5b3UgdG8gc2F2b3IgdGhlIGN1bGluYXJ5IG1hZ2ljIGN1cmF0ZWQgYnlcclxuICAgICAgICBDaGVmIEFsZXNzYW5kcmEgUm9zc2kgYXQgR3VzdG8gQml0ZXPigJRhbiBleHByZXNzaW9uIG9mIGhlciBjdWxpbmFyeSBhcnRpc3RyeSwgcGFzc2lvbiwgYW5kIGRlZGljYXRpb24gdG8gZGVsaXZlcmluZyBhbiBleGNlcHRpb25hbCBkaW5pbmcgZXhwZXJpZW5jZS5cclxuICAgIDwvcD5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFib3V0UGFnZSgpIHtcclxuICAgIGNvbnN0IGFib3V0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRQYWdlLmNsYXNzTGlzdC5hZGQoJ2Fib3V0UGFnZScpO1xyXG4gICAgY29uc3Qgd2F2ZVNWRyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgd2F2ZVNWRy5zcmMgPSBzdmdXYXZlO1xyXG4gICAgd2F2ZVNWRy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiQW4gU1ZHIFdhdmUgRGVjb3JhdGlvblwiKTtcclxuICAgIHdhdmVTVkcuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xyXG4gICAgd2F2ZVNWRy5jbGFzc05hbWUgPSBcInN2Z1dhdmVcIjtcclxuXHJcbiAgICBhYm91dFBhZ2UuYXBwZW5kQ2hpbGQob3VyU3RvcnkpO1xyXG4gICAgYWJvdXRQYWdlLmFwcGVuZENoaWxkKHdhdmVTVkcpO1xyXG4gICAgYWJvdXRQYWdlLmFwcGVuZENoaWxkKGNoZWZQcm9maWxlKTtcclxuICAgIGFib3V0UGFnZS5hcHBlbmRDaGlsZChnZXRGb290ZXIoKSk7XHJcblxyXG4gICAgcmV0dXJuIGFib3V0UGFnZTtcclxufSIsImltcG9ydCBjYXByZXNlQ3Jvc3RpbmkgZnJvbSAnLi9pbWFnZXMvY2FwcmVzZS1jcm9zdGluaS53ZWJwJztcclxuaW1wb3J0IHRydWZmbGVQYXJtZXNhbkZyaWVzIGZyb20gJy4vaW1hZ2VzL3RydWZmbGUtcGFybWVzYW4tZnJpZXMud2VicCc7XHJcbmltcG9ydCBtYW5nb0F2b2NhZG9TYWxhZCBmcm9tICcuL2ltYWdlcy9tYW5nby1hdm9jYWRvLXNhbGFkLndlYnAnO1xyXG5pbXBvcnQgcXVpbm9hR3JlZWtTYWxhZCBmcm9tICcuL2ltYWdlcy9xdWlub2EtZ3JlZWstc2FsYWQud2VicCc7XHJcbmltcG9ydCBnb3VybWV0QnVyZ2VyIGZyb20gJy4vaW1hZ2VzL2dvdXJtZXQtYnVyZ2VyLndlYnAnO1xyXG5pbXBvcnQgbGVtb25IZXJiR3JpbGxlZENoaWNrZW4gZnJvbSAnLi9pbWFnZXMvbGVtb24taGVyYi1ncmlsbGVkLWNoaWNrZW4ud2VicCc7XHJcbmltcG9ydCBwZXN0b1NocmltcExpbmd1aW5lIGZyb20gJy4vaW1hZ2VzL3Blc3RvLXNocmltcC1saW5ndWluZS53ZWJwJztcclxuaW1wb3J0IGRhcmtDaG9jb2xhdGVSYXNwYmVycnlUYXJ0IGZyb20gJy4vaW1hZ2VzL2RhcmstY2hvY29sYXRlLXJhc3BiZXJyeS10YXJ0LndlYnAnO1xyXG5pbXBvcnQgdGlyYW1pc3VEZWxpZ2h0IGZyb20gJy4vaW1hZ2VzL3RpcmFtaXN1LWRlbGlnaHQud2VicCc7XHJcblxyXG5pbXBvcnQgZ2V0Rm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcclxuXHJcbmZ1bmN0aW9uIGdldENvbnRhY3RQYWdlICgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0UGFnZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0UGFnZScpO1xyXG4gICAgY29udGFjdFBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMj5Db250YWN0IFVzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsZXJDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGxpbmdNZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3RydWZmbGVQYXJtZXNhbkZyaWVzfVwiIGFsdD1cIlRydWZmbGUgUGFybWVzYW4gRnJpZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bWFuZ29Bdm9jYWRvU2FsYWR9XCIgYWx0PVwiTWFuZ28gQXZvY2FkbyBTYWxhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtnb3VybWV0QnVyZ2VyfVwiIGFsdD1cIkdvdXJtZXQgQnVyZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2RhcmtDaG9jb2xhdGVSYXNwYmVycnlUYXJ0fVwiIGFsdD1cIkRhcmsgQ2hvY29sYXRlIFJhc3BiZXJyeVRhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Y2FwcmVzZUNyb3N0aW5pfVwiIGFsdD1cIkNhcHJlc2UgQ3Jvc3RpbmlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cXVpbm9hR3JlZWtTYWxhZH1cIiBhbHQ9XCJRdWlub2EgR3JlZWsgU2FsYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bGVtb25IZXJiR3JpbGxlZENoaWNrZW59XCIgYWx0PVwiTGVtb24gSGVyYiBHcmlsbGVkIENoaWNrZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dGlyYW1pc3VEZWxpZ2h0fVwiIGFsdD1cIlRpcmFtaXN1IERlbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGVzdG9TaHJpbXBMaW5ndWluZX1cIiBhbHQ9XCJQZXN0byBTaHJpbXAgTGluZ3VpbmVcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0Q29udGVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhhbmsgeW91IGZvciBjb25zaWRlcmluZyBHdXN0byBCaXRlcyBmb3IgeW91ciBkaW5pbmcgZXhwZXJpZW5jZS4gV2UncmUgaGVyZSB0byBhc3Npc3QgeW91IGluIGFueSB3YXkgcG9zc2libGUuIEZlZWwgZnJlZSB0byBnZXQgaW4gdG91Y2ggd2l0aCB1cyB1c2luZyB0aGUgY29udGFjdCBpbmZvcm1hdGlvbiBiZWxvdzpcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDY+QWRkcmVzczo8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgR3VzdG8gQml0ZXMgUmVzdGF1cmFudCAxMjMgTWFpbiBTdHJlZXQgQ2l0eXZpbGxlLCBTdGF0ZWJ1cmcsIDk4NzY1XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg2PlBob25lOjwvaDY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOisxNTU1MTIzNDU2N1wiPig1NTUpIDEyMy00NTY3PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxoNj5FbWFpbDo8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzppbmZvQGd1c3RvYml0ZXMuY29tXCI+aW5mb0BndXN0b2JpdGVzLmNvbTwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDY+T3BlbmluZyBIb3Vyczo8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgTW9uZGF5IC0gRnJpZGF5OiAxMDowMCBBTSAtIDEwOjAwIFBNPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIFNhdHVyZGF5IC0gU3VuZGF5OiAxOjAwIFBNIC0gMTA6MDAgUE1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDY+Q29ubmVjdCBvbiBTb2NpYWwgTWVkaWE6PC9oNj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB1cyBvbiA8YSBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb21cIj5GYWNlYm9vazwvYT4gLyA8YSBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tXCI+SW5zdGFncmFtPC9hPiAvIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCI+VHdpdHRlcjwvYT4gLyA8YSBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb21cIj5MaW5rZWRJbjwvYT4gLyA8YSBocmVmPVwiaHR0cHM6Ly95b3V0dWJlLmNvbVwiPllvdXR1YmU8L2E+IGZvciB0aGUgbGF0ZXN0IHVwZGF0ZXMsIHNwZWNpYWwgcHJvbW90aW9ucywgYW5kIGJlaGluZC10aGUtc2NlbmVzIGdsaW1wc2VzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoNj5GZWVkYmFjazo8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgWW91ciBvcGluaW9uIG1hdHRlcnMhIDxhIGhyZWY9XCJtYWlsdG86aW5mb0BndXN0b2JpdGVzLmNvbVwiPkxldCB1cyBrbm93PC9hPiBhYm91dCB5b3VyIGV4cGVyaWVuY2UgYXQgR3VzdG8gQml0ZXMuIFdlIHZhbHVlIHlvdXIgZmVlZGJhY2sgYXMgaXQgaGVscHMgdXMgY29udGludWFsbHkgaW1wcm92ZSBhbmQgZW5oYW5jZSBvdXIgb2ZmZXJpbmdzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoNj5SZXNlcnZhdGlvbnM8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgVG8gc2VjdXJlIGEgdGFibGUgZm9yIHlvdXIgbmV4dCB2aXNpdCwgeW91IGNhbiBtYWtlIGEgcmVzZXJ2YXRpb24gPGEgY2xhc3M9XCJyZXNlcnZlQnV0dG9uXCI+b25saW5lIHRocm91Z2ggb3VyIHdlYnNpdGU8L2E+IG9yIGJ5IDxhIGhyZWY9XCJ0ZWw6KzE1NTUxMjM0NTY3XCI+Y2FsbGluZyB1cyBkaXJlY3RseTwvYT4uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxwIGNsYXNzPVwiY29udGFjdExvb2tGb3J3YXJkXCI+XHJcbiAgICAgICAgICAgIFdlIGxvb2sgZm9yd2FyZCB0byB3ZWxjb21pbmcgeW91IHRvIEd1c3RvIEJpdGVzIGZvciBhIGRlbGlnaHRmdWwgZGluaW5nIGV4cGVyaWVuY2UuXHJcbiAgICAgICAgICAgIEJlc3QgUmVnYXJkcywgPHNwYW4gY2xhc3M9XCJyZXN0YXVyYW50TmFtZVwiPlRoZSBHdXN0byBCaXRlcyBUZWFtPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgIGA7XHJcblxyXG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoZ2V0Rm9vdGVyKCkpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gY29udGFjdFBhZ2U7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRTY3JvbGxBbmltYXRpb24oKSB7XHJcbiAgICBjb25zdCBzY3JvbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxlckNvbnRhaW5lcicpO1xyXG5cclxuICAgIGlmKCF3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIpLm1hdGNoZXMpIHtcclxuICAgICAgICBhZGRBbmltYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgc2Nyb2xsZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNjcm9sbGVySW5uZXIgPSBzY3JvbGxlci5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsaW5nTWVudScpO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbGVyQ29udGVudCA9IEFycmF5LmZyb20oc2Nyb2xsZXJJbm5lci5jaGlsZHJlbik7XHJcblxyXG4gICAgICAgIHNjcm9sbGVyQ29udGVudC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVkSXRlbSA9IGl0ZW0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBkdXBsaWNhdGVkSXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBzY3JvbGxlcklubmVyLmFwcGVuZENoaWxkKGR1cGxpY2F0ZWRJdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQge2dldENvbnRhY3RQYWdlLCBhZGRTY3JvbGxBbmltYXRpb259OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8cCBjbGFzcz1cImFkZHJlc3NcIj5cclxuICAgICAgICAgICAgR3VzdG8gQml0ZXMgUmVzdGF1cmFudCwgMTIzIE1haW4gU3RyZWV0IENpdHl2aWxsZSwgU3RhdGVidXJnLCA5ODc2NVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cInBob25lXCI+XHJcbiAgICAgICAgICAgIFBob25lOiA8YSBocmVmPVwidGVsOisxKDU1NSkxMjMtNDU2N1wiIGNsYXNzPVwibGlua1wiPig1NTUpIDEyMy00NTY3PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgIEVtYWlsOiA8YSBocmVmPVwibWFpbHRvOm5vdC1yZWFsLWVtYWlsQGd1c3RvYml0ZXMuY29tXCIgY2xhc3M9XCJsaW5rXCI+bm90LXJlYWwtZW1haWxAZ3VzdG9iaXRlcy5jb208L2E+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG59IiwiaW1wb3J0IGN1bGluYXJ5RXhjZWxsZW5jZSBmcm9tICcuL2ltYWdlcy9jdWxpbmFyeS1leGNlbGxlbmNlLndlYnAnO1xyXG5pbXBvcnQgY2FwcmVzZUNyb3N0aW5pIGZyb20gJy4vaW1hZ2VzL2NhcHJlc2UtY3Jvc3Rpbmkud2VicCc7XHJcbmltcG9ydCBwZXN0b1NocmltcExpbmd1aW5lIGZyb20gJy4vaW1hZ2VzL3Blc3RvLXNocmltcC1saW5ndWluZS53ZWJwJztcclxuaW1wb3J0IHRpcmFtaXN1RGVsaWdodCBmcm9tICcuL2ltYWdlcy90aXJhbWlzdS1kZWxpZ2h0LndlYnAnO1xyXG5pbXBvcnQgYnVyZ2VySG9tZSBmcm9tICcuL2ltYWdlcy9idXJnZXItaG9tZS53ZWJwJztcclxuaW1wb3J0IGd1c3RvQml0ZXNUcmFuc3BhcmVudCBmcm9tICcuL2ltYWdlcy9ndXN0by1iaXRlcy1sb2dvKHRyYW5zcGFyZW50KS5wbmcnO1xyXG5pbXBvcnQgZ2V0Rm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcclxuXHJcbmZ1bmN0aW9uIGdldEhvbWVQYWdlICgpIHtcclxuICAgIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lUGFnZS5jbGFzc0xpc3QuYWRkKCdob21lUGFnZScpO1xyXG4gICAgaG9tZVBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJoZXJvU2VjdGlvblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0eXBlZmFjZVwiPlxyXG4gICAgICAgICAgICBXZWxjb21lIFRvIDxzcGFuIGNsYXNzPVwibmFtZVwiPkd1c3RvIEJpdGVzPC9zcGFuPjo8YnI+XHJcbiAgICAgICAgICAgIFdoZXJlIEV2ZXJ5IEJpdGUgVGVsbHMgYSBTdG9yeVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJjdWxpbmFyeUV4Y2VsbGVuY2VcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIiR7Y3VsaW5hcnlFeGNlbGxlbmNlfVwiIGFsdD0gXCJDdWxpbmFyeSBFeGNlbGxlbmNlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImN1bGluYXJ5RXhjZWxsZW5jZUNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgyPkN1bGluYXJ5IEV4Y2VsbGVuY2U6PC9oMj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBJbmR1bGdlIGluIGEgc3ltcGhvbnkgb2YgZmxhdm9ycyBtZXRpY3Vsb3VzbHkgY3JhZnRlZCBieSBvdXIgY2hlZiwgPHNwYW4gY2xhc3M9XCJjaGVmTmFtZVwiPkFsZXNzYW5kcmEgUm9zc2k8L3NwYW4+Ljxicj5cclxuICAgICAgICAgICAgICAgIEVhY2ggZGlzaCBpcyBhIG1hc3RlcnBpZWNlLCBhIGZ1c2lvbiBvZiBjdWxpbmFyeSBhcnRpc3RyeSBhbmQgdGhlIGZpbmVzdCwgZnJlc2hlc3QgaW5ncmVkaWVudHMuPGJyPlxyXG4gICAgICAgICAgICAgICAgRnJvbSB0YW50YWxpemluZyBhcHBldGl6ZXJzIHRvIGRlY2FkZW50IGRlc3NlcnRzLCBldmVyeSBiaXRlIGF0IEd1c3RvIEJpdGVzIHRlbGxzIGEgc3Rvcnkgb2YgcGFzc2lvbiBhbmQgY3JlYXRpdml0eS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJldmVyeU9jY2FzaW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZXJ5T2NjYXNpb25Db250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMj5BIFBsYWNlIGZvciBFdmVyeSBPY2Nhc2lvbjo8L2gyPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFdoZXRoZXIgeW91J3JlIGNlbGVicmF0aW5nIGEgc3BlY2lhbCBvY2Nhc2lvbiBvciBsb29raW5nIGZvciBhIGNvenkgc3BvdCB0byB1bndpbmQsIEd1c3RvIEJpdGVzIG9mZmVycyB0aGUgcGVyZmVjdCBhbWJpYW5jZS48YnI+XHJcbiAgICAgICAgICAgICAgICBPdXIgdGhvdWdodGZ1bGx5IGRlc2lnbmVkIHNwYWNlLCBjb3VwbGVkIHdpdGggYXR0ZW50aXZlIHNlcnZpY2UsIGNyZWF0ZXMgYW4gaW52aXRpbmcgYXRtb3NwaGVyZSBmb3IgYm90aCBpbnRpbWF0ZSBnYXRoZXJpbmdzIGFuZCBmZXN0aXZlIGNlbGVicmF0aW9ucy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtZW51c1wiPlxyXG4gICAgICAgIDxoMj5FeHBsb3JlIE91ciBNZW51OjwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVzQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkc0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2NhcHJlc2VDcm9zdGluaX1cIiBhbHQ9XCJDYXByZXNlIENyb3N0aW5pXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGVzdG9TaHJpbXBMaW5ndWluZX1cIiBhbHQ9XCJQZXN0byBTaHJpbXAgTGluZ3VpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt0aXJhbWlzdURlbGlnaHR9XCIgYWx0PVwiVGlyYW1pc3UgRGVsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNxdWFyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnVzQ29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgRW1iYXJrIG9uIGEgZ2FzdHJvbm9taWMgYWR2ZW50dXJlIHdpdGggb3VyIGRpdmVyc2UgbWVudS48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgRnJvbSBtb3V0aHdhdGVyaW5nIGFwcGV0aXplcnMgdG8gaGVhcnR5IG1haW4gY291cnNlcyBhbmQgZGVsaWdodGZ1bCBkZXNzZXJ0cywgR3VzdG8gQml0ZXMgaXMgYSBoYXZlbiBmb3IgZm9vZCBlbnRodXNpYXN0cy48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhwbG9yZSBvdXIgbWVudSBhbmQgc2F2b3IgdGhlIHN5bXBob255IG9mIGZsYXZvcnMgdGhhdCBhd2FpdHMgeW91LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNlY29uZGFyeSBleHBsb3JlTm93XCIgdHlwZT1cImJ1dHRvblwiPkV4cGxvcmUgTm93PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtYWtlUmVzZXJ2YXRpb25zXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIke2J1cmdlckhvbWV9XCIgYWx0PVwiQSBuaWNlIEhhbWJ1cmdlciBQaWN0dXJlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1ha2VSZXNlcnZhdGlvbnNDb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMj5NYWtlIFJlc2VydmF0aW9uczwvaDI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgUmVhZHkgdG8gZXhwZXJpZW5jZSBHdXN0byBCaXRlcz8gU2VjdXJlIHlvdXIgc3BvdCBieSBtYWtpbmcgYSByZXNlcnZhdGlvbi4gV2hldGhlciBpdCdzIGEgcm9tYW50aWMgZGlubmVyIGZvciB0d28gb3IgYSBnYXRoZXJpbmcgd2l0aCBmcmllbmRzLCB3ZSBsb29rIGZvcndhcmQgdG8gY3JlYXRpbmcgbWVtb3JhYmxlIG1vbWVudHMgZm9yIHlvdS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeSByZXNlcnZlTm93XCIgdHlwZT1cImJ1dHRvblwiPlJlc2VydmUgTm93PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cInN0YXlDb25uZWN0ZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RheUNvbm5lY3RlZENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RheUNvbm5lY3RlZENvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5TdGF5IENvbm5lY3RlZDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgRm9sbG93IHVzIG9uIHNvY2lhbCBtZWRpYSBmb3IgdGhlIGxhdGVzdCB1cGRhdGVzLCBiZWhpbmQtdGhlLXNjZW5lcyBnbGltcHNlcywgYW5kIHNwZWNpYWwgcHJvbW90aW9ucy48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgSm9pbiBvdXIgY29tbXVuaXR5IG9mIGZvb2QgZW50aHVzaWFzdHMgd2hvIGFwcHJlY2lhdGUgdGhlIGFydCBvZiBmaW5lIGRpbmluZy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbEljb25zXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOTZcIiBoZWlnaHQ9XCI5N1wiIHZpZXdCb3g9XCIwIDAgOTYgOTdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeT1cIjAuNDM4NDc3XCIgd2lkdGg9XCI5NlwiIGhlaWdodD1cIjk2XCIgcng9XCI0OFwiIGZpbGw9XCIjRkY1NzMzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTU5Ljc0MzQgNTEuNTYzM0w2MS4xMTEzIDQyLjg3MjdINTIuNjg1NVYzNy4yMjM4QzUyLjY4NTUgMzQuODQ3NSA1My44NjE5IDMyLjUyNTUgNTcuNjIzMyAzMi41MjU1SDYxLjUwNzlWMjUuMTI0OUM1OS4yNDU3IDI0Ljc2NDIgNTYuOTU5OSAyNC41NjkgNTQuNjY4OSAyNC41NDFDNDcuNzM0MSAyNC41NDEgNDMuMjA2NiAyOC43MDk4IDQzLjIwNjYgMzYuMjQ2MlY0Mi44NzI3SDM1LjUxOTVWNTEuNTYzM0g0My4yMDY2VjcyLjU4MzdINTIuNjg1NVY1MS41NjMzSDU5Ljc0MzRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI5NlwiIGhlaWdodD1cIjk3XCIgdmlld0JveD1cIjAgMCA5NiA5N1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB5PVwiMC40Mzg0NzdcIiB3aWR0aD1cIjk2XCIgaGVpZ2h0PVwiOTZcIiByeD1cIjQ4XCIgZmlsbD1cIiNGRjU3MzNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDAuMDEwOSA0OC41NjE0QzQwLjAxMDkgNDQuMTM5MyA0My41OTM2IDQwLjU1MzYgNDguMDE0NCA0MC41NTM2QzUyLjQzNTIgNDAuNTUzNiA1Ni4wMTk4IDQ0LjEzOTMgNTYuMDE5OCA0OC41NjE0QzU2LjAxOTggNTIuOTgzNCA1Mi40MzUyIDU2LjU2OTEgNDguMDE0NCA1Ni41NjkxQzQzLjU5MzYgNTYuNTY5MSA0MC4wMTA5IDUyLjk4MzQgNDAuMDEwOSA0OC41NjE0Wk0zNS42ODMzIDQ4LjU2MTRDMzUuNjgzMyA1NS4zNzM4IDQxLjIwMzkgNjAuODk2IDQ4LjAxNDQgNjAuODk2QzU0LjgyNDkgNjAuODk2IDYwLjM0NTUgNTUuMzczOCA2MC4zNDU1IDQ4LjU2MTRDNjAuMzQ1NSA0MS43NDg5IDU0LjgyNDkgMzYuMjI2NyA0OC4wMTQ0IDM2LjIyNjdDNDEuMjAzOSAzNi4yMjY3IDM1LjY4MzMgNDEuNzQ4OSAzNS42ODMzIDQ4LjU2MTRaTTU3Ljk1MTkgMzUuNzM3NkM1Ny45NTE3IDM2LjMwNzcgNTguMTIwNSAzNi44NjUxIDU4LjQzNyAzNy4zMzkzQzU4Ljc1MzQgMzcuODEzNSA1OS4yMDMzIDM4LjE4MzEgNTkuNzI5OCAzOC40MDE1QzYwLjI1NjMgMzguNjE5OSA2MC44MzU3IDM4LjY3NzIgNjEuMzk0NyAzOC41NjYyQzYxLjk1MzggMzguNDU1MiA2Mi40Njc0IDM4LjE4MDggNjIuODcwNSAzNy43Nzc5QzYzLjI3MzcgMzcuMzc0OSA2My41NDg0IDM2Ljg2MTQgNjMuNjU5OCAzNi4zMDIzQzYzLjc3MTIgMzUuNzQzMiA2My43MTQ0IDM1LjE2MzUgNjMuNDk2NSAzNC42MzY3QzYzLjI3ODYgMzQuMTA5OSA2Mi45MDk0IDMzLjY1OTYgNjIuNDM1NiAzMy4zNDI3QzYxLjk2MTkgMzMuMDI1NyA2MS40MDQ4IDMyLjg1NjUgNjAuODM0OCAzMi44NTYySDYwLjgzMzdDNjAuMDY5NyAzMi44NTY2IDU5LjMzNzEgMzMuMTYwMiA1OC43OTY4IDMzLjcwMDVDNTguMjU2NSAzNC4yNDA4IDU3Ljk1MjYgMzQuOTczNCA1Ny45NTE5IDM1LjczNzZaTTM4LjMxMjYgNjguMTE0MkMzNS45NzEzIDY4LjAwNzUgMzQuNjk4NyA2Ny42MTc0IDMzLjg1MyA2Ny4yODc4QzMyLjczMTggNjYuODUxMiAzMS45MzE5IDY2LjMzMTIgMzEuMDkwOCA2NS40OTFDMzAuMjQ5NyA2NC42NTA5IDI5LjcyOTEgNjMuODUxNCAyOS4yOTQ1IDYyLjcyOTlDMjguOTY0OCA2MS44ODQ0IDI4LjU3NDggNjAuNjExIDI4LjQ2ODQgNTguMjY5MUMyOC4zNTIgNTUuNzM3IDI4LjMyODcgNTQuOTc2NCAyOC4zMjg3IDQ4LjU2MTZDMjguMzI4NyA0Mi4xNDY3IDI4LjM1MzkgNDEuMzg4MiAyOC40Njg0IDM4Ljg1NDFDMjguNTc1IDM2LjUxMjEgMjguOTY3OSAzNS4yNDEzIDI5LjI5NDUgMzQuMzkzMkMyOS43MzEgMzMuMjcxNyAzMC4yNTA5IDMyLjQ3MTUgMzEuMDkwOCAzMS42MzAyQzMxLjkzMDcgMzAuNzg4OSAzMi43Mjk5IDMwLjI2ODEgMzMuODUzIDI5LjgzMzRDMzQuNjk4MyAyOS41MDM2IDM1Ljk3MTMgMjkuMTEzNSAzOC4zMTI2IDI5LjAwN0M0MC44NDM5IDI4Ljg5MDYgNDEuNjA0MyAyOC44NjczIDQ4LjAxNDQgMjguODY3M0M1NC40MjQ1IDI4Ljg2NzMgNTUuMTg1NyAyOC44OTI1IDU3LjcxOTEgMjkuMDA3QzYwLjA2MDQgMjkuMTEzNyA2MS4zMzA5IDI5LjUwNjcgNjIuMTc4NyAyOS44MzM0QzYzLjI5OTkgMzAuMjY4MSA2NC4wOTk4IDMwLjc5IDY0Ljk0MDkgMzEuNjMwMkM2NS43ODIgMzIuNDcwMyA2Ni4zMDA3IDMzLjI3MTcgNjYuNzM3MiAzNC4zOTMyQzY3LjA2NjkgMzUuMjM4OCA2Ny40NTY4IDM2LjUxMjEgNjcuNTYzMyAzOC44NTQxQzY3LjY3OTcgNDEuMzg4MiA2Ny43MDI5IDQyLjE0NjcgNjcuNzAyOSA0OC41NjE2QzY3LjcwMjkgNTQuOTc2NCA2Ny42Nzk3IDU1LjczNDkgNjcuNTYzMyA1OC4yNjkxQzY3LjQ1NjcgNjAuNjExIDY3LjA2NDcgNjEuODg0IDY2LjczNzIgNjIuNzI5OUM2Ni4zMDA3IDYzLjg1MTQgNjUuNzgwOCA2NC42NTE2IDY0Ljk0MDkgNjUuNDkxQzY0LjEwMSA2Ni4zMzA0IDYzLjI5OTkgNjYuODUxMiA2Mi4xNzg3IDY3LjI4NzhDNjEuMzMzNCA2Ny42MTc2IDYwLjA2MDQgNjguMDA3NyA1Ny43MTkxIDY4LjExNDJDNTUuMTg3OCA2OC4yMzA2IDU0LjQyNzQgNjguMjUzOSA0OC4wMTQ0IDY4LjI1MzlDNDEuNjAxNCA2OC4yNTM5IDQwLjg0MzEgNjguMjMwNiAzOC4zMTI2IDY4LjExNDJaTTM4LjExMzcgMjQuNjg1NUMzNS41NTczIDI0LjgwMiAzMy44MTA0IDI1LjIwNzQgMzIuMjg0OCAyNS44MDEzQzMwLjcwNDggMjYuNDE0NSAyOS4zNjczIDI3LjIzNzIgMjguMDMwOCAyOC41NzJDMjYuNjk0MiAyOS45MDY4IDI1Ljg3MzkgMzEuMjQ2OCAyNS4yNjA5IDMyLjgyNzJDMjQuNjY3MiAzNC4zNTQyIDI0LjI2MTkgMzYuMTAwNiAyNC4xNDU0IDM4LjY1NzlDMjQuMDI3MSA0MS4yMTkxIDI0IDQyLjAzNzkgMjQgNDguNTYxNEMyNCA1NS4wODQ4IDI0LjAyNzEgNTUuOTAzNiAyNC4xNDU0IDU4LjQ2NDlDMjQuMjYxOSA2MS4wMjIzIDI0LjY2NzIgNjIuNzY4NiAyNS4yNjA5IDY0LjI5NTVDMjUuODczOSA2NS44NzUgMjYuNjk0NCA2Ny4yMTY1IDI4LjAzMDggNjguNTUwOEMyOS4zNjcxIDY5Ljg4NSAzMC43MDQ4IDcwLjcwNjUgMzIuMjg0OCA3MS4zMjE1QzMzLjgxMzIgNzEuOTE1MyAzNS41NTczIDcyLjMyMDggMzguMTEzNyA3Mi40MzcyQzQwLjY3NTYgNzIuNTUzNyA0MS40OTI5IDcyLjU4MjcgNDguMDE0NCA3Mi41ODI3QzU0LjUzNTkgNzIuNTgyNyA1NS4zNTQ1IDcyLjU1NTYgNTcuOTE1MSA3Mi40MzcyQzYwLjQ3MTcgNzIuMzIwOCA2Mi4yMTc1IDcxLjkxNTMgNjMuNzQ0IDcxLjMyMTVDNjUuMzIzIDcwLjcwNjUgNjYuNjYxNSA2OS44ODU2IDY3Ljk5OCA2OC41NTA4QzY5LjMzNDYgNjcuMjE2IDcwLjE1MzIgNjUuODc1IDcwLjc2OCA2NC4yOTU1QzcxLjM2MTYgNjIuNzY4NiA3MS43Njg5IDYxLjAyMjEgNzEuODgzNCA1OC40NjQ5QzcxLjk5OTggNTUuOTAxNyA3Mi4wMjY5IDU1LjA4NDggNzIuMDI2OSA0OC41NjE0QzcyLjAyNjkgNDIuMDM3OSA3MS45OTk4IDQxLjIxOTEgNzEuODgzNCAzOC42NTc5QzcxLjc2NjkgMzYuMTAwNSA3MS4zNjE2IDM0LjM1MzIgNzAuNzY4IDMyLjgyNzJDNzAuMTUzMiAzMS4yNDc4IDY5LjMzMjUgMjkuOTA4OSA2Ny45OTggMjguNTcyQzY2LjY2MzYgMjcuMjM1IDY1LjMyMyAyNi40MTQ1IDYzLjc0NTkgMjUuODAxM0M2Mi4yMTc1IDI1LjIwNzQgNjAuNDcxNSAyNC44IDU3LjkxNyAyNC42ODU1QzU1LjM1NjUgMjQuNTY5MSA1NC41Mzc5IDI0LjU0IDQ4LjAxNjMgMjQuNTRDNDEuNDk0OCAyNC41NCA0MC42NzU2IDI0LjU2NzEgMzguMTEzNyAyNC42ODU1WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2xpbmtlZGluLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI5NlwiIGhlaWdodD1cIjk2XCIgdmlld0JveD1cIjAgMCA5NiA5NlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjk2XCIgaGVpZ2h0PVwiOTZcIiByeD1cIjQ4XCIgZmlsbD1cIiNGRjU3MzNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzYuOTU1NCA2Ny40NTI4VjQxLjUyMDRIMjguMzQzNVY2Ny40NTI4SDM2Ljk1NjNIMzYuOTU1NFpNMzIuNjUxMyAzNy45ODA0QzM1LjY1MzggMzcuOTgwNCAzNy41MjMgMzUuOTg5MSAzNy41MjMgMzMuNTAwNUMzNy40NjY4IDMwLjk1NTMgMzUuNjUzOCAyOS4wMTk1IDMyLjcwODQgMjkuMDE5NUMyOS43NjEgMjkuMDE5NSAyNy44MzU5IDMwLjk1NTMgMjcuODM1OSAzMy41MDAzQzI3LjgzNTkgMzUuOTg4OSAyOS43MDQ1IDM3Ljk4MDIgMzIuNTk0OSAzNy45ODAySDMyLjY1MDZMMzIuNjUxMyAzNy45ODA0Wk00MS43MjIyIDY3LjQ1MjhINTAuMzMzNFY1Mi45NzI1QzUwLjMzMzQgNTIuMTk4NSA1MC4zODk2IDUxLjQyMjUgNTAuNjE3MSA1MC44Njk2QzUxLjIzOTQgNDkuMzIwNCA1Mi42NTYzIDQ3LjcxNjggNTUuMDM1OSA0Ny43MTY4QzU4LjE1MTIgNDcuNzE2OCA1OS4zOTgyIDUwLjA5NDcgNTkuMzk4MiA1My41ODEyVjY3LjQ1MjhINjguMDA5MlY1Mi41ODM5QzY4LjAwOTIgNDQuNjE5IDYzLjc2MTMgNDAuOTEyNCA1OC4wOTU1IDQwLjkxMjRDNTMuNDUwMyA0MC45MTI0IDUxLjQxMDIgNDMuNTExIDUwLjI3NjcgNDUuMjgwOUg1MC4zMzQxVjQxLjUyMTNINDEuNzIyNkM0MS44MzUxIDQzLjk1NDEgNDEuNzIyIDY3LjQ1MzcgNDEuNzIyIDY3LjQ1MzdMNDEuNzIyMiA2Ny40NTI4WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjk2XCIgaGVpZ2h0PVwiOTdcIiB2aWV3Qm94PVwiMCAwIDk2IDk3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHk9XCIwLjQzODQ3N1wiIHdpZHRoPVwiOTZcIiBoZWlnaHQ9XCI5NlwiIHJ4PVwiNDhcIiBmaWxsPVwiI0ZGNTczM1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03MS44MjczIDMzLjIzOTVDNzAuMjQyMSAzMy45MjIzIDY4LjU3NTcgMzQuMzk3OCA2Ni44NjkyIDM0LjY1NDFDNjcuNjY3IDM0LjUxNzIgNjguODQxIDMzLjA3OTggNjkuMzA4MyAzMi40OThDNzAuMDE4MyAzMS42MjA0IDcwLjU1OTMgMzAuNjE4NiA3MC45MDQgMjkuNTQzNEM3MC45MDQgMjkuNDYzNSA3MC45ODM4IDI5LjM0OTQgNzAuOTA0IDI5LjI5MjRDNzAuODYzOCAyOS4yNzA0IDcwLjgxODcgMjkuMjU4OSA3MC43NzI5IDI5LjI1ODlDNzAuNzI3MSAyOS4yNTg5IDcwLjY4MjEgMjkuMjcwNCA3MC42NDE5IDI5LjI5MjRDNjguNzg4OCAzMC4yOTY4IDY2LjgxNjYgMzEuMDYzMyA2NC43NzIgMzEuNTc0QzY0LjcwMDcgMzEuNTk1OCA2NC42MjQ4IDMxLjU5NzcgNjQuNTUyNiAzMS41Nzk2QzY0LjQ4MDMgMzEuNTYxNSA2NC40MTQzIDMxLjUyNDEgNjQuMzYxNiAzMS40NzEzQzY0LjIwMjUgMzEuMjgxNiA2NC4wMzEyIDMxLjEwMjUgNjMuODQ4NyAzMC45MzUxQzYzLjAxNDggMzAuMTg3MyA2Mi4wNjg2IDI5LjU3NTIgNjEuMDQ0OCAyOS4xMjEzQzU5LjY2MjkgMjguNTUzOCA1OC4xNzAyIDI4LjMwOCA1Ni42Nzk1IDI4LjQwMjZDNTUuMjMzIDI4LjQ5NCA1My44MjA4IDI4Ljg4MjMgNTIuNTMwNiAyOS41NDM0QzUxLjI2MDIgMzAuMjQwMyA1MC4xNDM2IDMxLjE4NzEgNDkuMjQ4IDMyLjMyNjlDNDguMzA2IDMzLjUwMDEgNDcuNjI1OSAzNC44NjE1IDQ3LjI1MzQgMzYuMzE5N0M0Ni45NDYzIDM3LjcwNjggNDYuOTExNCAzOS4xNDAzIDQ3LjE1MDggNDAuNTQwN0M0Ny4xNTA4IDQwLjc4MDIgNDcuMTUwOCA0MC44MTQ1IDQ2Ljk0NTcgNDAuNzgwMkMzOC44MTkgMzkuNTgyNCAzMi4xNTEyIDM2LjY5NjIgMjYuNzAzIDMwLjUwMTZDMjYuNDYzNyAzMC4yMjc4IDI2LjMzODMgMzAuMjI3OCAyNi4xNDQ1IDMwLjUwMTZDMjMuNzczOCAzNC4xMDY2IDI0LjkyNSAzOS44MTA2IDI3Ljg4ODQgNDIuNjI4M0MyOC4yODczIDQzLjAwNDggMjguNjk3NyA0My4zNjk5IDI5LjEzMDggNDMuNzEyMUMyNy43NzIxIDQzLjYxNTYgMjYuNDQ2NSA0My4yNDcgMjUuMjMyNyA0Mi42MjgzQzI1LjAwNDcgNDIuNDggMjQuODc5NCA0Mi41NTk5IDI0Ljg2OCA0Mi44MzM3QzI0LjgzNTcgNDMuMjEzMyAyNC44MzU3IDQzLjU5NDkgMjQuODY4IDQzLjk3NDVDMjUuMTA1OCA0NS43OTM2IDI1LjgyMjEgNDcuNTE2OSAyNi45NDM1IDQ4Ljk2ODFDMjguMDY1IDUwLjQxOTIgMjkuNTUxNCA1MS41NDYzIDMxLjI1MDggNTIuMjMzOUMzMS42NjUgNTIuNDExNSAzMi4wOTY3IDUyLjU0NTMgMzIuNTM4NyA1Mi42MzMyQzMxLjI4MDkgNTIuODgxIDI5Ljk5MDggNTIuOTE5NiAyOC43MjA1IDUyLjc0NzNDMjguNDQ2OSA1Mi42OTAyIDI4LjM0NDMgNTIuODM4NSAyOC40NDY5IDUzLjEwMDlDMzAuMTIyNCA1Ny42NjQxIDMzLjc1ODMgNTkuMDU1OSAzNi40MjU0IDU5LjgzMTZDMzYuNzkwMiA1OS44ODg3IDM3LjE1NDkgNTkuODg4NyAzNy41NjUyIDU5Ljk3OTlDMzcuNTY1MiA1OS45Nzk5IDM3LjU2NTIgNTkuOTc5OSAzNy40OTY4IDYwLjA0ODRDMzYuNzEwNCA2MS40ODU4IDMzLjUzMDQgNjIuNDU1NSAzMi4wNzE0IDYyLjk1NzRDMjkuNDA4NSA2My45MTQ4IDI2LjU2OTMgNjQuMjgwNyAyMy43NTEgNjQuMDI5OEMyMy4zMDY1IDYzLjk2MTMgMjMuMjAzOSA2My45NzI3IDIzLjA4OTkgNjQuMDI5OEMyMi45NzU5IDY0LjA4NjggMjMuMDg5OSA2NC4yMTIzIDIzLjIxNTMgNjQuMzI2NEMyMy43ODUyIDY0LjcwMjkgMjQuMzU1MSA2NS4wMzM3IDI0Ljk0NzggNjUuMzUzMUMyNi43MTIyIDY2LjMxNjQgMjguNTc3NiA2Ny4wODE1IDMwLjUwOTkgNjcuNjM0N0M0MC41MTczIDcwLjM5NTUgNTEuNzc4NCA2OC4zNjQ4IDU5LjI4OTYgNjAuODkyNkM2NS4xOTM3IDU1LjAyODkgNjcuMjY4MSA0Ni45NDA2IDY3LjI2ODEgMzguODQwOUM2Ny4yNjgxIDM4LjUzMjkgNjcuNjQ0MiAzOC4zNTAzIDY3Ljg2MDggMzguMTkwNkM2OS4zNTQ1IDM3LjAyNTcgNzAuNjcxNCAzNS42NTAxIDcxLjc3MDMgMzQuMTA2NkM3MS45NjA2IDMzLjg3NjUgNzIuMDU4MSAzMy41ODM1IDcyLjA0MzggMzMuMjg1MkM3Mi4wNDM4IDMzLjExNDEgNzIuMDQzOCAzMy4xNDgzIDcxLjgyNzMgMzMuMjM5NVpcIiBmaWxsPVwid2hpdGVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly95b3V0dWJlLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI5NlwiIGhlaWdodD1cIjk2XCIgdmlld0JveD1cIjAgMCA5NiA5NlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjk2XCIgaGVpZ2h0PVwiOTZcIiByeD1cIjQ4XCIgZmlsbD1cIiNGRjU3MzNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzQuNzAwNyAzNC43OTU0Qzc0LjA3NCAzMi40MzkxIDcyLjIxOTggMzAuNTgwMiA2OS44NjA3IDI5Ljk0MzFDNjUuNTk1MiAyOC43OTk4IDQ4LjQ4MTEgMjguNzk5OCA0OC40ODExIDI4Ljc5OThDNDguNDgxMSAyOC43OTk4IDMxLjM3NTcgMjguNzk5OCAyNy4xMDE1IDI5Ljk0MzFDMjQuNzUxMSAzMC41NzE0IDIyLjg5NjkgMzIuNDMwMyAyMi4yNjE1IDM0Ljc5NTRDMjEuMTIxMSAzOS4wNzE4IDIxLjEyMTEgNDcuOTk5OCAyMS4xMjExIDQ3Ljk5OThDMjEuMTIxMSA0Ny45OTk4IDIxLjEyMTEgNTYuOTI3OCAyMi4yNjE1IDYxLjIwNDJDMjIuODg4MiA2My41NjA1IDI0Ljc0MjQgNjUuNDE5NCAyNy4xMDE1IDY2LjA1NjVDMzEuMzc1NyA2Ny4xOTk4IDQ4LjQ4MTEgNjcuMTk5OCA0OC40ODExIDY3LjE5OThDNDguNDgxMSA2Ny4xOTk4IDY1LjU5NTIgNjcuMTk5OCA2OS44NjA3IDY2LjA1NjVDNzIuMjExMSA2NS40MjgyIDc0LjA2NTMgNjMuNTY5MyA3NC43MDA3IDYxLjIwNDJDNzUuODQxMSA1Ni45Mjc4IDc1Ljg0MTEgNDcuOTk5OCA3NS44NDExIDQ3Ljk5OThDNzUuODQxMSA0Ny45OTk4IDc1Ljg0MTEgMzkuMDcxOCA3NC43MDA3IDM0Ljc5NTRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQzLjAxNDMgNTYuMjI5Nkw1Ny4yMjk3IDQ3Ljk5OThMNDMuMDE0MyAzOS43N1Y1Ni4yMjk2WlwiIGZpbGw9XCIjRkY1NzMzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmV3c2xldHRlckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDM+U3Vic2NyaWJlIG91ciBOZXdzbGV0dGVyPC9oMz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZXhhbXBsZUBnbWFpbC5jb21cIiB0aXRsZT1cIkVtYWlsIEFkZHJlc3NcIiBjbGFzcz1cImVtYWlsSW5wdXRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzZWNvbmRhcnlcIj5TdWJzY3JpYmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwieWVsbG93Q2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9yYW5nZUNpcmNsZVwiPjwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJxdW90ZVwiPlxyXG4gICAgICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICA8cT5BdCBHdXN0byBCaXRlcywgd2UgZG9uJ3QganVzdCBzZXJ2ZSBmb29kOyB3ZSBjcmFmdCBleHBlcmllbmNlcy48YnI+XHJcbiAgICAgICAgICAgIFdlbGNvbWUgdG8gYSB3b3JsZCB3aGVyZSBldmVyeSBiaXRlIHRlbGxzIGEgc3RvcnksIGFuZCBldmVyeSBtb21lbnQgaXMgc2F2b3JlZC48L3E+XHJcblxyXG4gICAgICAgICAgICA8cD5Cb24gQXBww6l0aXQhIDxlbT5UaGUgR3VzdG8gQml0ZXMgVGVhbTwvZW0+PC9wPlxyXG4gICAgICAgIDwvYmxvY2txdW90ZT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIGA7XHJcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChnZXRGb290ZXIoKSk7XHJcbiAgICByZXR1cm4gaG9tZVBhZ2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENyZWRpdHNTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY3JlZGl0c1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBjcmVkaXRzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjcmVkaXRzJyk7XHJcbiAgICBjcmVkaXRzU2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW1nIHNyYz1cIiR7Z3VzdG9CaXRlc1RyYW5zcGFyZW50fVwiIGFsdD1cIkd1c3RvIEJpdGVzIExvZ29cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzaXRlbWFwXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJsaW5rXCI+SG9tZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlua1wiPk1lbnU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImxpbmtcIj5BYm91dDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlua1wiPkNvbnRhY3Q8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImxpbmtcIj5SZXNlcnZhdGlvbnM8L2J1dHRvbj5cclxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOmluZm9AZ3VzdG9iaXRlcy5jb21cIiBjbGFzcz1cImxpbmtcIj5GZWVkYmFjazwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNyZWRpdHNDb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2ZWxvcGVyXCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgJmNvcHk7IEJ1aWx0IGJ5IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMHhrZXYyMVwiIGNsYXNzPVwibGlua1wiPktldjwvYT4sXHJcbiAgICAgICAgICAgICAgICBTb3VyY2U6IDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMHhrZXYyMS9HdXN0b0JpdGVzLXJlc3RhdXJhbnQtcGFnZVwiIGNsYXNzPVwibGlua1wiPkdpdGh1YjwvYT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2U29jaWFsSWNvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vMHhrZXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiNTdcIiBoZWlnaHQ9XCI1N1wiIHZpZXdCb3g9XCIwIDAgOTYgOTdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgeT1cIjAuNDM4NDc3XCIgd2lkdGg9XCI5NlwiIGhlaWdodD1cIjk2XCIgcng9XCI0OFwiIGZpbGw9XCIjODY2QzIwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTU5Ljc0MzQgNTEuNTYzM0w2MS4xMTEzIDQyLjg3MjdINTIuNjg1NVYzNy4yMjM4QzUyLjY4NTUgMzQuODQ3NSA1My44NjE5IDMyLjUyNTUgNTcuNjIzMyAzMi41MjU1SDYxLjUwNzlWMjUuMTI0OUM1OS4yNDU3IDI0Ljc2NDIgNTYuOTU5OSAyNC41NjkgNTQuNjY4OSAyNC41NDFDNDcuNzM0MSAyNC41NDEgNDMuMjA2NiAyOC43MDk4IDQzLjIwNjYgMzYuMjQ2MlY0Mi44NzI3SDM1LjUxOTVWNTEuNTYzM0g0My4yMDY2VjcyLjU4MzdINTIuNjg1NVY1MS41NjMzSDU5Ljc0MzRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vMHhrZXZfXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjU3XCIgaGVpZ2h0PVwiNTdcIiB2aWV3Qm94PVwiMCAwIDk2IDk3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHk9XCIwLjQzODQ3N1wiIHdpZHRoPVwiOTZcIiBoZWlnaHQ9XCI5NlwiIHJ4PVwiNDhcIiBmaWxsPVwiIzg2NkMyMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MC4wMTA5IDQ4LjU2MTRDNDAuMDEwOSA0NC4xMzkzIDQzLjU5MzYgNDAuNTUzNiA0OC4wMTQ0IDQwLjU1MzZDNTIuNDM1MiA0MC41NTM2IDU2LjAxOTggNDQuMTM5MyA1Ni4wMTk4IDQ4LjU2MTRDNTYuMDE5OCA1Mi45ODM0IDUyLjQzNTIgNTYuNTY5MSA0OC4wMTQ0IDU2LjU2OTFDNDMuNTkzNiA1Ni41NjkxIDQwLjAxMDkgNTIuOTgzNCA0MC4wMTA5IDQ4LjU2MTRaTTM1LjY4MzMgNDguNTYxNEMzNS42ODMzIDU1LjM3MzggNDEuMjAzOSA2MC44OTYgNDguMDE0NCA2MC44OTZDNTQuODI0OSA2MC44OTYgNjAuMzQ1NSA1NS4zNzM4IDYwLjM0NTUgNDguNTYxNEM2MC4zNDU1IDQxLjc0ODkgNTQuODI0OSAzNi4yMjY3IDQ4LjAxNDQgMzYuMjI2N0M0MS4yMDM5IDM2LjIyNjcgMzUuNjgzMyA0MS43NDg5IDM1LjY4MzMgNDguNTYxNFpNNTcuOTUxOSAzNS43Mzc2QzU3Ljk1MTcgMzYuMzA3NyA1OC4xMjA1IDM2Ljg2NTEgNTguNDM3IDM3LjMzOTNDNTguNzUzNCAzNy44MTM1IDU5LjIwMzMgMzguMTgzMSA1OS43Mjk4IDM4LjQwMTVDNjAuMjU2MyAzOC42MTk5IDYwLjgzNTcgMzguNjc3MiA2MS4zOTQ3IDM4LjU2NjJDNjEuOTUzOCAzOC40NTUyIDYyLjQ2NzQgMzguMTgwOCA2Mi44NzA1IDM3Ljc3NzlDNjMuMjczNyAzNy4zNzQ5IDYzLjU0ODQgMzYuODYxNCA2My42NTk4IDM2LjMwMjNDNjMuNzcxMiAzNS43NDMyIDYzLjcxNDQgMzUuMTYzNSA2My40OTY1IDM0LjYzNjdDNjMuMjc4NiAzNC4xMDk5IDYyLjkwOTQgMzMuNjU5NiA2Mi40MzU2IDMzLjM0MjdDNjEuOTYxOSAzMy4wMjU3IDYxLjQwNDggMzIuODU2NSA2MC44MzQ4IDMyLjg1NjJINjAuODMzN0M2MC4wNjk3IDMyLjg1NjYgNTkuMzM3MSAzMy4xNjAyIDU4Ljc5NjggMzMuNzAwNUM1OC4yNTY1IDM0LjI0MDggNTcuOTUyNiAzNC45NzM0IDU3Ljk1MTkgMzUuNzM3NlpNMzguMzEyNiA2OC4xMTQyQzM1Ljk3MTMgNjguMDA3NSAzNC42OTg3IDY3LjYxNzQgMzMuODUzIDY3LjI4NzhDMzIuNzMxOCA2Ni44NTEyIDMxLjkzMTkgNjYuMzMxMiAzMS4wOTA4IDY1LjQ5MUMzMC4yNDk3IDY0LjY1MDkgMjkuNzI5MSA2My44NTE0IDI5LjI5NDUgNjIuNzI5OUMyOC45NjQ4IDYxLjg4NDQgMjguNTc0OCA2MC42MTEgMjguNDY4NCA1OC4yNjkxQzI4LjM1MiA1NS43MzcgMjguMzI4NyA1NC45NzY0IDI4LjMyODcgNDguNTYxNkMyOC4zMjg3IDQyLjE0NjcgMjguMzUzOSA0MS4zODgyIDI4LjQ2ODQgMzguODU0MUMyOC41NzUgMzYuNTEyMSAyOC45Njc5IDM1LjI0MTMgMjkuMjk0NSAzNC4zOTMyQzI5LjczMSAzMy4yNzE3IDMwLjI1MDkgMzIuNDcxNSAzMS4wOTA4IDMxLjYzMDJDMzEuOTMwNyAzMC43ODg5IDMyLjcyOTkgMzAuMjY4MSAzMy44NTMgMjkuODMzNEMzNC42OTgzIDI5LjUwMzYgMzUuOTcxMyAyOS4xMTM1IDM4LjMxMjYgMjkuMDA3QzQwLjg0MzkgMjguODkwNiA0MS42MDQzIDI4Ljg2NzMgNDguMDE0NCAyOC44NjczQzU0LjQyNDUgMjguODY3MyA1NS4xODU3IDI4Ljg5MjUgNTcuNzE5MSAyOS4wMDdDNjAuMDYwNCAyOS4xMTM3IDYxLjMzMDkgMjkuNTA2NyA2Mi4xNzg3IDI5LjgzMzRDNjMuMjk5OSAzMC4yNjgxIDY0LjA5OTggMzAuNzkgNjQuOTQwOSAzMS42MzAyQzY1Ljc4MiAzMi40NzAzIDY2LjMwMDcgMzMuMjcxNyA2Ni43MzcyIDM0LjM5MzJDNjcuMDY2OSAzNS4yMzg4IDY3LjQ1NjggMzYuNTEyMSA2Ny41NjMzIDM4Ljg1NDFDNjcuNjc5NyA0MS4zODgyIDY3LjcwMjkgNDIuMTQ2NyA2Ny43MDI5IDQ4LjU2MTZDNjcuNzAyOSA1NC45NzY0IDY3LjY3OTcgNTUuNzM0OSA2Ny41NjMzIDU4LjI2OTFDNjcuNDU2NyA2MC42MTEgNjcuMDY0NyA2MS44ODQgNjYuNzM3MiA2Mi43Mjk5QzY2LjMwMDcgNjMuODUxNCA2NS43ODA4IDY0LjY1MTYgNjQuOTQwOSA2NS40OTFDNjQuMTAxIDY2LjMzMDQgNjMuMjk5OSA2Ni44NTEyIDYyLjE3ODcgNjcuMjg3OEM2MS4zMzM0IDY3LjYxNzYgNjAuMDYwNCA2OC4wMDc3IDU3LjcxOTEgNjguMTE0MkM1NS4xODc4IDY4LjIzMDYgNTQuNDI3NCA2OC4yNTM5IDQ4LjAxNDQgNjguMjUzOUM0MS42MDE0IDY4LjI1MzkgNDAuODQzMSA2OC4yMzA2IDM4LjMxMjYgNjguMTE0MlpNMzguMTEzNyAyNC42ODU1QzM1LjU1NzMgMjQuODAyIDMzLjgxMDQgMjUuMjA3NCAzMi4yODQ4IDI1LjgwMTNDMzAuNzA0OCAyNi40MTQ1IDI5LjM2NzMgMjcuMjM3MiAyOC4wMzA4IDI4LjU3MkMyNi42OTQyIDI5LjkwNjggMjUuODczOSAzMS4yNDY4IDI1LjI2MDkgMzIuODI3MkMyNC42NjcyIDM0LjM1NDIgMjQuMjYxOSAzNi4xMDA2IDI0LjE0NTQgMzguNjU3OUMyNC4wMjcxIDQxLjIxOTEgMjQgNDIuMDM3OSAyNCA0OC41NjE0QzI0IDU1LjA4NDggMjQuMDI3MSA1NS45MDM2IDI0LjE0NTQgNTguNDY0OUMyNC4yNjE5IDYxLjAyMjMgMjQuNjY3MiA2Mi43Njg2IDI1LjI2MDkgNjQuMjk1NUMyNS44NzM5IDY1Ljg3NSAyNi42OTQ0IDY3LjIxNjUgMjguMDMwOCA2OC41NTA4QzI5LjM2NzEgNjkuODg1IDMwLjcwNDggNzAuNzA2NSAzMi4yODQ4IDcxLjMyMTVDMzMuODEzMiA3MS45MTUzIDM1LjU1NzMgNzIuMzIwOCAzOC4xMTM3IDcyLjQzNzJDNDAuNjc1NiA3Mi41NTM3IDQxLjQ5MjkgNzIuNTgyNyA0OC4wMTQ0IDcyLjU4MjdDNTQuNTM1OSA3Mi41ODI3IDU1LjM1NDUgNzIuNTU1NiA1Ny45MTUxIDcyLjQzNzJDNjAuNDcxNyA3Mi4zMjA4IDYyLjIxNzUgNzEuOTE1MyA2My43NDQgNzEuMzIxNUM2NS4zMjMgNzAuNzA2NSA2Ni42NjE1IDY5Ljg4NTYgNjcuOTk4IDY4LjU1MDhDNjkuMzM0NiA2Ny4yMTYgNzAuMTUzMiA2NS44NzUgNzAuNzY4IDY0LjI5NTVDNzEuMzYxNiA2Mi43Njg2IDcxLjc2ODkgNjEuMDIyMSA3MS44ODM0IDU4LjQ2NDlDNzEuOTk5OCA1NS45MDE3IDcyLjAyNjkgNTUuMDg0OCA3Mi4wMjY5IDQ4LjU2MTRDNzIuMDI2OSA0Mi4wMzc5IDcxLjk5OTggNDEuMjE5MSA3MS44ODM0IDM4LjY1NzlDNzEuNzY2OSAzNi4xMDA1IDcxLjM2MTYgMzQuMzUzMiA3MC43NjggMzIuODI3MkM3MC4xNTMyIDMxLjI0NzggNjkuMzMyNSAyOS45MDg5IDY3Ljk5OCAyOC41NzJDNjYuNjYzNiAyNy4yMzUgNjUuMzIzIDI2LjQxNDUgNjMuNzQ1OSAyNS44MDEzQzYyLjIxNzUgMjUuMjA3NCA2MC40NzE1IDI0LjggNTcuOTE3IDI0LjY4NTVDNTUuMzU2NSAyNC41NjkxIDU0LjUzNzkgMjQuNTQgNDguMDE2MyAyNC41NEM0MS40OTQ4IDI0LjU0IDQwLjY3NTYgMjQuNTY3MSAzOC4xMTM3IDI0LjY4NTVaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi8weGtldlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1N1wiIGhlaWdodD1cIjU3XCIgdmlld0JveD1cIjAgMCA5NiA5NlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB3aWR0aD1cIjk2XCIgaGVpZ2h0PVwiOTZcIiByeD1cIjQ4XCIgZmlsbD1cIiM4NjZDMjBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzYuOTU1NCA2Ny40NTI4VjQxLjUyMDRIMjguMzQzNVY2Ny40NTI4SDM2Ljk1NjNIMzYuOTU1NFpNMzIuNjUxMyAzNy45ODA0QzM1LjY1MzggMzcuOTgwNCAzNy41MjMgMzUuOTg5MSAzNy41MjMgMzMuNTAwNUMzNy40NjY4IDMwLjk1NTMgMzUuNjUzOCAyOS4wMTk1IDMyLjcwODQgMjkuMDE5NUMyOS43NjEgMjkuMDE5NSAyNy44MzU5IDMwLjk1NTMgMjcuODM1OSAzMy41MDAzQzI3LjgzNTkgMzUuOTg4OSAyOS43MDQ1IDM3Ljk4MDIgMzIuNTk0OSAzNy45ODAySDMyLjY1MDZMMzIuNjUxMyAzNy45ODA0Wk00MS43MjIyIDY3LjQ1MjhINTAuMzMzNFY1Mi45NzI1QzUwLjMzMzQgNTIuMTk4NSA1MC4zODk2IDUxLjQyMjUgNTAuNjE3MSA1MC44Njk2QzUxLjIzOTQgNDkuMzIwNCA1Mi42NTYzIDQ3LjcxNjggNTUuMDM1OSA0Ny43MTY4QzU4LjE1MTIgNDcuNzE2OCA1OS4zOTgyIDUwLjA5NDcgNTkuMzk4MiA1My41ODEyVjY3LjQ1MjhINjguMDA5MlY1Mi41ODM5QzY4LjAwOTIgNDQuNjE5IDYzLjc2MTMgNDAuOTEyNCA1OC4wOTU1IDQwLjkxMjRDNTMuNDUwMyA0MC45MTI0IDUxLjQxMDIgNDMuNTExIDUwLjI3NjcgNDUuMjgwOUg1MC4zMzQxVjQxLjUyMTNINDEuNzIyNkM0MS44MzUxIDQzLjk1NDEgNDEuNzIyIDY3LjQ1MzcgNDEuNzIyIDY3LjQ1MzdMNDEuNzIyMiA2Ny40NTI4WlwiIGZpbGw9XCJ3aGl0ZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMHhrZXYyMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI1N1wiIGhlaWdodD1cIjU3XCIgdmlld0JveD1cIjAgMCA1NyA1N1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVwiMC45MjU3ODFcIiB5PVwiMC4wNDI5Njg4XCIgd2lkdGg9XCI1NlwiIGhlaWdodD1cIjU2XCIgcng9XCIyOFwiIGZpbGw9XCIjODY2QzIwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjguODk1OCAxMi44ODY3QzIwLjE5OTcgMTIuODg2NyAxMy4xNTYyIDE5LjkwMjIgMTMuMTU2MiAyOC41NjM3QzEzLjE1NjIgMzUuNTAwNyAxNy42NjE3IDQxLjM2IDIzLjkxODIgNDMuNDM3MkMyNC43MDUyIDQzLjU3NDQgMjUuMDAwMyA0My4xMDQxIDI1LjAwMDMgNDIuNjkyNkMyNS4wMDAzIDQyLjMyMDIgMjQuOTgwNiA0MS4wODU3IDI0Ljk4MDYgMzkuNzcyN0MyMS4wMjYgNDAuNDk3OCAyMC4wMDMgMzguODEyNSAxOS42ODgyIDM3LjkzMDdDMTkuNTExMSAzNy40OCAxOC43NDM4IDM2LjA4ODYgMTguMDc0OSAzNS43MTYzQzE3LjUyNCAzNS40MjI0IDE2LjczNyAzNC42OTczIDE4LjA1NTIgMzQuNjc3N0MxOS4yOTQ3IDM0LjY1ODEgMjAuMTggMzUuODE0MyAyMC40NzUxIDM2LjI4NDZDMjEuODkxNyAzOC42NTU3IDI0LjE1NDMgMzcuOTg5NSAyNS4wNTkzIDM3LjU3NzlDMjUuMTk3IDM2LjU1ODkgMjUuNjEwMiAzNS44NzMxIDI2LjA2MjcgMzUuNDgxMUMyMi41NjA2IDM1LjA4OTIgMTguOTAxMiAzMy43MzcxIDE4LjkwMTIgMjcuNzQwNkMxOC45MDEyIDI2LjAzNTggMTkuNTExMSAyNC42MjQ4IDIwLjUxNDUgMjMuNTI3NUMyMC4zNTcxIDIzLjEzNTUgMTkuODA2MiAyMS41Mjg2IDIwLjY3MTkgMTkuMzczMUMyMC42NzE5IDE5LjM3MzEgMjEuOTkwMSAxOC45NjE1IDI1LjAwMDMgMjAuOThDMjYuMjU5NCAyMC42MjcyIDI3LjU5NzMgMjAuNDUwOSAyOC45MzUyIDIwLjQ1MDlDMzAuMjczIDIwLjQ1MDkgMzEuNjEwOSAyMC42MjcyIDMyLjg3MDEgMjAuOThDMzUuODgwMyAxOC45NDE5IDM3LjE5ODQgMTkuMzczMSAzNy4xOTg0IDE5LjM3MzFDMzguMDY0MSAyMS41Mjg2IDM3LjUxMzIgMjMuMTM1NSAzNy4zNTU4IDIzLjUyNzVDMzguMzU5MiAyNC42MjQ4IDM4Ljk2OTEgMjYuMDE2MiAzOC45NjkxIDI3Ljc0MDZDMzguOTY5MSAzMy43NTY3IDM1LjI5IDM1LjA4OTIgMzEuNzg4IDM1LjQ4MTFDMzIuMzU4NSAzNS45NzExIDMyLjg1MDQgMzYuOTExNyAzMi44NTA0IDM4LjM4MTRDMzIuODUwNCA0MC40NzgyIDMyLjgzMDcgNDIuMTYzNSAzMi44MzA3IDQyLjY5MjZDMzIuODMwNyA0My4xMDQxIDMzLjEyNTggNDMuNTk0IDMzLjkxMjggNDMuNDM3MkM0MC4xMjk5IDQxLjM2IDQ0LjYzNTQgMzUuNDgxMSA0NC42MzU0IDI4LjU2MzdDNDQuNjM1NCAxOS45MDIyIDM3LjU5MTkgMTIuODg2NyAyOC44OTU4IDEyLjg4NjdaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YSBjbGFzcz1cImNyZWRpdHNMaW5rIGxpbmtcIiBocmVmPVwiLi9jcmVkaXRzL2luZGV4Lmh0bWxcIj5DcmVkaXRzICYgVGhhbmtzIFRvOjwvYT5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIHJldHVybiBjcmVkaXRzU2VjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IHtnZXRIb21lUGFnZSwgZ2V0Q3JlZGl0c1NlY3Rpb259OyIsImltcG9ydCBjYXByZXNlQ3Jvc3RpbmkgZnJvbSAnLi9pbWFnZXMvY2FwcmVzZS1jcm9zdGluaS53ZWJwJztcclxuaW1wb3J0IHRydWZmbGVQYXJtZXNhbkZyaWVzIGZyb20gJy4vaW1hZ2VzL3RydWZmbGUtcGFybWVzYW4tZnJpZXMud2VicCc7XHJcbmltcG9ydCBtYW5nb0F2b2NhZG9TYWxhZCBmcm9tICcuL2ltYWdlcy9tYW5nby1hdm9jYWRvLXNhbGFkLndlYnAnO1xyXG5pbXBvcnQgcXVpbm9hR3JlZWtTYWxhZCBmcm9tICcuL2ltYWdlcy9xdWlub2EtZ3JlZWstc2FsYWQud2VicCc7XHJcbmltcG9ydCBnb3VybWV0QnVyZ2VyIGZyb20gJy4vaW1hZ2VzL2dvdXJtZXQtYnVyZ2VyLndlYnAnO1xyXG5pbXBvcnQgbGVtb25IZXJiR3JpbGxlZENoaWNrZW4gZnJvbSAnLi9pbWFnZXMvbGVtb24taGVyYi1ncmlsbGVkLWNoaWNrZW4ud2VicCc7XHJcbmltcG9ydCBwZXN0b1NocmltcExpbmd1aW5lIGZyb20gJy4vaW1hZ2VzL3Blc3RvLXNocmltcC1saW5ndWluZS53ZWJwJztcclxuaW1wb3J0IGRhcmtDaG9jb2xhdGVSYXNwYmVycnlUYXJ0IGZyb20gJy4vaW1hZ2VzL2RhcmstY2hvY29sYXRlLXJhc3BiZXJyeS10YXJ0LndlYnAnO1xyXG5pbXBvcnQgdGlyYW1pc3VEZWxpZ2h0IGZyb20gJy4vaW1hZ2VzL3RpcmFtaXN1LWRlbGlnaHQud2VicCc7XHJcbmltcG9ydCBnZXRGb290ZXIgZnJvbSAnLi9mb290ZXIuanMnO1xyXG5cclxuY29uc3QgbWVudSA9IHtcclxuICAgIGFwcGV0aXplcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ2FwcmVzZSBDcm9zdGluaVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTbGljZWQgY2hlcnJ5IHRvbWF0b2VzLCBmcmVzaCBtb3p6YXJlbGxhLCBhbmQgYmFzaWwgZHJpenpsZWQgd2l0aCBiYWxzYW1pYyBnbGF6ZSwgc2VydmVkIG9uIGNyaXNweSBiYWd1ZXR0ZSBzbGljZXMuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiA5Ljk5LFxyXG4gICAgICAgICAgICBpbWFnZTogY2FwcmVzZUNyb3N0aW5pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlRydWZmbGUgUGFybWVzYW4gRnJpZXNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3Jpc3B5IHNob2VzdHJpbmcgZnJpZXMgdG9zc2VkIHdpdGggdHJ1ZmZsZSBvaWwgYW5kIGdyYXRlZCBQYXJtZXNhbiwgc2VydmVkIHdpdGggYSBzaWRlIG9mIGdhcmxpYyBhaW9saS5cIixcclxuICAgICAgICAgICAgcHJpY2U6IDguOTksXHJcbiAgICAgICAgICAgIGltYWdlOiB0cnVmZmxlUGFybWVzYW5GcmllcyxcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgc2FsYWRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIk1hbmdvIEF2b2NhZG8gU2FsYWRcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTWl4ZWQgZ3JlZW5zLCByaXBlIG1hbmdvIHNsaWNlcywgYXZvY2FkbywgcmVkIG9uaW9uLCBhbmQgZmV0YSBjaGVlc2UsIGRyZXNzZWQgd2l0aCBhIGhvbmV5IGxpbWUgdmluYWlncmV0dGUuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAxMS45OSxcclxuICAgICAgICAgICAgaW1hZ2U6IG1hbmdvQXZvY2Fkb1NhbGFkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlF1aW5vYSBHcmVlayBTYWxhZFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJRdWlub2EsIGNoZXJyeSB0b21hdG9lcywgY3VjdW1iZXIsIEthbGFtYXRhIG9saXZlcywgYW5kIGZldGEgY2hlZXNlLCB0b3NzZWQgaW4gYSBsZW1vbiBoZXJiIGRyZXNzaW5nLlwiLFxyXG4gICAgICAgICAgICBwcmljZTogMTAuOTksXHJcbiAgICAgICAgICAgIGltYWdlOiBxdWlub2FHcmVla1NhbGFkLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgbWFpbkNvdXJzZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiR291cm1ldCBCdXJnZXJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSnVpY3kgQW5ndXMgYmVlZiBwYXR0eSB0b3BwZWQgd2l0aCBjYXJhbWVsaXplZCBvbmlvbnMsIFN3aXNzIGNoZWVzZSwgYXJ1Z3VsYSwgYW5kIHRydWZmbGUgYWlvbGkgb24gYSBicmlvY2hlIGJ1bi4gU2VydmVkIHdpdGggdHJ1ZmZsZSBQYXJtZXNhbiBmcmllcy5cIixcclxuICAgICAgICAgICAgcHJpY2U6IDE1Ljk5LFxyXG4gICAgICAgICAgICBpbWFnZTogZ291cm1ldEJ1cmdlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJMZW1vbiBIZXJiIEdyaWxsZWQgQ2hpY2tlblwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUZW5kZXIgY2hpY2tlbiBicmVhc3QgbWFyaW5hdGVkIGluIGxlbW9uIGFuZCBoZXJicywgZ3JpbGxlZCB0byBwZXJmZWN0aW9uLCBhbmQgc2VydmVkIHdpdGggZ2FybGljIG1hc2hlZCBwb3RhdG9lcyBhbmQgc2F1dMOpZWQgZ3JlZW4gYmVhbnMuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAxNi45OSxcclxuICAgICAgICAgICAgaW1hZ2U6IGxlbW9uSGVyYkdyaWxsZWRDaGlja2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcIlBlc3RvIFNocmltcCBMaW5ndWluZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdWNjdWxlbnQgc2hyaW1wIHRvc3NlZCBpbiBiYXNpbCBwZXN0byB3aXRoIGNoZXJyeSB0b21hdG9lcywgcGluZSBudXRzLCBhbmQgUGFybWVzYW4gY2hlZXNlIG92ZXIgYSBiZWQgb2YgbGluZ3VpbmUuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAxOC45OSxcclxuICAgICAgICAgICAgaW1hZ2U6IHBlc3RvU2hyaW1wTGluZ3VpbmUsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBkZXNzZXJ0czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJEYXJrIENob2NvbGF0ZSBSYXNwYmVycnkgVGFydFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSaWNoIGRhcmsgY2hvY29sYXRlIGdhbmFjaGUgb24gYSBidXR0ZXJ5IHRhcnQgY3J1c3QsIHRvcHBlZCB3aXRoIGZyZXNoIHJhc3BiZXJyaWVzIGFuZCBhIHJhc3BiZXJyeSBjb3VsaXMuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiA4Ljk5LFxyXG4gICAgICAgICAgICBpbWFnZTogZGFya0Nob2NvbGF0ZVJhc3BiZXJyeVRhcnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiVGlyYW1pc3UgRGVsaWdodFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMYXllcnMgb2YgZXNwcmVzc28tc29ha2VkIGxhZHlmaW5nZXJzIGFuZCBtYXNjYXJwb25lIGNyZWFtLCBkdXN0ZWQgd2l0aCBjb2NvYSBwb3dkZXIgYW5kIHNlcnZlZCB3aXRoIGEgZHJpenpsZSBvZiBjaG9jb2xhdGUgc2F1Y2UuXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiA3Ljk5LFxyXG4gICAgICAgICAgICBpbWFnZTogdGlyYW1pc3VEZWxpZ2h0LFxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGl0ZW0pIHtcclxuICAgIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZENvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IG9yYW5nZVJlY3RhbmdsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3JhbmdlUmVjdGFuZ2xlLmNsYXNzTGlzdC5hZGQoJ29yYW5nZVJlY3RhbmdsZScpO1xyXG4gICAgY29uc3QgeWVsbG93UmVjdGFuZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB5ZWxsb3dSZWN0YW5nbGUuY2xhc3NMaXN0LmFkZCgneWVsbG93UmVjdGFuZ2xlJyk7XHJcblxyXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSAnJCcgKyBpdGVtLnByaWNlO1xyXG4gICAgaXRlbVByaWNlLmNsYXNzTmFtZSA9ICdpdGVtUHJpY2UnO1xyXG4gICAgY29uc3QgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpdGVtSW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBpdGVtLm5hbWUpO1xyXG4gICAgaXRlbUltYWdlLnNyYyA9IGl0ZW0uaW1hZ2U7XHJcblxyXG4gICAgeWVsbG93UmVjdGFuZ2xlLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XHJcbiAgICB5ZWxsb3dSZWN0YW5nbGUuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuXHJcbiAgICBvcmFuZ2VSZWN0YW5nbGUuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcclxuXHJcbiAgICBjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoeWVsbG93UmVjdGFuZ2xlKTtcclxuICAgIGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQob3JhbmdlUmVjdGFuZ2xlKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGNhcmRDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1lbnVQYWdlICgpIHtcclxuICAgIGNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51UGFnZS5jbGFzc0xpc3QuYWRkKCdtZW51UGFnZScpO1xyXG5cclxuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFwcGV0aXplcnMuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpO1xyXG5cclxuICAgIG1lbnUuYXBwZXRpemVycy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVDYXJkKGl0ZW0pO1xyXG4gICAgICAgIGFwcGV0aXplcnMuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2FsYWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzYWxhZHMuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpO1xyXG5cclxuICAgIG1lbnUuc2FsYWRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVDYXJkKGl0ZW0pO1xyXG4gICAgICAgIHNhbGFkcy5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtYWluQ291cnNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkNvdXJzZXMuY2xhc3NMaXN0LmFkZCgnbWVudUNvbnRhaW5lcicpO1xyXG5cclxuICAgIG1lbnUubWFpbkNvdXJzZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZUNhcmQoaXRlbSk7XHJcbiAgICAgICAgbWFpbkNvdXJzZXMuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVzc2VydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc3NlcnRzLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKTtcclxuXHJcbiAgICBtZW51LmRlc3NlcnRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBjcmVhdGVDYXJkKGl0ZW0pO1xyXG4gICAgICAgIGRlc3NlcnRzLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnVQYWdlLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDI+RXhwbG9yZSBvdXIgTWVudTwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3JpZXNcIj5cclxuICAgICAgICAgICAgPGgzPkFwcGV0aXplcnM8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwZXRpemVyIG1lbnVDb250YWluZXJcIj4ke2FwcGV0aXplcnMuaW5uZXJIVE1MfTwvZGl2PlxyXG4gICAgICAgICAgICA8aDM+U2FsYWRzPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcGV0aXplciBtZW51Q29udGFpbmVyXCI+JHtzYWxhZHMuaW5uZXJIVE1MfTwvZGl2PlxyXG4gICAgICAgICAgICA8aDM+TWFpbiBDb3Vyc2VzPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFwcGV0aXplciBtZW51Q29udGFpbmVyXCI+JHttYWluQ291cnNlcy5pbm5lckhUTUx9PC9kaXY+XHJcbiAgICAgICAgICAgIDxoMz5EZXNzZXJ0czwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhcHBldGl6ZXIgbWVudUNvbnRhaW5lclwiPiR7ZGVzc2VydHMuaW5uZXJIVE1MfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChnZXRGb290ZXIoKSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVQYWdlO1xyXG59IiwiaW1wb3J0IGdldEZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSZXNlcnZlUGFnZSgpIHtcclxuICAgIGNvbnN0IHJlc2VydmVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXNlcnZlUGFnZS5jbGFzc0xpc3QuYWRkKCdyZXNlcnZlUGFnZScpO1xyXG4gICAgcmVzZXJ2ZVBhZ2UuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMj5SZXNlcnZhdGlvbnM8L2gyPlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlBPU1RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9wZW5pbmdIb3Vyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGg2Pk9wZW5pbmcgSG91cnM8L2g2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgTW9uZGF5IC0gRnJpZGF5OiAxMDowMCBBTSAtIDEwOjAwIFBNPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIFNhdHVyZGF5IC0gU3VuZGF5OiAxOjAwIFBNIC0gMTA6MDAgUE1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dHNDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJudW1iZXJPZlBlb3BsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJudW1iZXJPZlBlb3BsZVwiPk51bWJlciBvZiBQZW9wbGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwibnVtYmVyT2ZQZW9wbGVcIiBuYW1lPVwibnVtYmVyLW9mLXBlb3BsZVwiIHBsYWNlaG9sZGVyPVwiMVwiIG1pbj1cIjFcIiBtYXg9XCI0MFwiIHZhbHVlPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJcIiBtaW49XCIke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aW1lXCI+VGltZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGlkPVwidGltZVwiIG5hbWU9XCJ0aW1lXCIgcGxhY2Vob2xkZXI9XCJUaW1lXCIgbWluPVwiMTA6MDA6MDBcIiBtYXg9XCIyMjowMDowMFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInByaW1hcnlcIj5SZXNlcnZlIE5vdzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIGA7XHJcblxyXG4gICAgcmVzZXJ2ZVBhZ2UuYXBwZW5kQ2hpbGQoZ2V0Rm9vdGVyKCkpO1xyXG5cclxuICAgIHJldHVybiByZXNlcnZlUGFnZTtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHtnZXRIb21lUGFnZSwgZ2V0Q3JlZGl0c1NlY3Rpb259IGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCBnZXRNZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xyXG5pbXBvcnQgZ2V0QWJvdXRQYWdlIGZyb20gJy4vYWJvdXQuanMnO1xyXG5pbXBvcnQge2dldENvbnRhY3RQYWdlLCBhZGRTY3JvbGxBbmltYXRpb259IGZyb20gJy4vY29udGFjdC5qcyc7XHJcbmltcG9ydCBnZXRSZXNlcnZlUGFnZSBmcm9tICcuL3Jlc2VydmUuanMnO1xyXG5cclxuaW1wb3J0IGd1c3RvQml0ZXNCbGFjayBmcm9tICcuL2ltYWdlcy9ndXN0by1iaXRlcy1sb2dvKGJsYWNrKS5wbmcnO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItbWVudScpO1xyXG5cclxubGV0IGlzTG9nb0FkZGVkID0gZmFsc2U7XHJcbmRpc3BsYXlIb21lUGFnZSgpO1xyXG5kb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICdob21lQWN0aXZlJztcclxuXHJcbi8vIGNoYW5nZSBwYWdlcyBkeW5hbWljYWxseSB3aGVuIGJ1dHRvbnMnIGNsaWNrXHJcbm5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZU9uQ2xpY2soZSk7XHJcbn0pO1xyXG5cclxuLy8gbmF2aWdhdGUgb24gY2xpY2tcclxuZnVuY3Rpb24gbmF2aWdhdGVPbkNsaWNrKGUpIHtcclxuICAgIHN3aXRjaCAoZS50YXJnZXQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBjYXNlICdIb21lJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hPbWUgaXMgY2xpY2tlZCcpO1xyXG4gICAgICAgICAgICBkaXNwbGF5SG9tZVBhZ2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ01lbnUnOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWVudSBpcyBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlNZW51UGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlICdBYm91dCc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhYm91dCBpcyBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlBYm91dFBhZ2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0NvbnRhY3QnOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29udGFjdCBpcyBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250YWN0UGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnUmVzZXJ2YXRpb25zJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc2VydmF0aW9ucyBpcyBjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlSZXNlcnZlUGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLy8gSG9tZSBQYWdlXHJcbmZ1bmN0aW9uIGRpc3BsYXlIb21lUGFnZSgpIHtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICdob21lQWN0aXZlJztcclxuXHJcbiAgICBpZighaXNMb2dvQWRkZWQpIHtcclxuICAgICAgICBjb25zdCBsb2dvQmxhY2sgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBsb2dvQmxhY2suc3JjID0gZ3VzdG9CaXRlc0JsYWNrO1xyXG4gICAgICAgIGxvZ29CbGFjay5hbHQgPSBcIkd1c3RvIEJpdGVzIExvZ29cIjtcclxuICAgICAgICBsb2dvQmxhY2suY2xhc3NOYW1lID0gJ2xvZ29CbGFjayc7XHJcbiAgICAgICAgaGVhZGVyLmluc2VydEJlZm9yZShsb2dvQmxhY2ssIGhlYWRlci5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgaXNMb2dvQWRkZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDbGVhciBjb250ZW50IGRpdlxyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldEhvbWVQYWdlKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZXRDcmVkaXRzU2VjdGlvbigpKTtcclxuXHJcbiAgICBjb25zdCBzaXRlbWFwID0gY29udGVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZW1hcCcpO1xyXG4gICAgc2l0ZW1hcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdGVPbkNsaWNrKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZXhwbG9yZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBsb3JlTm93Jyk7XHJcbiAgICBleHBsb3JlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheU1lbnVQYWdlKCkpO1xyXG5cclxuICAgIGNvbnN0IHJlc2VydmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2ZU5vdycpO1xyXG4gICAgcmVzZXJ2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BsYXlSZXNlcnZlUGFnZSgpKTtcclxuXHJcbiAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xyXG4gICAgY2xvc2VCdXJnZXJNZW51KCk7XHJcbn1cclxuXHJcbi8vIE1lbnUgUGFnZVxyXG5mdW5jdGlvbiBkaXNwbGF5TWVudVBhZ2UoKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAnbWVudUFjdGl2ZSc7XHJcbiAgICBcclxuICAgIC8vIGNsZWFyIGNvbnRlbnQgZGl2XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNoZWNrSGVhZGVyTG9nbygpO1xyXG5cclxuICAgIC8vIGFwcGVuZCBNZW51IFBhZ2VcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2V0TWVudVBhZ2UoKSk7XHJcbiAgICBcclxuICAgIC8vIER5bmFtaWMgQ2FyZHNcclxuICAgIGNvbnN0IGNhcmRDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRDb250YWluZXInKTtcclxuICAgIGNhcmRDb250YWluZXJzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjYXJkQ29udGFpbmVycy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoaXRlbSAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcclxuICAgIGNsb3NlQnVyZ2VyTWVudSgpO1xyXG59XHJcblxyXG4vLyBBYm91dCBQYWdlXHJcbmZ1bmN0aW9uIGRpc3BsYXlBYm91dFBhZ2UgKCkge1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICdhYm91dEFjdGl2ZSc7XHJcblxyXG4gICAgY2hlY2tIZWFkZXJMb2dvKCk7XHJcbiAgICBcclxuICAgIC8vIGNsZWFyIGNvbnRlbnQgZGl2XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZXRBYm91dFBhZ2UoKSk7XHJcblxyXG4gICAgd2luZG93LnNjcm9sbCgwLCAwKTtcclxuICAgIGNsb3NlQnVyZ2VyTWVudSgpO1xyXG59XHJcblxyXG4vLyBDb250YWN0IFBhZ2VcclxuZnVuY3Rpb24gZGlzcGxheUNvbnRhY3RQYWdlKCkge1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gJ2NvbnRhY3RBY3RpdmUnO1xyXG5cclxuICAgIGNoZWNrSGVhZGVyTG9nbygpO1xyXG5cclxuICAgIC8vIGNsZWFyIGNvbnRlbnQgZGl2XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZXRDb250YWN0UGFnZSgpKTtcclxuICAgIGFkZFNjcm9sbEFuaW1hdGlvbigpO1xyXG5cclxuICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XHJcbiAgICBjbG9zZUJ1cmdlck1lbnUoKTtcclxuXHJcbiAgICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xyXG4gICAgY2xvc2VCdXJnZXJNZW51KCk7XHJcbn1cclxuXHJcbi8vIFJlc2VydmUgUGFnZVxyXG5mdW5jdGlvbiBkaXNwbGF5UmVzZXJ2ZVBhZ2UoKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSAncmVzZXJ2ZUFjdGl2ZSc7XHJcblxyXG4gICAgY2hlY2tIZWFkZXJMb2dvKCk7XHJcblxyXG4gICAgLy8gY2xlYXIgY29udGVudCBkaXZcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldFJlc2VydmVQYWdlKCkpO1xyXG5cclxuICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XHJcbiAgICBjbG9zZUJ1cmdlck1lbnUoKTtcclxufVxyXG5cclxuLy8gRHluYW1pYyBuYXYgYmFyXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICBpZihuYXYub2Zmc2V0VG9wIC0gd2luZG93LnNjcm9sbFkgKyBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgMCkge1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxufSk7XHJcblxyXG4vLyBNb2JpbGUgbmF2aWdhdGlvbiBiYXIgXHJcbmJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbn0pXHJcblxyXG4vLyByZW1vdmUgb3BlbiBuYXZcclxuZnVuY3Rpb24gY2xvc2VCdXJnZXJNZW51KCkge1xyXG4gICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG59XHJcblxyXG4vLyBDaGVjayBIZWFkZXIgTG9nb1xyXG5mdW5jdGlvbiBjaGVja0hlYWRlckxvZ28oKSB7XHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nb0JsYWNrJykpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nb0JsYWNrJykucmVtb3ZlKCk7XHJcbiAgICAgICAgaXNMb2dvQWRkZWQgPSBmYWxzZTtcclxuICAgIH1cclxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
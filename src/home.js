import culinaryExcellence from './images/culinary-excellence.webp';
import capreseCrostini from './images/caprese-crostini.webp';
import pestoShrimpLinguine from './images/pesto-shrimp-linguine.webp';
import tiramisuDelight from './images/tiramisu-delight.webp';
import burgerHome from './images/burger-home.webp';
import gustoBitesTransparent from './images/gusto-bites-logo(transparent).png';
import getFooter from './footer.js';

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
        <img src="${culinaryExcellence}" alt= "Culinary Excellence">
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
                <img src="${capreseCrostini}" alt="Caprese Crostini">
                <img src="${pestoShrimpLinguine}" alt="Pesto Shrimp Linguine">
                <img src="${tiramisuDelight}" alt="Tiramisu Delight">
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
        <img src="${burgerHome}" alt="A nice Hamburger Picture">
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
    homePage.appendChild(getFooter());
    return homePage;
}

function getCreditsSection() {
    const creditsSection = document.createElement('section');
    creditsSection.classList.add('credits');
    creditsSection.innerHTML = `
    <img src="${gustoBitesTransparent}" alt="Gusto Bites Logo">
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

export {getHomePage, getCreditsSection};
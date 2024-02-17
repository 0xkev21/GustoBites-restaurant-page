import logoBackground from './images/dish-story.webp';
import gustoBitesBlack from './images/gusto-bites-logo-big.png';
import storyBeginning from './images/story-beginning.webp';
import culinaryJourney from './images/story-culinary-journey.webp';
import hospitalityPassion from './images/hospitality-passion.webp';
import craftingMemories from './images/crafting-memories.webp';
import chefPortrait from './images/chef-portrait.webp';
import svgWave from './images/wave.svg';

import getFooter from './footer.js';

const ourStory = document.createElement('div');
ourStory.setAttribute('id', 'ourStory');
ourStory.innerHTML = `
    <section class="storyWelcome">
    <div class="storyWelcomeAssets">
        <img src="${logoBackground}" alt="dishes background for logo">
        <img src="${gustoBitesBlack}" alt="Gusto Bites Logo" class="gustoBitesLogoBlack">
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
    <img src="${storyBeginning}" alt="Story Beginning Image">
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
    <img src="${culinaryJourney}" alt="Story Culinary Journey Image">
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
    <img src="${hospitalityPassion}" alt="Story Hospitality Image">
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
    <img src="${craftingMemories}" alt="Crafting Memories Image">
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
        <div class="chefPortraitContainer">
            <img src="${chefPortrait}" alt="Chef Portrait Photo">
            <div class="yellowRectangle"></div>
            <div class="orangeRectangle"></div>
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

export default function getAboutPage() {
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('aboutPage');
    const waveSVG = new Image();
    waveSVG.src = svgWave;
    waveSVG.setAttribute('alt', "An SVG Wave Decoration");
    waveSVG.setAttribute('aria-hidden', true);
    waveSVG.className = "svgWave";

    aboutPage.appendChild(ourStory);
    aboutPage.appendChild(waveSVG);
    aboutPage.appendChild(chefProfile);
    aboutPage.appendChild(getFooter());

    return aboutPage;
}
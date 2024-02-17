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

const menu = {
    appetizers: [
        {
            name: "Caprese Crostini",
            description: "Sliced cherry tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze, served on crispy baguette slices.",
            price: 9.99,
            image: capreseCrostini,
        },
        {
            name: "Truffle Parmesan Fries",
            description: "Crispy shoestring fries tossed with truffle oil and grated Parmesan, served with a side of garlic aioli.",
            price: 8.99,
            image: truffleParmesanFries,
        }
    ],
    salads: [
        {
            name: "Mango Avocado Salad",
            description: "Mixed greens, ripe mango slices, avocado, red onion, and feta cheese, dressed with a honey lime vinaigrette.",
            price: 11.99,
            image: mangoAvocadoSalad,
        },
        {
            name: "Quinoa Greek Salad",
            description: "Quinoa, cherry tomatoes, cucumber, Kalamata olives, and feta cheese, tossed in a lemon herb dressing.",
            price: 10.99,
            image: quinoaGreekSalad,
        },
    ],
    mainCourses: [
        {
            name: "Gourmet Burger",
            description: "Juicy Angus beef patty topped with caramelized onions, Swiss cheese, arugula, and truffle aioli on a brioche bun. Served with truffle Parmesan fries.",
            price: 15.99,
            image: gourmetBurger,
        },
        {
            name: "Lemon Herb Grilled Chicken",
            description: "Tender chicken breast marinated in lemon and herbs, grilled to perfection, and served with garlic mashed potatoes and sautéed green beans.",
            price: 16.99,
            image: lemonHerbGrilledChicken,
        },
        {
            name: "Pesto Shrimp Linguine",
            description: "Succulent shrimp tossed in basil pesto with cherry tomatoes, pine nuts, and Parmesan cheese over a bed of linguine.",
            price: 18.99,
            image: pestoShrimpLinguine,
        },
    ],
    desserts: [
        {
            name: "Dark Chocolate Raspberry Tart",
            description: "Rich dark chocolate ganache on a buttery tart crust, topped with fresh raspberries and a raspberry coulis.",
            price: 8.99,
            image: darkChocolateRaspberryTart,
        },
        {
            name: "Tiramisu Delight",
            description: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder and served with a drizzle of chocolate sauce.",
            price: 7.99,
            image: tiramisuDelight,
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

export default function getMenuPage () {
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

    menuPage.appendChild(getFooter());

    return menuPage;
}
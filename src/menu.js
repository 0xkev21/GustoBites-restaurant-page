import capreseCrostini from './images/caprese-crostini.webp';
import pestoShrimpLinguine from './images/pesto-shrimp-linguine.webp';
import tiramisuDelight from './images/tiramisu-delight.webp';

const menu = {
    appetizers: [
        {
            name: "Caprese Crostini",
            description: "Sliced cherry tomatoes, fresh mozzarella, and basil drizzled with balsamic glaze, served on crispy baguette slices.",
            price: 9.99,
        },
        {
            name: "Truffle Parmesan Fries",
            description: "Crispy shoestring fries tossed with truffle oil and grated Parmesan, served with a side of garlic aioli.",
            price: 8.99,
        }
    ],
    salads: [
        {
            name: "Mango Avocado Salad",
            description: "Mixed greens, ripe mango slices, avocado, red onion, and feta cheese, dressed with a honey lime vinaigrette.",
            category: "Salads",
            price: 11.99,
        },
        {
            name: "Quinoa Greek Salad",
            description: "Quinoa, cherry tomatoes, cucumber, Kalamata olives, and feta cheese, tossed in a lemon herb dressing.",
            category: "Salads",
            price: 10.99,
        },
    ],
    mainCourses: [
        {
            name: "Gourmet Burger",
            description: "Juicy Angus beef patty topped with caramelized onions, Swiss cheese, arugula, and truffle aioli on a brioche bun. Served with truffle Parmesan fries.",
            category: "Main Courses",
            price: 15.99,
        },
        {
            name: "Lemon Herb Grilled Chicken",
            description: "Tender chicken breast marinated in lemon and herbs, grilled to perfection, and served with garlic mashed potatoes and sautéed green beans.",
            category: "Main Courses",
            price: 16.99,
        },
        {
            name: "Pesto Shrimp Linguine",
            description: "Succulent shrimp tossed in basil pesto with cherry tomatoes, pine nuts, and Parmesan cheese over a bed of linguine.",
            category: "Main Courses",
            price: 18.99,
        },
    ],
    desserts: [
        {
            name: "Dark Chocolate Raspberry Tart",
            description: "Rich dark chocolate ganache on a buttery tart crust, topped with fresh raspberries and a raspberry coulis.",
            price: 8.99,
        },
        {
            name: "Tiramisu Delight",
            description: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder and served with a drizzle of chocolate sauce.",
            price: 7.99,
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
    itemPrice.textContent = item.price;

    yellowRectangle.appendChild(itemDescription);
    yellowRectangle.appendChild(itemPrice);

    cardContainer.appendChild(itemName);
    cardContainer.appendChild(yellowRectangle);
    cardContainer.appendChild(orangeRectangle);
}

function getMenu () {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');
}
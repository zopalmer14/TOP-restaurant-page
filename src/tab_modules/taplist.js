

// import in cocktail images
import ManhattanCocktail from './media/drinks/manhattan_cocktail.jpg';
import EspressoMartini from './media/drinks/espresso_martini.jpg';
import MoscowMule from './media/drinks/moscow_mule.jpg';
import AperolSpritz from './media/drinks/aperol_spritz.jpg';

// food data
const drinkImages = [ManhattanCocktail, EspressoMartini, MoscowMule, AperolSpritz];
const drinkHeaders = ['Manhattan', 'Espresso Martini', 'Moscow Mule', 'Aperol Spritz'];
const drinkDesc = [
    'Classic cocktail made with bourbon, sweet vermouth, and aromatic bitters',
    'Espresso, vanilla vodka, and coffee liqueur',
    'Zesty cocktail with vodka, ginger beer, and a squeeze of lime in a copper mug',
    'Aperol, prosecco, soda, garnished with a slice of orange'
];

function loadTapList() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to contain the menu items in a grid format / structure
    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-info');

    for (let i = 0; i < drinkImages.length; i++) {
        // create a div to represent each individual menu item
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        // create a container for the image and append the image to it
        const img_container = document.createElement('div');
        img_container.classList.add('img-container');

        const item_img = new Image();
        item_img.src = drinkImages[i];

        if (i == 0) {
            item_img.id = 'moscow-mule';
        }

        if (i == 1) {
            item_img.id = 'espresso-martini';
        }

        img_container.appendChild(item_img);

        // create a container for the item - contains the item name / title and a desc
        const item_container = document.createElement('div');
        item_container.classList.add('item-container');

        const item_title = document.createElement('h2');
        item_title.textContent = drinkHeaders[i];

        const item_desc = document.createElement('div');
        item_desc.classList.add('item-desc');
        item_desc.textContent = drinkDesc[i];

        item_container.appendChild(item_title);
        item_container.appendChild(item_desc);

        // append the image container and item container to the menu_item
        menu_item.appendChild(img_container);
        menu_item.appendChild(item_container);

        // append the menu_item to the container
        menu_container.appendChild(menu_item);
    }

    page_content.replaceChildren(menu_container);
}

export { loadTapList };
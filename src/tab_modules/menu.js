
// import in food images
import Brisket from './media/food/brisket.jpg';
import Kebab from './media/food/kebab.jpg';
import Ribs from './media/food/ribs.jpg';
import Tacos from './media/food/tacos.jpg';

// food data
const foodImages = [Brisket, Kebab, Ribs, Tacos];
const foodHeaders = ['Prime Brisket', 'Chicken Kebab Plate', 'BBQ Pork Ribs', 'Pulled Pork Tacos'];
const foodDesc = [
    '1/3 lb Prime aged beef, hand sliced with our original sauce, brown beans, coleslaw, and cornbread',
    'Marinated, seasoned chicken served with fries, tomatoes, and bell peppers',
    'Duroc St. Louis ribs, dry rubbed and slow smoked, lightly glazed with our original BBQ sauce',
    'Pulled pork topped with Sriracha coleslaw'
];

function loadMenu() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to contain the menu items in a grid format / structure
    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-info');

    for (let i = 0; i < foodImages.length; i++) {
        // create a div to represent each individual menu item
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        // create the contents - the item name / title, a desc, and an image
        const item_container = document.createElement('div');
        item_container.classList.add('item-container');

        const item_title = document.createElement('h2');
        item_title.textContent = foodHeaders[i];

        const item_desc = document.createElement('div');
        item_desc.classList.add('item-desc');
        item_desc.textContent = foodDesc[i];

        // create a container for the image and append the image to it
        const img_container = document.createElement('div');
        img_container.classList.add('img-container');

        const item_img = new Image();
        item_img.src = foodImages[i];

        img_container.appendChild(item_img);

        menu_item.appendChild(img_container);
        menu_item.appendChild(item_title);
        menu_item.appendChild(item_desc);

        // append the menu_item to the container
        menu_container.appendChild(menu_item);
    }

    page_content.replaceChildren(menu_container);
}

export { loadMenu };
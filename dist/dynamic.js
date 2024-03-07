
function initializePage() {
    // setup the nav buttons to facilitate tabbed browsing
    setupNav();

    // load the home 'tab' by default
    //loadHome();

    // TESTING
    loadMenu();
}

function setupNav() {
    // dom references
    const home_button = document.querySelector('#home-button');
    const menu_button = document.querySelector('#menu-button');
    const about_button = document.querySelector('#about-button');

    // load the home 'tab' content when it is clicked and toggle the active tab
    home_button.addEventListener('click', (event) => {
        loadHome();
        toggleActive(event.currentTarget);
    });

    // load the menu 'tab' content when it is clicked
    menu_button.addEventListener('click', (event) => {
        loadMenu();
        toggleActive(event.currentTarget);
    });

    // load the about 'tab' content when it is clicked
    about_button.addEventListener('click', (event) => {
        loadAbout();
        toggleActive(event.currentTarget);
    });
}

function loadHome() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to test
    const home_container = document.createElement('div');
    home_container.classList.add('home-info');

    // first text section
    const restaurant_intro = document.createElement('div');
    restaurant_intro.textContent = `
        Best cafe / cantina / restaurant east of the Columbia!
        Founded in Portland all the way back in 1926!
    `;

    // cool image 
    const cool_img = document.createElement('img');
    cool_img.src = '../src/portland-sign.jpg';

    // second text section
    const restaurant_aside = document.createElement('div');
    restaurant_aside.textContent = `
        Order online or come visit us at our original
        location in SE Hawthorne! 
    `;

    // append all to container
    home_container.appendChild(restaurant_intro);
    home_container.appendChild(cool_img);
    home_container.appendChild(restaurant_aside);

    page_content.replaceChildren(home_container);
}

function loadMenu() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to contain the menu items in a grid format / structure
    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-info');

    for (let i = 0; i < 4; i++) {
        // create a div to represent each individual menu item
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        // create a container for the image and append the image to it
        const img_container = document.createElement('div');
        img_container.classList.add('img-container');

        const item_img = document.createElement('img');
        item_img.src = '../src/portland-sign.jpg';

        img_container.appendChild(item_img);

        // create a container for the item - contains the item name / title and a desc
        const item_container = document.createElement('div');
        item_container.classList.add('item-container');

        const item_title = document.createElement('h2');
        item_title.textContent = 'Test Menu Item';

        const item_desc = document.createElement('div');
        item_desc.classList.add('item-desc');
        item_desc.textContent = `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Necessitatibus fuga iure unde architecto numquam dolores fugiat velit . . .
        `;

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

function loadAbout() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to test
    const test = document.createElement('div');
    test.textContent = 'about';

    page_content.replaceChildren(test);
}

function toggleActive(button) {
    // grab the currently active button and toggle the 'active' class
    const active_button = document.querySelector('.active');
    active_button.classList.toggle('active');

    // add 'active' to the button's classList
    button.classList.add('active');
}

// wire the JS logic
initializePage();
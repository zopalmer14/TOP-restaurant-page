
function initializePage() {
    // setup the nav buttons to facilitate tabbed browsing
    setupNav();

    // load the home 'tab' by default
    loadHome();
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
    home_container.classList.add('info');

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

    // create div to test
    const test = document.createElement('div');
    test.textContent = 'menu';

    page_content.replaceChildren(test);
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
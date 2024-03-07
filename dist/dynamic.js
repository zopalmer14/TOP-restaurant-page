
function initializePage() {
    // setup the nav buttons to facilitate tabbed browsing
    setupNav();
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
    const test = document.createElement('div');
    test.textContent = 'home';

    page_content.replaceChildren(test);
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

// import in CSS styling
import './style.css';

// import in tab content modules
import { loadHome } from './homepage.js';
import { loadMenu } from './menu.js';
import { loadTapList } from './taplist.js';
import { loadAbout } from './about.js';

function setupNav() {
    // dom references
    const home_button = document.querySelector('#home-button');
    const menu_button = document.querySelector('#menu-button');
    const taplist_button = document.querySelector('#taplist-button');
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

    // load the taplist 'tab' content when it is clicked
    taplist_button.addEventListener('click', (event) => {
        loadTapList();
        toggleActive(event.currentTarget);
    });

    // load the about 'tab' content when it is clicked
    about_button.addEventListener('click', (event) => {
        loadAbout();
        toggleActive(event.currentTarget);
    });
}

function toggleActive(button) {
    // grab the currently active button and toggle the 'active' class
    const active_button = document.querySelector('.active');
    active_button.classList.toggle('active');

    // add 'active' to the button's classList
    button.classList.add('active');
}

function initializePage() {
    // setup the nav buttons to facilitate tabbed browsing
    setupNav();

    // load the home 'tab' by default
    loadHome();
}

initializePage();

// import in CSS styling
import './style.css';

// import in tab content modules
import { loadHome } from './tab_modules/homepage.js';
import { loadMenu } from './tab_modules/menu.js';
import { loadTapList } from './tab_modules/taplist.js';
import { loadAbout } from './tab_modules/about.js';

// DOM references
const content = document.querySelector('#content');
const image_citation = document.querySelector('.image-citation');

// adds the image citation to the bottom of the content section
function addCitation() {
    content.appendChild(image_citation);
}

function setupNav() {
    // dom references
    const home_button = document.querySelector('#home-button');
    const menu_button = document.querySelector('#menu-button');
    const taplist_button = document.querySelector('#taplist-button');
    const about_button = document.querySelector('#about-button');

    // load the home 'tab' content when it is clicked and toggle the active tab
    home_button.addEventListener('click', (event) => {
        loadHome();
        addCitation();
        toggleActive(event.currentTarget);
    });

    // load the menu 'tab' content when it is clicked
    menu_button.addEventListener('click', (event) => {
        loadMenu();
        addCitation();
        toggleActive(event.currentTarget);
    });

    // load the taplist 'tab' content when it is clicked
    taplist_button.addEventListener('click', (event) => {
        loadTapList();
        addCitation();
        toggleActive(event.currentTarget);
    });

    // load the about 'tab' content when it is clicked
    about_button.addEventListener('click', (event) => {
        loadAbout();
        addCitation();
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
    addCitation();
}

initializePage();
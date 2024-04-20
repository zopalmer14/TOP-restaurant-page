
// import in cool drink image
import ManhattanCocktail from './media/manhattan_cocktail.jpg';

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
    const cool_img = new Image();
    cool_img.src = ManhattanCocktail;

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

export { loadHome };

// import in a cool pic
import PortlandSign from './media/portland-sign.jpg';

function loadAbout() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to contain the about info
    const about_container = document.createElement('div');
    about_container.classList.add('about-info');
    about_container.textContent = 'Testing! Please Work!';

    // create a cool image to place adjacent to the info
    const img_container = document.createElement('div');
    img_container.classList.add('about-img');

    const about_img = new Image();
    about_img.src = PortlandSign;

    img_container.appendChild(about_img);

    // empty the content then append the about container and img
    page_content.replaceChildren();
    page_content.appendChild(about_container);
    page_content.appendChild(img_container);
}

export { loadAbout };

// import in a cool pic
import PortlandSign from './media/portland-sign.jpg';
import BBQRestaurant from './media/bbq_restaurant.jpg';
import StoicPig from './media/pigs/stoic_pig.jpg';

const coolImages = [PortlandSign, BBQRestaurant, StoicPig];

function loadAbout() {
    // dom references 
    const page_content = document.querySelector('#content');

    // create div to contain the about info
    const about_container = document.createElement('div');
    about_container.classList.add('about-info');

    // create a div to hold the contact info
    const contact_info = document.createElement('div');
    contact_info.classList.add('contact-info');

    // create a header for the contact info
    const contact_header = document.createElement('h2');
    contact_header.textContent = 'Contact us at the following locations:';

    // create a list of contact locations
    const contact_list = document.createElement('ul');

    const address = document.createElement('li');
    address.textContent = '1234 Random Road \r\n... Random Town, California 12345';

    const phone = document.createElement('li');
    phone.textContent = '555-555-5555';

    const email = document.createElement('li');
    email.textContent = 'testemailaddress@gmail.com';

    contact_list.appendChild(address);
    contact_list.appendChild(phone);
    contact_list.appendChild(email);

    contact_info.appendChild(contact_header);
    contact_info.appendChild(contact_list);

    // create div to contain the about images
    const about_images = document.createElement('div');
    about_images.classList.add('about-images');

    for (let i = 0; i < coolImages.length; i+=1) {
        // create a cool image to place adjacent to the info
        const img_container = document.createElement('div');
        img_container.classList.add('about-img');

        const about_img = new Image();
        about_img.src = coolImages[i];

        img_container.appendChild(about_img);
        about_images.appendChild(img_container);
    } 

    // append the contact info and images to the about container
    about_container.appendChild(contact_info);
    about_container.appendChild(about_images);

    // replace the content with the about container
    page_content.replaceChildren(about_container);
}

export { loadAbout };
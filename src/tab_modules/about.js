
// import in some cool pictures
import PortlandSign from './media/portland-sign.jpg';
import BBQRestaurant from './media/bbq_restaurant.jpg';
import StoicPig from './media/pigs/stoic_pig.jpg';

const coolImages = [PortlandSign, BBQRestaurant, StoicPig];
const imgIds = ['portland-sign', 'bbq-restaurant', 'stoic-pig'];

// create DOM representations for the pictures
const DOM_images = [];
for (let i = 0; i < coolImages.length; i+=1) {
    // create a cool image to place adjacent to the info
    const img_container = document.createElement('div');
    img_container.classList.add('about-img');
    img_container.id = imgIds[i];

    const about_img = new Image();
    about_img.src = coolImages[i];

    img_container.appendChild(about_img);
    DOM_images.push(img_container);
} 

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
    contact_header.textContent = 'Find us at the our original location:';

    // create a list of contact info
    const contact_list = document.createElement('ul');

    // fake address
    const address = document.createElement('li');

    const address_logo = document.createElement('span');
    address_logo.textContent = 'home';
    address_logo.classList.add('material-icons');

    address.appendChild(address_logo);
    address.appendChild(document.createTextNode('3106 SE Hawthorne Blvd\r\nPortland, Oregon, 97214'));

    // phone number: THE-PIG-FARM
    const phone = document.createElement('li');

    const phone_logo = document.createElement('span');
    phone_logo.textContent = 'phone';
    phone_logo.classList.add('material-icons');

    phone.appendChild(phone_logo);
    phone.appendChild(document.createTextNode('843-744-3276'));

    // email
    const email = document.createElement('li');

    const email_logo = document.createElement('span');
    email_logo.textContent = 'email';
    email_logo.classList.add('material-icons');

    email.appendChild(email_logo);
    email.appendChild(document.createTextNode('thedrunkenpig@gmail.com'));

    contact_list.appendChild(address);
    contact_list.appendChild(phone);
    contact_list.appendChild(email);

    // append the header and list to the contact info section
    contact_info.appendChild(contact_header);
    contact_info.appendChild(contact_list);

    // create a div to hold the 'contact us' buttons
    const button_container = document.createElement('div');
    button_container.classList.add('button-container');

    // create 'contact us' and 'make reservation' buttons
    const contact_button = document.createElement('button');
    contact_button.classList.add('contact-button');
    contact_button.textContent = 'Contact Us';

    const reservation_button = document.createElement('button');
    reservation_button.classList.add('contact-button');
    reservation_button.textContent = 'Make Reservation';

    button_container.appendChild(contact_button);
    button_container.appendChild(reservation_button);

    // append all of the content to the about container:
    // - portland_sign
    // - contact info
    // - bbq_restaurant
    // - button container
    // - stoic_pig
    about_container.appendChild(DOM_images[0]);
    about_container.appendChild(DOM_images[1]);
    about_container.appendChild(DOM_images[2]);
    about_container.appendChild(contact_info);
    about_container.appendChild(button_container);

    // replace the content with the about container
    page_content.replaceChildren(about_container);
}

export { loadAbout };
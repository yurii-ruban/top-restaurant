import "../css/contact-page-styles.css"
import restaurantImage from "../img/restaurant.jpg";

const generateContactPage = (contentContainer) => {
    const contact = document.createElement("div");
    contact.classList.add("contact-page");
    const header = document.createElement("h1");
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const envelope = document.createElement("img");
    envelope.src = restaurantImage;
    envelope.alt = "Campfire restaurant";
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    const number = document.createElement("p");
    number.innerText = "Telephone: +(111) 111 11 11";
    const email = document.createElement("p");
    email.innerText = "Email: campf1re@random-service.com";
    const address = document.createElement("p");
    address.innerText = "Address: somwhere in Romania";

    contactInfo.append(number, email, address);
    imageContainer.append(envelope, contactInfo);
    contact.append(header, imageContainer);

    contentContainer.appendChild(contact);
};

export {generateContactPage};
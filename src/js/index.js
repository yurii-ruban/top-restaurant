import "../css/styles.css"

import { generateMainPage } from "./mainpage.js"
import { generateMenuPage } from "./menu.js"
import { generateContactPage } from "./contact.js"

const content = document.querySelector("#content");
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

function removeChildren(elem) {
    Array.from(elem.children).map((item) => {
        item.remove();
    });
}

homeBtn.addEventListener("click", (ev) => {
    removeChildren(content);
    generateMainPage(content);
});

menuBtn.addEventListener("click", (ev) => {
    removeChildren(content);
    generateMenuPage(content);
});

contactBtn.addEventListener("click", (ev) => {
    removeChildren(content);
    generateContactPage(content);
});


generateMainPage(content);


console.log('Im alive!');
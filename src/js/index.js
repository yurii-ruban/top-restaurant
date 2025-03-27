import "../css/styles.css"

import { generateMainPage } from "./mainpage.js"
import { generateMenuPage } from "./menu.js"

const content = document.querySelector("#content");
generateMenuPage(content);


console.log('Im alive!');
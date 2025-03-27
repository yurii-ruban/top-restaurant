import "../css/styles.css"
import { generateMainPage } from "./mainpage.js"

const content = document.querySelector("#content");
generateMainPage(content);


console.log('Im alive!');
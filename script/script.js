// Imports
import {navToggle, MENU_BUTTON_ELEMENT} from "./menu.js";

document.addEventListener('click', (event) => {
    console.log(event.target.parentNode);
})

// Execte the navToggle function when Menu button is clicked
MENU_BUTTON_ELEMENT.addEventListener('click', navToggle);



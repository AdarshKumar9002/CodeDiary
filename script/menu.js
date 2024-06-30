// Elements

const NAV_ELEMENT = document.getElementById("navContainer");
const MENU_BUTTON_ELEMENT = document.getElementById("menu-button");

// Open and Close the navigation menu
const navToggle = () => {
  const visibility = MENU_BUTTON_ELEMENT.getAttribute("aria-expanded");
  if (visibility === "false") {
    MENU_BUTTON_ELEMENT.setAttribute("aria-expanded", "true");
    NAV_ELEMENT.setAttribute("data-visible", "true");
    MENU_BUTTON_ELEMENT.classList.remove('menu-icon-open');
    MENU_BUTTON_ELEMENT.classList.add('menu-icon-close');
  
  } else {
    MENU_BUTTON_ELEMENT.setAttribute("aria-expanded", "false");
    NAV_ELEMENT.setAttribute("data-visible", "false");
    MENU_BUTTON_ELEMENT.classList.remove('menu-icon-close');
    MENU_BUTTON_ELEMENT.classList.add('menu-icon-open');
  }
};




export { navToggle, MENU_BUTTON_ELEMENT };

document.addEventListener('DOMContentLoaded', () => {
//header

//mobile side panel

    const menuButton = document.getElementById('menu_button');
    const sidePanel = document.getElementById('side_panel');
    menuButton.addEventListener('click', () =>
        sidePanel.classList.toggle('open'));

    const closeMenu = document.getElementById('closeMenu');
    closeMenu.addEventListener('click', () =>
    sidePanel.classList.remove('open'));







//home page 

//scrolling

//scrolling homepage items
const scrollLIT = document.getElementById('LIT_items');
const scrollTS = document.getElementById('TS_items');
const scrollAm = 300;
const leftButtons = document.getElementsByClassName("scroll_button_l");
const rightButtons = document.getElementsByClassName("scroll_button_r");

for (let i = 0; i < leftButtons.length; i++) {
    leftButtons[i].addEventListener("click", () => {
        if (i === 0) {
            scrollLIT.scrollBy({left: -scrollAm, behavior: "smooth"});
        } else {
            scrollTS.scrollBy({left: -scrollAm, behavior: "smooth"});
        }
    });
}
for (let i = 0; i < rightButtons.length; i++) {
    rightButtons[i].addEventListener("click", () => {
        if (i === 0) {
            scrollLIT.scrollBy({left: scrollAm, behavior: "smooth"});
        } else {
            scrollTS.scrollBy({left: scrollAm, behavior: "smooth"});
        }
    });
}
//scrolling product page items
const scrollProd = document.getElementById('photos_list');
const scrollReviews = document.getElementById('reviews');
for (let i = 0; i < leftButtons.length; i++) {
    leftButtons[i].addEventListener("click", () => {
        if (i === 0) {
            scrollProd.scrollBy({left: -scrollAm, behavior: "smooth"});
        } else {
            scrollReviews.scrollBy({left: -scrollAm, behavior: "smooth"});
        }
    });
}
for (let i = 0; i < rightButtons.length; i++) {
    rightButtons[i].addEventListener("click", () => {
        if (i === 0) {
            scrollProd.scrollBy({left: scrollAm, behavior: "smooth"});
        } else {
            scrollReviews.scrollBy({left: scrollAm, behavior: "smooth"});
        }
    });
}









});
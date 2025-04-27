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
const scrollLIT = document.getElementById('LIT_items');
const scrollAm = 300;
document.getElementById("scroll_l").addEventListener("click", () => {
    scrollLIT.scrollBy({left: -scrollAm, behavior:"smooth"});
});
document.getElementById("scroll_r").addEventListener("click", () => {
    scrollLIT.scrollBy({left: scrollAm, behavior:"smooth"});
});









});
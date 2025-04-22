
//home page 

//scrolling
const scrollLIT = document.getElementById("LIT_items");
const scrollAm = 300;
document.getElementById("scroll_l").addEventListener("click", () => {
    scrollLIT.scrollBy({left: -scrollAm, behavior:"smooth"});
});
document.getElementById("scroll_r").addEventListener("click", () => {
    scrollLIT.scrollBy({left: scrollAm, behavior:"smooth"});
});
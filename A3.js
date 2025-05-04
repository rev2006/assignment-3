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


    //intialize array of products in cart to local storage. ensures data is stored on browser, hence isnt lost on reload or page change
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    //product page
    //add to cart disabled
    if(document.body.classList.contains("prod_pages")){
        const sizeSelect = document.getElementById("size");
        const addButton = document.getElementById("add_to_cart");
        const addButtonDisabled = document.getElementById("add_to_cart_disabled");

        sizeSelect.addEventListener("change", function(){
            if (sizeSelect.value !== ""){
                addButton.style.display = "block";
                addButtonDisabled.style.display = "none";
            }
        });
    
        //adding to cart
        // information of required products
        addButton.addEventListener("click", function(){
            let productImage = document.getElementById("product_pic").src;
            let productName = product_name.textContent;
            let price_str = product_price.textContent;
            let productPrice = parseFloat(price_str.replace("$", ""));
            let productSize = document.getElementById("size").value;
            //add values to array
            cart.push([productImage,productName, productPrice, productSize]);

            localStorage.setItem("cart", JSON.stringify(cart));
        } );
    }



    //cart page
    if(document.body.id === "cartPage"){
        const prodInCartDiv = document.getElementById("prods_in_cart");
        const cartEmptyText = document.getElementById("empty_cart");
        const checkoutNA = document.getElementById("checkout_NA");
        const checkoutOK = document.getElementById("checkout_ok");
        const subHeadings = document.getElementById("subheadings");

        if (cart.length>0){
            checkoutNA.style.display = "none";
            checkoutOK.style.display = "block";
            cartEmptyText.style.display = "none";
            subHeadings.style.display = "flex";
        }
        else{
            checkoutNA.style.display = "block";
            checkoutOK.style.display = "none";
            cartEmptyText.style.display = "block";
            subHeadings.style.display = "none";
        }
        //add products to cart
        for(let i=0; i<cart.length; i++){
            let newProdDiv = document.createElement('div');
            newProdDiv.className = "cart_item";
            newProdDiv.textContent = `${cart[i][0]} $${cart[i][1]} ${cart[i][2]}`;
            prodInCartDiv.appendChild(newProdDiv);
            
        }

        
    }







    });
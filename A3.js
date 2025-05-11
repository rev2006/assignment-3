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
    // const photoContainer = document.getElementById('photos_list');
    // const photos = photoContainer.querySelectorAll('img');
    // const scrollAm = photos[0].offsetWidth;
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

        const mobileTextDiv = document.getElementById("mobile_text");
        const desktopTextDiv = document.getElementById("desktop_text");
        
        let prodText= document.getElementById("prod_text").textContent;

        function updateProdText(descText){
            const ogText = document.getElementById("prod_text");
            if (ogText) ogText.remove();

            let newH3 = document.createElement("h3");
            newH3.textContent= prodText;
            newH3.id= "prod_text";

            if (descText.matches){
                mobileTextDiv.appendChild(newH3);
            }
            else{
                desktopTextDiv.appendChild(newH3);
            }
        }

        const sizeChange = window.matchMedia("(max-width: 850px)");
        sizeChange.addEventListener("change", updateProdText);
        updateProdText(sizeChange);


    }






    //cart page
    if(document.body.id === "cartPage"){
        const cartEmptyText = document.getElementById("empty_cart");
        const checkoutNA = document.getElementById("checkout_NA");
        const checkoutOK = document.getElementById("checkout_ok");
        const subHeadings = document.getElementById("subheadings");

        const postage = document.getElementById("postage");
        const finalCost = document.getElementById("final_cost");

        const totalPrice = document.getElementById("total_cost");

        const prodInCartDiv = document.getElementById("prods_in_cart");


        if (cart.length>0){
            checkoutNA.style.display = "none";
            checkoutOK.style.display = "block";
            cartEmptyText.style.display = "none";
            subHeadings.style.display = "flex";
            postage.style.display = "flex";
            finalCost.style.display = "block";
        }
        else{
            checkoutNA.style.display = "block";
            checkoutOK.style.display = "none";
            cartEmptyText.style.display = "block";
            subHeadings.style.display = "none";
            postage.style.display= "none";
            finalCost.style.display = "none";
        }

        let totalCost =0;
        //add products to cart
        for(let i=0; i<cart.length; i++){
            const item = cart[i];

            const cartRow = document.createElement("div");
            cartRow.classList.add("cart_row");

            //product info
            const prodCont = document.createElement("div");
            prodCont.classList.add("prod_info");
            prodCont.style.width = "20%";
            
                    
            const itemImg = document.createElement("img");
            itemImg.src = item[0];
            itemImg.style.width = "100%";

            const itemName = document.createElement("p");
            itemName.textContent = item[1];

            prodCont.appendChild(itemImg);
            prodCont.appendChild(itemName);
            cartRow.appendChild(prodCont);

            // product size
            const sizeDiv = document.createElement("div");
            sizeDiv.classList.add("prod_size");

            const sizeSelect = document.createElement("select");
            const sizes = ["XS", "S", "M", "L", "XL"];
            sizes.forEach(size => {
                const option = document.createElement("option");
                option.value = size.toLowerCase();
                option.textContent = size;
                if (size.toLowerCase() === item[3]) {
                    option.selected = true;
                }
                sizeSelect.appendChild(option);
            });

            sizeDiv.appendChild(sizeSelect);
            cartRow.appendChild(sizeDiv);

            // product ammount
            const amountDiv = document.createElement("div");
            amountDiv.classList.add("prod_amount");

            const itemAmm = document.createElement("input");
            itemAmm.type = "number";
            itemAmm.value = 1;
            itemAmm.style.width = "4vw";

            const unitPrice = item[2];

            // update price based on quantity
            itemAmm.addEventListener("input", () => {
                const quantity = parseInt(itemAmm.value) || 0;
                itemPrice.textContent = "$" + (unitPrice * quantity).toFixed(2);

                let newTotal = 0;
                const allRows = document.querySelectorAll(".cart_row");
                allRows.forEach((row, index) => {
                    const qtyInput = row.querySelector("input[type='number']");
                    const qty = parseInt(qtyInput.value) || 0;
                    const pricePerUnit = cart[index][2];
                    newTotal += qty * pricePerUnit;
                });

                totalPrice.textContent = "$" + newTotal.toFixed(2);
            });

            amountDiv.appendChild(itemAmm);
            cartRow.appendChild(amountDiv);
            const priceDiv = document.createElement("div");
            priceDiv.classList.add("prod_price");
        
            // product price
            const itemPrice = document.createElement("p");
            totalCost += item[2];
            itemPrice.textContent = "$" + item[2];  
        
            priceDiv.appendChild(itemPrice);
            cartRow.appendChild(priceDiv);

            //border
            if (i !==0){
                const miniDiv = document.createElement("div");
                miniDiv.id = 'border_light_H';
                prodInCartDiv.appendChild(miniDiv);
            }

            prodInCartDiv.appendChild(cartRow);


        }

        // if (cart.length>0){
        //     itemAmm.addEventListener("click", function(){

        //     })
        // }

        totalPrice.textContent = "$" + totalCost.toFixed(2);
    }







    });
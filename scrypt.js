const form_granny = document.getElementById("form_granny");
const form_fuji = document.getElementById("form_fuji");
const form_golden = document.getElementById("form_golden");

const body = document.querySelector("body");

const logo_cart = document.getElementById("cart")

const div_cart_menu = document.getElementById("cart_menu")
const red_cross_close_logo = document.getElementById("red_cross_close")


logo_cart.onclick = function (){
    
    const cart_menu = document.createElement("div");

    cart_menu.id = "cart_menu"

    body.appendChild(cart_menu)

    const div_cart_menu = document.getElementById("cart_menu")


        const menu_right = document.createElement("div");

        menu_right.id = "menu_right"

        cart_menu.appendChild(menu_right)


            const header_menu_cart = document.createElement("div");

            header_menu_cart.id = "header_menu_cart"

            menu_right.appendChild(header_menu_cart)


                const red_cross_close = document.createElement("img"); 

                red_cross_close.id = "red_cross_close"
                red_cross_close.src = "./asset/close-icon.svg"

                header_menu_cart.appendChild(red_cross_close)

document.getElementById("red_cross_close").onclick = function () {

    body.removeChild(cart_menu)

};

};


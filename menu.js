const form_granny = document.getElementById("form_granny");
const form_fuji = document.getElementById("form_fuji");
const form_golden = document.getElementById("form_golden");
const body = document.querySelector("body");
const logo_cart = document.getElementById("cart")
const div_cart_menu = document.getElementById("cart_menu")
const red_cross_close_logo = document.getElementById("red_cross_close")

panier = new Map();

const menu_right= document.getElementById("menu_right")
const button_granny = document.querySelector("#form_granny > div");
const input_granny = document.querySelector("#form_granny > input");
const button_fuji= document.querySelector("#form_fuji > div");
const input_fuji = document.querySelector("#form_fuji > input");
const button_golden = document.querySelector("#form_golden > div");
const input_golden = document.querySelector("#form_golden > input");

function show_article () {

    total = 0

    panier.forEach(function (valeur,nom) {
        article = document.createElement("article")

        article.id = nom

        document.getElementById("body_menu_cart").appendChild(article)


            inner_article = document.createElement("div")

            document.getElementById(nom).appendChild(inner_article)


                header_article = document.createElement("div")

                header_article.classList.add('header_article')
                header_article.innerText = nom.replace(/_/g," ");

                selector= "#"+nom+" :first-child"

                document.querySelector(selector).appendChild(header_article)


                quantity_article = document.createElement("div")

                quantity_article.innerText = "Quantité : "+valeur
                quantity_article.classList.add("quantity")
                selector= "#"+nom+" :first-child"

                document.querySelector(selector).appendChild(quantity_article)

                unit_price_article = document.createElement("div")
                var unit_price
                switch (nom) {
                    case "La_granny_Smith":
                    unit_price = 0.8
                    break;
                    case "La_Fuji":
                    unit_price = 0.5
                    break;
                    case "La_Golden":
                    unit_price = 0.3
                    break;
                }

                unit_price_article.innerText = "Prix unitaire : "+unit_price+"€"
                unit_price_article.classList.add("price")
                selector= "#"+nom+" :first-child"
                console.log(selector)

                document.querySelector(selector).appendChild(unit_price_article)

                sum_article = document.createElement("div")

                sum_article.innerText = "total : "+(valeur*unit_price).toFixed(2)+"€"
                total = total + valeur*unit_price
                sum_article.classList.add("quantity")
                selector= "#"+nom+" :first-child"

                document.querySelector(selector).appendChild(sum_article)

})

        const footer_menu_cart = document.createElement("div");

        footer_menu_cart.id = "footer_menu_cart"
        footer_menu_cart.innerText = "Valider la commande de : "+total.toFixed(2)+"€"

        document.getElementById("menu_right").appendChild(footer_menu_cart)
    };


logo_cart.onclick = function (){
    
    const cart_menu = document.createElement("div");

    cart_menu.id = "cart_menu"

    body.appendChild(cart_menu)

    const div_cart_menu = document.getElementById("cart_menu")
 

        const left_right = document.createElement("div");

        left_right.id = "left_right"

        cart_menu.appendChild(left_right)

        const menu_right = document.createElement("div");


        menu_right.id = "menu_right"

        cart_menu.appendChild(menu_right)


            const header_menu_cart = document.createElement("div");

            header_menu_cart.id = "header_menu_cart"

            menu_right.appendChild(header_menu_cart)
            




            const body_menu_cart = document.createElement("div");

            body_menu_cart.id = "body_menu_cart"

            menu_right.appendChild(body_menu_cart)
 

                const red_cross_close = document.createElement("img"); 

                red_cross_close.id = "red_cross_close"
                red_cross_close.src = "./asset/close-icon.svg"

                header_menu_cart.appendChild(red_cross_close)


                const title_cart_header = document.createElement("span"); 

                title_cart_header.innerText = "Votre panier"

                header_menu_cart.appendChild(title_cart_header)

    show_article()


document.getElementById("red_cross_close").onclick = function () {

    body.removeChild(cart_menu)

};

document.getElementById("left_right").onclick = function () {

    body.removeChild(cart_menu)

};

};

button_granny.onclick = function (event) {
    event.preventDefault();
    valeur = input_granny.value;

    if (panier.has("La_granny_Smith")) {
        panier.set("La_granny_Smith",parseInt(valeur)+ parseInt(panier.get("La_granny_Smith")))
    } else {
        panier.set("La_granny_Smith",valeur)
    }
};

button_fuji.onclick = function (event) {
    event.preventDefault();
    valeur = input_fuji.value;
    
    if (panier.has("La_Fuji")) {
        panier.set("La_Fuji",parseInt(valeur)+ parseInt(panier.get("La_Fuji")))
    } else {
        panier.set("La_Fuji",valeur)
    }
};

button_golden.onclick = function (event) {
    event.preventDefault();
    valeur = input_golden.value;

    if (panier.has("La_Golden")) {
        panier.set("La_Golden",parseInt(valeur)+ parseInt(panier.get("La_Golden")))
    } else {
        panier.set("La_Golden",valeur)
    }

};


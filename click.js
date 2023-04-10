import { table_phone, table_tablet, table_computer, card } from './table.js';
import { phone_table, tablet_table, computer_table } from './databases.js';
import { Article } from './Model.js';



export default function() {

    let user_card = [];

    document.addEventListener('click', e => {
        const element_article = e.target;


        if (e.target.classList == "stockQuantite") {

            const article = element_article.parentNode;
            const id_article = element_article.parentNode.id;
            const name_article = article.childNodes[3].textContent;
            const brand_article = article.childNodes[5].textContent;
            const price_article = article.childNodes[7].textContent;
            const quantite_article = element_article.value;


            console.log("Article Id : " + id_article);
            console.log("Article name : " + name_article);
            console.log("Article brand : " + brand_article);
            console.log("Article price : " + price_article);
            console.log("Article quantite : " + quantite_article);


            user_card.push(new Article(id_article, name_article, brand_article, price_article, quantite_article));

            // for (let index = 0; index < user_card.length; index++) {
            //     const element = user_card[index];

            //     console.log("Article : " + element)
            // }

        };

    });

    function list_card() {
        for (let index = 0; index < user_card.length; index++) {
            const element = user_card[index];
            return `
            <div class="articles_stock" id="article_card_user">
                    <label for="stockName" class="stockName"><p>${element.getName()}</p></label>
                    <label for="stockBrand" class="stockBrand"><p>${element.getBrand()}</p></label>
                    <label for="stockPrice" class="stockPrice"><p>${element.getPrice()}</p></label>
                    <label for="stockPrice" class="stockQuantite" id="stockQuantite"><p>${element.getQuantite()}</p></label>
            </div>`
        }
    }

    all_click.addEventListener("click", all_item_function, false);
    smartPhone_click.addEventListener("click", phone_item_function, false);
    tablet_click.addEventListener("click", tablet_item_function, false);
    pc_click.addEventListener("click", computer_item_function, false);


    //Ne fonctionne pas !
    // function list_card() {
    //     user_card.map(items => {
    //         return `
    //         <div class="articles_stock" id="list_card_user">
    //         <label for="stockName" class="stockName"><p>${items.getName()}</p></label>
    //         <label for="stockBrand" class="stockBrand"><p>${items.getBrand()}</p></label>
    //         <label for="stockPrice" class="stockPrice"><p>${items.getPrice()}</p></label>
    //         <label for="stockPrice" class="stockQuantite" id="stockQuantite"><p></p></label>
    //         </div>`
    //     })

    // }

    function validate_items_for_basket() {
        if (!document.querySelector("#card_div")) {
            let card_user = document.createElement("div");
            card_user.id = `card_div`;
            shop.append(card_user);
            card_user.innerHTML = card + list_card();
            create_button_card_on_click(card_user, validate_items_for_basket);
        } else {
            card_div.remove();
            let card_user = document.createElement("div");
            card_user.id = `card_div`;
            shop.append(card_user);
            card_user.innerHTML = card + list_card();
            create_button_card_on_click(card_user, validate_items_for_basket);
        }
    }




    function all_item_function() {
        if (!document.querySelector("#table_div")) {
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_phone + phone_table.join("");
            phone_div.innerHTML += table_tablet + tablet_table.join("");
            phone_div.innerHTML += table_computer + computer_table.join("");
            create_button_card_on_click(phone_div, validate_items_for_basket);
        } else {
            table_div.remove();
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_phone + phone_table.join("");
            phone_div.innerHTML += table_tablet + tablet_table.join("");
            phone_div.innerHTML += table_computer + computer_table.join("");
            create_button_card_on_click(phone_div, validate_items_for_basket);
        }
    }

    function phone_item_function() {
        if (!document.querySelector("#table_div")) {
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_phone + phone_table.join("");
            create_button_card_on_click(phone_div, validate_items_for_basket);
        } else {
            table_div.remove();
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_phone + phone_table.join("");
            create_button_card_on_click(phone_div, validate_items_for_basket);
        }
    }

    function tablet_item_function() {
        if (!document.querySelector("#table_div")) {
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_tablet + tablet_table.join("");
            create_button_card_on_click(phone_div, validate_items_for_basket);
        } else {
            table_div.remove();
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_tablet + tablet_table.join("");
            create_button_card_on_click(phone_div, validate_items_for_basket);
        }
    }

    function computer_item_function() {
        if (!document.querySelector("#table_div")) {
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_computer + computer_table.join("");
            create_button_card_on_click(phone_div, validate_items_for_basket);
        } else {
            table_div.remove();
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_computer + computer_table.join("");
            create_button_card_on_click(phone_div, validate_items_for_basket);
        }
    }
}

function create_button_card_on_click(pointer_element, pointer_function) {
    let button_card = document.createElement("button");
    button_card.id = `button_card`;
    pointer_element.append(button_card);
    button_card.textContent = "Panier";
    button_card.addEventListener("click", pointer_function, false);
}
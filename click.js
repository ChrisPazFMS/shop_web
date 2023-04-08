import { table_phone, table_tablet, table_computer } from './table.js';
import { phone_table, tablet_table, computer_table } from './databases.js';

export default function() {

    // document.querySelectorAll("#shop").forEach(buttonCard => buttonCard.addEventListener('click', e => {
    //     console.log(e.target);
    //     console.log(e.target.value);

    // }));

    all_click.addEventListener("click", all_item_function, false);
    smartPhone_click.addEventListener("click", phone_item_function, false);
    tablet_click.addEventListener("click", tablet_item_function, false);
    pc_click.addEventListener("click", computer_item_function, false);

    function validate_items_for_basket() {
        console.log("Click : " + !!button_card);
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
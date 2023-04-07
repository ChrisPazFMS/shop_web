import { table_phone, table_tablet, table_computer, button_card } from './table.js';
import { phone_table, tablet_table, computer_table } from './databases.js';

export default function() {

    all_click.addEventListener("click", all_item_function, false);
    smartPhone_click.addEventListener("click", phone_item_function, false);
    smartPhone_click.addEventListener("click", phone_item_function, false);
    tablet_click.addEventListener("click", tablet_item_function, false);
    pc_click.addEventListener("click", computer_item_function, false);

    function all_item_function() {
        if (!document.querySelector("#table_div")) {
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_phone + phone_table;
            phone_div.innerHTML += table_tablet + tablet_table;
            phone_div.innerHTML += table_computer + computer_table;
        } else {
            document.querySelector("#table_div").remove();
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_phone + phone_table;
            phone_div.innerHTML += table_tablet + tablet_table;
            phone_div.innerHTML += table_computer + computer_table;
        }
    }

    function phone_item_function() {
        if (!document.querySelector("#table_div")) {
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_phone + phone_table + button_card;
        } else {
            document.querySelector("#table_div").remove();
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_phone + phone_table + button_card;
        }
    }

    function tablet_item_function() {
        if (!document.querySelector("#table_div")) {
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_tablet + tablet_table;
        } else {
            document.querySelector("#table_div").remove();
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_tablet + tablet_table;
        }
    }

    function computer_item_function() {
        if (!document.querySelector("#table_div")) {
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_computer + computer_table;
        } else {
            document.querySelector("#table_div").remove();
            let phone_div = document.createElement("div");
            phone_div.id = `table_div`;
            shop.append(phone_div);
            phone_div.innerHTML = table_computer + computer_table;
        }
    }
}
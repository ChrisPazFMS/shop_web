import { Article } from './Model.js';

let table_phone_array = [];
let table_tablet_array = [];
let table_computer_array = [];

table_phone_array.push(new Article(1, "S8", "SAMSUG", 200));
table_phone_array.push(new Article(2, "S9", "SAMSUG", 250));
table_phone_array.push(new Article(3, "Iphone 10", "Apple", 500));
table_phone_array.push(new Article(4, "Iphone 12", "Apple", 600));
table_phone_array.push(new Article(5, "S7", "SAMSUG", 180));





table_tablet_array.push(new Article(1, "Tab S8 Ultra", "SAMSUG", 1679));
table_tablet_array.push(new Article(2, "M7 3rd Gen", "Lenovo", 99));
table_tablet_array.push(new Article(3, "MatePad 10.4", "Huawei", 219));
table_tablet_array.push(new Article(4, "MediaPad T3", "Huawei", 149));
table_tablet_array.push(new Article(5, "M8 12rd Gen", "Lenovo", 218));





table_computer_array.push(new Article(1, "MacBook Pro 13", "Apple", 920));
table_computer_array.push(new Article(2, "PROBOOK 640", "Hp", 429));
table_computer_array.push(new Article(3, "MateBook X Pro", "Huawei", 1799));
table_computer_array.push(new Article(4, "GT77HX", "Titan", 6999));
table_computer_array.push(new Article(5, "RTX-567-PS", "cortex", 8699));








const phone_table = table_phone_array.map(items => {
    return `
    <div class="articles_stock" id="phone_table${items.getId()}">
        <label for="stockId" class="stockId"><p>${items.getId()}</p></label>
        <label for="stockName" class="stockName"><p>${items.getName()}</p></label>
        <label for="stockBrand" class="stockBrand"><p>${items.getBrand()}</p></label>
        <label for="stockPrice" class="stockPrice"><p>${items.getPrice()}</p></label>
        <input type="number" id="stockQuantite${items.getId()}" name="stockQuantite" min="0" max="10" class="stockQuantite">
    </div>`
})

const tablet_table = table_tablet_array.map(items => {
    return `
    <div class="articles_stock" id="tablet_table${items.getId()}">
        <label for="stockId" class="stockId"><p>${items.getId()}</p></label>
        <label for="stockName" class="stockName"><p>${items.getName()}</p></label>
        <label for="stockBrand" class="stockBrand"><p>${items.getBrand()}</p></label>
        <label for="stockPrice" class="stockPrice"><p>${items.getPrice()}</p></label>
        <input type="number" id="stockQuantite${items.getId()}" name="stockQuantite" min="0" max="10" class="stockQuantite">
    </div>`
})

const computer_table = table_computer_array.map(items => {
    return `
    <div class="articles_stock" id="computer_table${items.getId()}">
        <label for="stockId" class="stockId"><p>${items.getId()}</p></label>
        <label for="stockName" class="stockName"><p>${items.getName()}</p></label>
        <label for="stockBrand" class="stockBrand"><p>${items.getBrand()}</p></label>
        <label for="stockPrice" class="stockPrice"><p>${items.getPrice()}</p></label>
        <input type="number" id="stockQuantite${items.getId()}" name="stockQuantite" min="0" max="10" class="stockQuantite">
    </div>`
})

export { phone_table, tablet_table, computer_table }
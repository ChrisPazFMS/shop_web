let naveBar = `
<div class="naveBare">
    <ul class="homeNave">
        <li class="titleNave">Ma boutique en ligne</li>
        <li class="text">Home</li>
    </ul>
</div>
`
let article = `
<!-- Article -->
    <div class="article">
        <div class="border">
            <div class="case" id="all_click">
                <p>All</p>
            </div>
            <div class="case" id="smartPhone_click">
                <p>SmartPhone</p>
            </div>
            <div class="case" id="tablet_click">
                <p>Tablet</p>
            </div>
            <div class="case" id="pc_click">
                <p>Pc</p>
            </div>
        </div>
    </div>`

let table_phone = ` 
<!-- Liste des téléphones en stock -->
<form action="" method="post" id="phone">
    <div class="articles_stock background_color">
        <label for="stockId" class="stockId"><p class="StockName">ID</p></label>
        <label for="stockName" class="stockName"><p class="StockName">NAME</p></label>
        <label for="stockBrand" class="stockBrand"><p>BRAND</p></label>
        <label for="stockPrice" class="stockPrice"><p>PRICE</p></label>
        <label for="stockQuantite" class="stockQuantite"><p>QUANTITE</p></label>
        <span class="border_form"></span>
    </div>
</form>`

let table_tablet = `
<!-- Liste des tablets en stock -->
<form action="" method="post" id="tablet">
<div class="articles_stock background_color">
    <label for="stockId" class="stockId"><p class="StockName">ID</p></label>
    <label for="stockName" class="stockName"><p class="StockName">NAME</p></label>
    <label for="stockBrand" class="stockBrand"><p>BRAND</p></label>
    <label for="stockPrice" class="stockPrice"><p>PRICE</p></label>
    <label for="stockQuantite" class="stockQuantite"><p>QUANTITE</p></label>
    <span class="border_form"></span>
</div>
</form>`

let table_computer = `
<!-- Liste des Pc en stock -->
<form action="" method="post" id="computer">
    <div class="articles_stock background_color">
        <label for="stockId" class="stockId"><p class="StockName">ID</p></label>
        <label for="stockName" class="stockName"><p class="StockName">NAME</p></label>
        <label for="stockBrand" class="stockBrand"><p>BRAND</p></label>
        <label for="stockPrice" class="stockPrice"><p>PRICE</p></label>
        <label for="stockQuantite" class="stockQuantite"><p>QUANTITE</p></label>
        <span class="border_form"></span>
    </div>
</form>`

let card = ` 
<!-- Liste des téléphones en stock -->
<form action="" method="post" id="card_user_items">
    <div class="articles_stock background_color">
        <label for="stockName" class="stockName"><p class="StockName">NAME</p></label>
        <label for="stockBrand" class="stockBrand"><p>BRAND</p></label>
        <label for="stockPrice" class="stockPrice"><p>PRICE</p></label>
        <label for="stockQuantite" class="stockQuantite"><p>QUANTITE</p></label>
        <span class="border_form"></span>
    </div>
</form>`

export { naveBar, article, table_phone, table_tablet, table_computer, card };
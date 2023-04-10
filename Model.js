class Article {

    constructor(id, name, brand, price, quantite) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.quantite = quantite;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name
    }

    setName(name) {
        this.name = name;
    }
    getBrand() {
        return this.brand
    }

    setBrand(brand) {
        this.brand = brand;
    }
    getPrice() {
        return this.price
    }

    setPrice(price) {
        this.price = price;
    }

    getQuantite() {
        return this.quantite
    }

    setQuantite(quantite) {
        this.quantite = quantite;
    }

    toString() {
        if (this.getQuantite() == null) {
            console.log("sans quantite");
            return "Id : " + this.getId() + " Name : " + this.getName() + " Brand : " + this.getBrand() + " Price : " + this.getPrice();
        } else {
            console.log("avec quantite");
            return "Id : " + this.getId() + " Name : " + this.getName() + " Brand : " + this.getBrand() + " Price : " + this.getPrice() + " Quantite : " + this.getQuantite();

        }
    }
}

export { Article }
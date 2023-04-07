class Article {

    constructor(id, name, brand, price) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
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

    toString() {
        return "Id : " + this.getId() + " Name : " + this.getName() + " Brand : " + this.getBrand() + " Price : " + this.getPrice()
    }
}

export { Article }
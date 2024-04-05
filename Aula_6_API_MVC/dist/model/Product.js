"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, description, price, categoria) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = this.geraId();
        this.categoria = categoria;
    }
    geraId() {
        return Date.now();
    }
}
exports.Product = Product;

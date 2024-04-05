"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const Product_js_1 = require("../model/Product.js");
const ProductRepository_js_1 = require("../repository/ProductRepository.js");
class ProductService {
    constructor() {
        this.productRepository = new ProductRepository_js_1.ProductRepository();
    }
    cadastrarProduto(produtoData) {
        const { name, description, price, categoria } = produtoData;
        if (!name || !description || !price || !categoria) {
            throw new Error("Informações inválidas");
        }
        if (!this.validarCategoria) {
            throw new Error("Informações inválidas");
        }
        const novoProduto = new Product_js_1.Product(name, description, price, categoria);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }
    validarCategoria(categoria) {
        if (categoria < 1 || categoria > 4)
            return false;
        return true;
    }
    consultarProduto(id) {
        const idNumber = parseInt(id, 10);
        console.log(id);
        return this.productRepository.filtraProdutoPorId(idNumber);
    }
    getProducts() {
        return this.productRepository.filtraTodosProdutos();
    }
}
exports.ProductService = ProductService;

import { Product } from "../model/Product.js";
import { ProductRepository } from "../repository/ProductRepository.js";
export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product {
        const { name, description, price, categoria } = produtoData;
        if(!name || !description || !price || !categoria){
            throw new Error("Informações inválidas");
        }
        if(!this.validarCategoria) {
            throw new Error("Informações inválidas");
        }
        const novoProduto = new Product(name, description, price, categoria);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    validarCategoria(categoria: number): boolean {
        if(categoria < 1 || categoria > 4) 
            return false;
        return true;
    }

    consultarProduto(id: any): Product|undefined{
        const idNumber: number = parseInt(id, 10);
        console.log(id)
        return this.productRepository.filtraProdutoPorId(idNumber);
    }

    getProducts():Product[]{
        return this.productRepository.filtraTodosProdutos();
    }
}
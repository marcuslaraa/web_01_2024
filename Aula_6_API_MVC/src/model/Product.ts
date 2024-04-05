import { Categorias } from "../enums/Categorias";

export class Product{
    id:number;
    name:string;
    description:string;
    price:number;
    categoria: Categorias;

    constructor(name:string, description:string, price:number, categoria:Categorias){
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = this.geraId();
        this.categoria = categoria;
    }

    private geraId():number{
        return Date.now();
    }
}
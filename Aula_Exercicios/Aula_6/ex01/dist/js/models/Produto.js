"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(_name, _description, _price) {
        this._name = _name;
        this._descritpion = _description;
        this._price = _price;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get description() {
        return this._descritpion;
    }
    set description(value) {
        this._descritpion = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}
exports.Produto = Produto;

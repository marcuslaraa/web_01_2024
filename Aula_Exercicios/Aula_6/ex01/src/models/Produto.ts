export class Produto {
    private _name: string;
    private _descritpion: string;
    private _price: number;

    constructor(_name: string, _description: string, _price: number) {
        this._name = _name;
        this._descritpion = _description;
        this._price = _price;
    }

    public get name() {
        return this._name;
    }

    public set name(value: string)  {
        this._name = value;
    }

    public get description() {
        return this._descritpion;
    }

    public set description(value: string)  {
        this._descritpion = value;
    }

    public get price() {
        return this._price;
    }

    public set price(value: number)  {
        this._price = value;
    }
}
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Produto_js_1 = require("./models/Produto.js");
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
function portLog() {
    console.log(`A API se encontra disponível no URL: http://localhost:3000`);
}
function addProduct(req, res) {
    const obj = req.body;
    console.log("Body >>>", obj);
    const produto = new Produto_js_1.Produto(obj.name, obj.description, obj.price);
    res.status(200).json({ "Mensagem": "Produto adicionado com sucesso" });
}
function getIdFromParameter(req, res) {
    const userId = req.query.id;
    res.status(200).json({ mensagem: `Você solicitou informações do produto com o ID ${userId}` });
}
app.get('/api/product/:id', getIdFromParameter);
app.post('/api/product', addProduct);
app.listen(PORT, portLog);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Pessoa_js_1 = require("./model/Pessoa.js");
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
let p = new Pessoa_js_1.Pessoa("Marcus", 2024);
const app = (0, express_1.default)();
app.use(express_1.default.json());
function applog() {
    console.log("A API se encontra disponivel no URL: http://localhost:3000");
}
function hello(req, res) {
    res.status(201).json({ mensagem: "Hello World" });
}
app.get("/api/hello", hello);
app.listen(PORT, applog);
function calculateAge(req, res) {
    const obj = req.body;
    console.log("BODY>>>", obj);
    const person = new Pessoa_js_1.Pessoa(obj.name, obj.anoNascimento);
    res.status(200).json({ mensagem: `${person.nome} tem ${person.calculaIdade()} anos` });
}
app.post('/api/age', calculateAge);

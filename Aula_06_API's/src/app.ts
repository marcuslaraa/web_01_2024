import express, {Request, Response} from "express";
import { Pessoa } from "./model/Pessoa.js";

const PORT = process.env.PORT  ?? 3000;

let p: Pessoa = new Pessoa ("Marcus", 2024);

const app = express();
app.use (express.json());

function applog(){
    console.log("A API se encontra disponivel no URL: http://localhost:3000");
}

function hello(req: Request, res: Response){
    res.status(201).json({mensagem:"Hello World"});
}

app.get("/api/hello", hello);

app.listen(PORT, applog);

function calculateAge(req: Request, res: Response) {
    const obj: { name: string, anoNascimento: number} = req.body;
    console.log("BODY>>>", obj);

    const person = new Pessoa(obj.name, obj.anoNascimento);
    res.status(200).json({mensagem: `${person.nome} tem ${person.calculaIdade()} anos`});
}

app.post('/api/age', calculateAge);
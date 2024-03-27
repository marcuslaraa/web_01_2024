import express, {Request, Response} from 'express';
import { Produto } from './models/Produto.js';

const PORT = process.env.PORT ?? 3000;

const app = express();
app.use(express.json());

function portLog() {
    console.log(`A API se encontra disponível no URL: http://localhost:3000`);
}

function addProduct(req: Request, res: Response) {
    const obj: { name: string, description: string, price: number } = req.body;
    console.log("Body >>>", obj);

    const produto = new Produto(obj.name, obj.description, obj.price);
    res.status(200).json({"Mensagem": "Produto adicionado com sucesso"})
}

function getIdFromParameter(req: Request, res: Response) {
    const userId = req.query.id;
    res.status(200).json({mensagem: `Você solicitou informações do produto com o ID ${userId}`});
}

app.get('/api/product/:id', getIdFromParameter);

app.post('/api/product', addProduct);
app.listen(PORT, portLog);


import express, { Express, Request, Response } from 'express';
import { makeBankSlip, makeDigitableLine } from "./src/adapter";

const app: Express = express();

app.get('/boleto/:number', (req: Request, res: Response) => {
    const {params} = req;
    const number = String(params.number);
    try {
        let response;
        if (!number.length) {
            throw new Error("Parâmetros inválidos");
        } else if (number.length === 44) {
            response = makeBankSlip(number);
        } else {
            response = makeDigitableLine(number);
        }
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({
            message: (err as Error).message || 'Erro ao realizar consulta.',
        });
    }
});

app.listen(3000);
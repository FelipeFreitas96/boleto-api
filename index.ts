import express, { Express, Request, Response } from 'express';
import { BankSlip, Conssectionary } from "./src/adapter";

const app: Express = express();

app.get('/boleto/:number', (req: Request, res: Response) => {
    const {params} = req;
    const number = String(params.number);
    let response;

    if (number.length === 44) {
        response = BankSlip.makeFourtyFour(number);
        if (response.message) {
            response = Conssectionary.makeFourtyFour(number);
        }
    } else if (number.length === 47) {
        response = BankSlip.makeFourtySeven(number);
    } else if (number.length === 48) {
        response = Conssectionary.makeFourtyEight(number);
    }

    if (!response || response.message) {
        return res.status(500).json({
            message: response?.message || 'Parâmetros inválidos.',
        })
    }

    return res.status(200).json(response);
});

app.listen(3000);
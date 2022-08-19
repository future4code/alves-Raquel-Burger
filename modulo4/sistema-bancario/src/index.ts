import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { accounts } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/teste", (req: Request, res: Response) => {
    res.send("Teste funcionou")
})

app.get("/users/all", (req: Request, res: Response) => {
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    } catch (error: any) {
        res.send(error.message)
    }
})

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const {name, CPF, dateOfBirthAsString} = req.body
        const [day, month, year] = dateOfBirthAsString.split("/")
        const  dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        //validar entradas da requisição
        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()

        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365 //como achar a qta de anos 

        if(ageInYears < 18){
            res.statusCode = 406
            throw new Error("Idade deve ser mais que 18 anos")
        }
        //consultar ou alterar base de dados
       accounts.push({
           name,
           CPF, 
           dateOfBirth,
           balance: 0,
           statement: []
        })
        //enviar resposta
        res.status(201).send("Conta criada com sucesso!")
        
        //validar resultados da consulta
    } catch (error: any) {
        console.log(error)
        res.send(error.message)
        
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
import { Request, Response } from "express";
import addUser from "../data/addUser";
import { User } from "../types";

export default async function postUser(req: Request, res: Response) {
try {
    const {name, nickname, email} = req.body
    if (!name || !nickname || !email) {
        res.statusCode = 400
        throw new Error("Verifique se todos os campos estão preenchidos!")
    }
    if(typeof name !== "string" || typeof nickname !== "string" || typeof email !== "string"){
        res.statusCode = 400
        throw new Error("Algum dos campos possui valor inválido")
    }

    const newUser: User = {
        id: Date.now().toString(),
        name,
        nickname,
        email
    }

    await addUser(newUser)
    res.status(201).send({message: `Usuário ${nickname} criando com sucesso!`})
} catch (error: any) {
    res.status(res.statusCode || 500).send({message: error.message || error.sqlMessage})
}  
}
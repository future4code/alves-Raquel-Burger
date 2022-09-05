import { Request, Response } from "express";
import editUser from "../data/editUser";

export default async function putUser(req: Request, res: Response) {
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
    
    await editUser(name, nickname, email)
    res.status(201).send({message: `Usuário ${nickname} alterado com sucesso!`})

    } catch (error: any) {
    res.status(res.statusCode || 500).send({message: error.message || error.sqlMessage})
        
    }
}
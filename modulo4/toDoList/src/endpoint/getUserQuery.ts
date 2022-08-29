import { Request, Response } from "express";
import selectUserQuery from "../data/selectUserQuery";

export default async function getUserQuery(req: Request, res: Response) {
    try {
        const queryName:string = String(req.query.queryName)
        const userName = await selectUserQuery(queryName)

        if(!queryName) {
            res.statusCode = 400
            throw new Error("Por favor informe o trecho que deseja pesquisar!")
        }
        if(!userName) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado") 
        }

        res.status(200).send(userName)
        
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
        
    }
}
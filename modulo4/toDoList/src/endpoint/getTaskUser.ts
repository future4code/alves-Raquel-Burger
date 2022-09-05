import { Request, Response } from "express";
import moment from 'moment'
import selectTaskUser from "../data/selectTaskUser";

export default async function getTaskUser(req: Request, res: Response) {
    try {
        const creator_user_id: string = String(req.query.creator_user_id)
        const task = await selectTaskUser(creator_user_id)

        if (!creator_user_id) {
            res.statusCode = 400
            throw new Error("Por favor, informe o id do usuário que criou a tarefa");
        }

        if (!task) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send(task)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ messagem: error.message || error.sqlMessage });
    }
}
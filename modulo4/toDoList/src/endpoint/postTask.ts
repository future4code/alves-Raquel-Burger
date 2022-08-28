import { Request, Response } from "express";
import addTask from "../data/addTaks";

export default async function postTask(req: Request, res: Response) {
    try {
        const { title, description, limit_date, creator_user_id } = req.body
        if (!title || !description || !limit_date || !creator_user_id) {
            res.statusCode = 400
            throw new Error("Verifique se todos os campos estão preenchidos!")
        }

        await addTask(title, description, limit_date, creator_user_id)
        res.status(201).send({ message: `Tarefa ${title} criada com sucesso!` })

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message || error.sqlMessage})

    }
}
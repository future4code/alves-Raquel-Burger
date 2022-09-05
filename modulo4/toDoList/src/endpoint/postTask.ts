import { Request, Response } from "express";
import addTask from "../data/addTaks";
import { Task } from "../types";

export default async function postTask(req: Request, res: Response) {
    try {
        const { title, description, limit_date, creator_user_id } = req.body
        const transformDate = limit_date.split("/")
        const newDate = new Date(`${transformDate[2]}-${transformDate[1]}-${transformDate[0]}`)
        
        if (!title || !description || !limit_date || !creator_user_id) {
            res.statusCode = 400
            throw new Error("Verifique se todos os campos estão preenchidos!")
        }
        const newTask: Task = {
            id: Date.now().toString(),
            title,
            description,
            limit_date: newDate,
            creator_user_id
        }

        await addTask(newTask)
        res.status(201).send({ message: `Tarefa ${title} criada com sucesso!` })

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message || error.sqlMessage})

    }
}
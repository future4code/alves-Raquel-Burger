import { Request, Response } from "express";
import selectTask from "../data/selectTask";
import moment from 'moment'

export default async function getTask(req: Request, res: Response) {
    try {
        const id:string = req.params.id
        const task = await selectTask(id)
        if(task.length <= 0) {
            throw new Error("Tarefa não encontrada")
        }
        res.status(200).send({
            id: task[0].id,
            title: task[0].title,
            description: task[0].description,
            limit_date: moment(task[0].limit_date, "YYYY-MM-DD").format("DD/MM/YYYY"),
            status: task[0].status,
            creator_user_id: task[0].creator_user_id,
            nickname: task[0].nickname
        })

    } catch (error: any) {
        res.status(400).send({message: error.message || error.sqlMessage})
        
    }
}
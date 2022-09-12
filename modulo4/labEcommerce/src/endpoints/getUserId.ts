import { Request, Response } from "express"
import selectuserId from "../data/selectUserId"

export default async function getUserId(req:Request, res: Response) {
    try {
        const id = req.params.id

        if(!id) {
            res.statusCode = 400
            throw new Error("Informe o Id do usuário") 
        }

        const user = await selectuserId(id)

        res.status(200).send(user)
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}
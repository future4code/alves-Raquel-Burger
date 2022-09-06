import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        let name = req.query.name as string || ""
        const users = await selectUsers(name)
        if(!users.length){
            res.statusCode = 404
            throw new Error("Usuários não encontrados")
        }
        
        res.status(200).send(users)
    } catch (error:any) {
        console.log("erro", error)
        res.send(error.message || error.sqlMessage)
    }
}
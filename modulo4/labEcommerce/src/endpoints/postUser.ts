import { Request, Response } from "express"
import addUser from "../data/addUser"
import { NewUser } from "../types"

export async function postUser(req: Request, res: Response): Promise<any> {
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password) {
            res.statusCode = 400
            throw new Error("Verifique se todos os campos estão preenchidos")
        }

        const newUser: NewUser = {
            name,
            email,
            password
        }

        await addUser(newUser)
        res.status(200).send("Usuário criado com sucesso")
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}
import { Request, Response } from "express";
import selectPurchaseUser from "../data/selectPurchaseUser";

export default async function  getPurchaseUser(req:Request, res: Response) {
    try {
        const user_id = req.params.user_id
        if(!user_id){
            res.statusCode = 400
            throw new Error("Informe o Id do usuário") 
        }
        if(user_id.length === 0){
            res.statusCode = 400
            throw new Error("Esse usuário não realizou nenhuma compra até o momento.") 
        }
        const listUserPurchase = await selectPurchaseUser(user_id)

        res.status(200).send(listUserPurchase)
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}
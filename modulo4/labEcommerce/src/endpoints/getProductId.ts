import { Request, Response } from "express"
import selectProductId from "../data/selectProductId"

export default async function getProductId(req:Request, res: Response) {
    try {
        const id = req.params.id

        if(!id) {
            res.statusCode = 400
            throw new Error("Informe o Id do produto") 
        }

        const product = await selectProductId(id)

        res.status(200).send(product)
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}
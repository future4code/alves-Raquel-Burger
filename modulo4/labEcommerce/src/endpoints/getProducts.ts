import { Request, Response } from "express"
import selectAllProducts from "../data/selectAllProducts"

export default async function getProducts(req:Request, res: Response) {
    try {
        const products = await selectAllProducts()

        if(products.length === 0) {
            res.statusCode = 400
            throw new Error("Ainda não existe nenhum produto cadastrado");
        }

        res.send(products)

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}
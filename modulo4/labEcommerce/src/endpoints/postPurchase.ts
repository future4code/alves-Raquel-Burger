import { Request, Response } from "express";
import addPurchase from "../data/addPurchase";
import selectProductId from "../data/selectProductId";

export async function postPurchase(req: Request, res: Response): Promise<any> {
    try {
        const {user_id, product_id, quantity} = req.body

        if(!user_id || !product_id || !quantity) {
            res.statusCode = 400
            throw new Error("Verifique se todos os campos estão preenchidos")
        }

        const productId = await selectProductId(product_id)
        console.log(productId.price)
        const total_price  = productId.price * quantity

        await addPurchase(user_id, product_id, quantity, total_price)
        res.status(200).send(`Compra realizado com sucesso, valor total de ${total_price}`)

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}
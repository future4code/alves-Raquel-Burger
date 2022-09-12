import { Request, Response } from "express";
import addProduct from "../data/addProduct";
import { NewProduct } from "../types";

export async function postProduct(req: Request, res: Response): Promise<any> {
    try {
        const {name, price, image_url} = req.body
        if(!name || !price) {
            res.statusCode = 400
            throw new Error("Verifique se todos os campos estão preenchidos")
        }

        const newProduct: NewProduct = {
            name,
            price,
            image_url
        }

        await addProduct(newProduct)
        res.status(200).send("Produto cadastrado com sucesso")
        
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
}
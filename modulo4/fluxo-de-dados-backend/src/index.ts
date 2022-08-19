import express, { Request, response, Response } from "express";
import cors from "cors";
import { produtos } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/test", (req: Request, res: Response) => {
    res.send("funciona")
})

app.get("/produtos", (req: Request, res: Response) => {
    try {
        if (!produtos.length) {
            throw new Error("Não há produtos para exibir")
        }
        res.send(produtos)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.post("/produtos", (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if (!name || !price || typeof (price) !== "number" || typeof (name) !== "string" || price <= 0) {
            response.statusCode = 422
            throw new Error("Verifique se nome e/ou preço estão preenchidos e tente novamente")
        }
        produtos.push({
            id: Date.now().toString(),
            name: name,
            price: price
        })
        res.send(produtos)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.put("/produtos/:produtoName", (req: Request, res: Response) => {
    try {
        const price = req.body.price
        const produtoName = req.params.produtoName

        if (!produtoName || !price || typeof (price) !== "number" || price <= 0) {
            response.statusCode = 404
            throw new Error("Informe um produto")
        }

        const findProduto = produtos.find((produto) => produto.name === produtoName)
        if (findProduto) {
            findProduto.price = price
            res.send(produtos)
        } else {
            response.statusCode = 404
            throw new Error("Produto não encontrado")
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

app.delete("/produtos/:produtoName", (req: Request, res: Response) => {
    try {
        const produtoName = req.params.produtoName
        if(!produtoName){
            response.statusCode = 404
            throw new Error("Informe um produto")
        }
        const listaProdutos = produtos.filter((produto) => {
            return produto.name !== produtoName
        })
        res.send(listaProdutos)

    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message })

    }

})
import app from "./app";
import { Request, Response } from "express";
import connection from "./connection";


//3 a
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(`
            SELECT * FROM Actor
        `)

        res.send(result)
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

//1
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(`
        SELECT * FROM Actor
        where id = "${req.params.id}"
    `)

        res.send(result)

    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

// a)o raw permito que usemos a linguagem sql dentro do Type script, facilicitando assim o acesso ao banco de dados.
// ele retornou neste caso um array com o objeto do id específico
// b)
app.get("/actor/name/:name", async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(`
        SELECT * FROM Actor
        where name = "${req.params.name}"
    `)

        res.send(result)

    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

//c e 3 a e b
app.get("/actor/gender/:gender", async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(`
        SELECT COUNT(*) FROM Actor
        where gender = "${req.params.gender}"
    `)
        res.send(result)

    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

//2
// app.put("/actor/:id", async(req: Request, res: Response) => {
//     try {
//         await connection.raw(`
//         UPDATE Actor SET salary = 123456
//         where id = "${req.params.id}"
//         `)
//         res.send("Alterado com sucesso")
//     } catch (error) {
//         res
//         .status(500)
//         .send("Um erro inesperado aconteceu");
//     }
// })

app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor").update({
            salary: req.body.salary
        }).where({
            id: req.params.id
        })
        res.send("Salário alterado com sucesso")
    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor")
            .where({
                id: req.params.id
            })
            .del()
        res.send("Deletado com sucesso!")
    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

app.get("/actor/salary/:gender", async (req: Request, res: Response) => {
    // try {
    //     const [result] = await connection.raw(`
    //     SELECT AVG(salary), gender FROM Actor
    //     where gender = "${req.params.gender}"
    // `)
    // res.send(result)

    // } catch (error) {
    //     res
    //     .status(500)
    //     .send("Um erro inesperado aconteceu");
    // }
    try {
        const result = await connection("Actor").avg('salary')
            .where({
                gender: req.params.gender
            })
        res.send(result)
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

//4
app.post("/actor", async (req: Request, res: Response) => {
    try {
        const result = await connection("Actor")
            .insert({
                id: req.body.id,
                name: req.body.name,
                salary: req.body.salary,
                birth_date: new Date(req.body.dateOfBirth),
                gender: req.body.gender
               
            })
            res.send(result)
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .send("Um erro inesperado aconteceu");
    }
})




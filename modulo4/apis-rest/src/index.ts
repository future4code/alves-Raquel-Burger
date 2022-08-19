import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, user } from "./data";

const app = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.get("/test", (req: Request, res: Response) => {
    res.send("funciona")
})
//1.a GET
//1.busers

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        if (!users) {
            errorCode = 404;
            throw new Error("User not found");
        }
        res.status(200).send(users);
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });

    }
})


app.get("/users/types", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const types: string = req.query.types as string
        const usersTypes = users.filter((user) => user.type === types)
        if (!usersTypes) {
            errorCode = 404;
            throw new Error("Nenhum usuário encontrado")
        }
        res.status(200).send(usersTypes)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });

    }
})
app.get("/users/name", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const name = req.query.name as string
        const usersNames: user[] = users.filter((user) => user.name.includes(name))
        if (!usersNames || usersNames.length <= 0) {
            errorCode = 404;
            throw new Error("Nenhum usuário encontrado")
        }
        res.status(200).send(usersNames)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message });

    }
})

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const { name, email, type, age } = req.body;

        if (!name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Please check the fields!");
        }

        const newUser: user = {
            id: Date.now(),
            name,
            email,
            type,
            age,
        };

        users.push(newUser);

        res.status(201).send({ message: "User created successefully" } && users);
    } catch (error: any) {
        res.status(errorCode).send({ messagem: error.message });
    }
})
### ex 1
a) Sim, pois a string aceita 0 na frente, numeros e caracteres
b) 
```ts
import { v4 } from "uuid";
export class GenerateId {
    createId(): string {
        return v4()
    }
}
```

### ex 2
a) esta colocando a tabela em uma constantem depois criando a conexão com o banco de dados e por ultimo a função para criar um novo usuário.
b) CREATE TABLE autenticacao_user (
	id VARCHAR(255) PRIMARY KEY,
	email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL
);
c) 
```ts
export class UserData extends BaseDataBase {
    async createUser(user: User): Promise<void> {
        await this.getConnection()
        .insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        })
        .into("autenticacao_user")
    }
}
```

### ex 3
a) força o TP a entender que aquele atributo é uma string

b) 
```ts
import * as  jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { AuthenticationData } from "../model/AutheticationData"

dotenv.config()

export class Authenticator {

    generateToken(input: AuthenticationData) {
        const token = jwt.sign(
            {
                id: input.id
            },
            process.env.JWT_KEY!,
            {
                expiresIn: process.env.EXPIRES_IN
            }
        )

        return token
        
    }
}
```
### ex 4
a)
```ts
import { Request, Response } from "express";
import { UserData } from "../data/UserData";
import { MissingFields } from "../error/MissingFields";
import { AuthenticationData } from "../model/AutheticationData";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class userController {
    async createUser(req: Request, res: Response) {
        try {
            const {email, password} = req.body

            if(!email || !password) {
                throw new MissingFields()
            }

            const userData = new UserData()

            const id = new GenerateId().createId() as string

            const user = new User(id, email, password)

            await userData.insertUser(user)

            const payload: AuthenticationData = {
                id
            }

            const token = new Authenticator().generateToken(payload)

            res.status(201).send({token: "token gerado pelo jwt"})
        } catch (error:any) {
            
        }
    }
}
```

b e c)
```ts
     if(!email || !password) {
                throw new MissingFields()
            }

            if(!email.includes("@")){
                throw new Error("Verifique que se o email está correto!");
            }

            if(password.length < 6) {
                throw new Error("O mínimo de caracteres no password é 6 caracteres")
            }
```

### ex 5
```ts
    async selectUser(email: string) {
        const result = await this.getConnection()
        .select("*")
        .where("email", "LIKE", `%${email}%`)
        .from("autenticacao_user")

        return result
    }

 async getUser(req: Request, res: Response) {
        try {
            const userData = new UserData()
            let email = req.query.email as string || ""
            const user = await userData.selectUser(email)
            res.status(200).send(user)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
```


import e, { Request, Response } from "express";
import { UserData } from "../data/UserData";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFields";
import { AuthenticationData } from "../model/AutheticationData";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class userController {
    async createUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }
            if (!email.includes("@")) {
                throw new Error("Verifique que se o email está correto!");
            }
            if (password.length < 6) {
                throw new Error("O mínimo de caracteres no password é 6 caracteres")
            }

            const userData = new UserData()
            const id = new GenerateId().createId() as string
            const user = new User(id, email, password)
            await userData.insertUser(user)
            const payload: AuthenticationData = {
                id
            }
            const token = new Authenticator().generateToken(payload)
            res.status(201).send({ token: "token gerado pelo jwt" })
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })

        }
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

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }
            if (!email.includes("@")) {
                throw new Error("Verifique que se o email está correto!");
            }
            if (password.length < 6) {
                throw new Error("O mínimo de caracteres no password é 6 caracteres")
            }


            const userData = new UserData()

            const verifyPassword = await userData.selectPassword(password)
            const verifyEmail = await userData.selectUser(email)

            if (!verifyPassword.length && !verifyEmail.length) {
                throw new InvalidCredencial()
            }

            const token = new Authenticator().generateToken(verifyPassword[0].id)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })

        }
    }

    async getUserLogin(req: Request, res: Response) {

        try {
            const token = req.headers.authorization!
            const authenticator = new Authenticator().verifyToken(token)
          
            const userData = new UserData()
            const user = await userData.selectUserLogin(authenticator.id)

            res.status(200).send({user})
           
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })

        }


    }
}
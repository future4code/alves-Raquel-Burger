import e, { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { EmailExist } from "../error/EmailExist";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFelds";
import { User, USER_ROLES } from "../model/User";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const { name, nickname, email, password, role } = req.body

            if (!name || !nickname || !email || !password) {
                throw new MissingFields()
            }

            const userDataBase = new UserDataBase()
            const userDB = await userDataBase.getUserByEmail(email)

            if (userDB) {
                throw new EmailExist()
            }

            const id = new GenerateId().createId()

            const hashManager = new HashManager()
            const hash = await hashManager.hash(password)

            const user = new User(id, name, nickname, email, hash, role)
            await userDataBase.insertUser(user)

            const payload: ITokenPayload = {
                id,
                role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(201).send({ message: "Usuario cadastrado com sucesso", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })

        }
    }

    async login(req: Request, res: Response) {
        try {
            
            const {email, password} = req.body

            if(!email || !password) {
                throw new MissingFields()
            }

            const userDataBase = new UserDataBase()
            const userDB = await userDataBase.getUserByEmail(email)

            if(!userDB){
                throw new InvalidCredencial()
            }
            
            const hashManager = new HashManager()
            const isPasswordCorrect = await hashManager.compare(password, userDB.password)

            if(!isPasswordCorrect) {
                throw new InvalidCredencial()
            }

            const payload: ITokenPayload= {
                id: userDB.id,
                role: userDB.role
            }
            
            const token = new Authenticator().generateToken(payload)

            res.status(200).send({token})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
            
        }
    }

    async editUser(req: Request, res: Response) {
        try {
            const token = req.headers.authorization
            const {nickname, email} = req.body

            if(!token || !nickname) {
                throw new InvalidCredencial()
            }

            const autheticator = new Authenticator()
            const payload = autheticator.verifyToken(token)
            if(payload.role !== USER_ROLES.ADMIN){
                throw new Error("Somente ADMINS podem realizar alterações")
            }

            const userDataBase = new UserDataBase()
            await userDataBase.editUser(nickname, email)

            res.status(200).send("Atualizado com sucesso!")


        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })

        }
    }

}
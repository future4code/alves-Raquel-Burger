import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entites.ts/User";
import { EmailExist } from "../error/EmailExist";
import { InvalidPassword } from "../error/InvalidPassword";
import { MissingFields } from "../error/MissingFields";
import Authenticator, { ITokenPayload } from "../services/Autheticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserController {
    createUser = async (req: Request, res: Response) => {
        try {
            const {name, email, password} = req.body

            if(!name || !email || !password){
                throw new MissingFields()
            }

            if(password.length < 6){
                throw new InvalidPassword()
            }

            const userDataBase = new UserDataBase()
            const userDB = await userDataBase.getUserByEmail(email)

            if(userDB){
                throw new EmailExist()
            }

            const id = new GenerateId().createId()

            const hashManager = new HashManager()
            const hash = await hashManager.hash(password)

            const user = new User(id, name, email, hash)
            await userDataBase.insertUser(user)

            const payload: ITokenPayload = {
                id
            }

            const token = new Authenticator().generateToken(payload)

            res.status(201).send({"access_token": token})

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
            
        }
    }

    login = async (req: Request, res: Response) => {
        
    }
}
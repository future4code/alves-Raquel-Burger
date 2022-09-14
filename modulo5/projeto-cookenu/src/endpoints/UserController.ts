import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User, USER_ROLES } from "../entites.ts/User";
import { EmailExist } from "../error/EmailExist";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { InvalidPassword } from "../error/InvalidPassword";
import { MissingFields } from "../error/MissingFields";
import { NotAuthorized } from "../error/NotAuthorized";
import Authenticator, { ITokenPayload } from "../services/Autheticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserController {
    createUser = async (req: Request, res: Response) => {
        try {
            const { name, email, password, role } = req.body

            if (!name || !email || !password) {
                throw new MissingFields()
            }

            if (password.length < 6) {
                throw new InvalidPassword()
            }

            const userDataBase = new UserDataBase()
            const userDB = await userDataBase.getUserByEmail(email)

            if (userDB) {
                throw new EmailExist()
            }

            const id = new GenerateId().createId()

            const hashManager = new HashManager()
            const hash = await hashManager.hash(password)

            const user = new User(id, name, email, hash, role)
            await userDataBase.insertUser(user)

            const payload: ITokenPayload = {
                id,
                role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(201).send({ "access_token": token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })

        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }

            const userDataBase = new UserDataBase()
            const userDB = await userDataBase.getUserByEmail(email)

            if (!userDB) {
                throw new InvalidCredencial()
            }

            const hashManager = new HashManager()
            const isPasswordCorrect = await hashManager.compare(password, userDB.password)

            if (!isPasswordCorrect) {
                throw new InvalidCredencial()
            }

            const payload: ITokenPayload = {
                id: userDB.id,
                role: userDB.role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(200).send({ "access_token": token })


        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })

        }
    }

    getUserProfile = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization

            if (!token) {
                throw new InvalidCredencial()
            }

            const autheticator = new Authenticator()
            const payload = autheticator.verifyToken(token)

            const userDataBase = new UserDataBase()
            const userDB = await userDataBase.getUserByID(payload.id)

            if (!userDB) {
                throw new InvalidCredencial()
            }

            res.status(200).send({
                id: userDB.id, name: userDB.name, email: userDB.email
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })

        }
    }

    getOtherProfile = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization
            const {id} = req.params

            if (!token) {
                throw new InvalidCredencial()
            }
            if(!id){
                throw new MissingFields()
            }

            const autheticator = new Authenticator()
            const payload = autheticator.verifyToken(token)

            if( !payload.role ){
                throw new NotAuthorized
            }

            const userDataBase = new UserDataBase()
            const userDB = await userDataBase.getUserByID(id)

            if (!userDB) {
                throw new InvalidCredencial()
            }

            res.status(200).send({
                id: userDB.id, name: userDB.name, email: userDB.email
            })
 
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
            
        }
    }
}
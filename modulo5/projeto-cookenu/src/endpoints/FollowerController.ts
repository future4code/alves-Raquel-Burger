import { Request, Response } from "express";
import { FollowerDataBase } from "../data/FollowerDataBase";
import { UserDataBase } from "../data/UserDataBase";
import { Follower } from "../entites.ts/Follower";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFields";
import Authenticator from "../services/Autheticator";
import { GenerateId } from "../services/GenerateId";

export class FollowerController {
    createFollowed =async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization
            const {followed_id} = req.body

            if (!token) {
                throw new InvalidCredencial()
            }

            const autheticator = new Authenticator()
            const payload = autheticator.verifyToken(token)
            
            const userDataBase = new UserDataBase()
            const followerDB = await userDataBase.getUserByID(payload.id)

            if(!followerDB){
                throw new InvalidCredencial()
            }

            const id = new GenerateId().createId()

            if(!followed_id){
                throw new MissingFields()
            }

            const followed = new Follower(id, followerDB.id, followed_id)

            const followerDataBase = new FollowerDataBase()
            await followerDataBase.insertFollowed(followed)

            res.status(201).send({message: "Usuário seguido com sucesso"})

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}
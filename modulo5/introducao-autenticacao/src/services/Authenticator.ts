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
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN
            }
        )

        return token
        
    }

    verifyToken(token: string): AuthenticationData {
        const payload =  jwt.verify(token, process.env.JWT_KEY as string) as any
        const result = {
            id: payload.id
        }
        return result
    }

}
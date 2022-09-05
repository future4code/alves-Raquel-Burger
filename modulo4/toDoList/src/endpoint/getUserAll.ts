import { Request, Response } from "express";
import selectUserAll from "../data/selectUserAll";

export default async function getUserAll(req: Request, res: Response) {
    try {
        const users = await selectUserAll()

        res.status(200).send(users)
    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })

    }
}
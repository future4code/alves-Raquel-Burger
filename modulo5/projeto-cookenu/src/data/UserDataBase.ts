import { IUserDB, User } from "../entites.ts/User";
import { BaseDatabase } from "./BaseDataBase";

const userTable = "cookenu_user"

export class UserDataBase extends BaseDatabase {

    insertUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
           
        }

        await this.getConnection()
            .insert(userDB)
            .into(userTable)
    }

    getUserByEmail = async (email: string): Promise<IUserDB | undefined> => {
        const result: IUserDB[] = await this.getConnection()
            .select("*")
            .from(userTable)
            .where({ email })
        return result[0]
    }

    getUserByID = async (id: string): Promise<IUserDB | undefined> => {
        const result: IUserDB[] = await this.getConnection()
            .select("*")
            .from(userTable)
            .where({ id })
        return result[0]
    }
}
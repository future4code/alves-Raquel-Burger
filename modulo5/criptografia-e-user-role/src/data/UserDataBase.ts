import { IUserDB, User } from "../model/User";
import { BaseDatabase } from "./BaseDataBase";

const userTable:string = "criptografia_users"

export class UserDataBase extends BaseDatabase{
    
    public async insertUser(user: User) {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            nickname: user.getNickName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await this.getConnection()
        .insert(userDB)
        .into(userTable)
    }

    public async getUserByEmail(email: string): Promise<IUserDB | undefined> {
        const result: IUserDB[] = await this.getConnection()
        .select("*")
        .from(userTable)
        .where({email})
        return result[0]
    }

    public async editUser(nickname: string, email: string) {
       await this.getConnection()
       .update({email})
       .into(userTable)
       .where({nickname})
    }
}
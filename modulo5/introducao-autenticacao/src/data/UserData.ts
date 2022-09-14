import { User } from "../model/User";
import BaseDataBase from "./baseDataBase";

export class UserData extends BaseDataBase {
    async insertUser(user: User): Promise<void> {
        await this.getConnection()
            .insert({
                id: user.getId(),
                email: user.getEmail(),
                password: user.getPassword()
            })
            .into("autenticacao_user")
    }

    async selectUser(email: string) {
        const result = await this.getConnection()
            .select("*")
            .from("autenticacao_user")
            .where("email", email)

        return result
    }

    async selectPassword(password: string) {
        const result = await this.getConnection()
            .select("*")
            .from("autenticacao_user")
            .where("password", password)

        return result

    }

    async selectUserLogin(id: string) {
        const result = await this.getConnection()
            .select("*")
            .from("autenticacao_user")
            .where({id})
        return result
    }
}
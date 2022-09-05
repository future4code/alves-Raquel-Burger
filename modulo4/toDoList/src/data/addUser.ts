import { User } from "../types";
import connection from "./connection";

export default async function addUser(user: User) {
    const {id, name, nickname, email} = user
    const result = await connection("TodoListUser")
    .insert({
        id,
        name,
        nickname,
        email
    })
    return result
}
import connection from "./connection";

export default async function addUser(name:string, nickname: string, email: string) {
    const result = await connection("TodoListUser")
    .insert({
        id: Date.now().toString(),
        name,
        nickname,
        email
    })
    return result
}
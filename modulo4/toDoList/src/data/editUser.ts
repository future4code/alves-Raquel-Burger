import connection from "./connection";

export default async function editUser(name:string, nickname: string, email: string) {
    const result = await connection("TodoListUser")
    .update({
        name,
        nickname,
        email
    })
    return result 
}
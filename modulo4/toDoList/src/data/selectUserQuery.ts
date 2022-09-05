import connection from "./connection";

export default async function selectUserQuery(queryName:string) {
    const result = await connection("TodoListUser")
    .select("TodoListUser.id", "TodoListUser.nickname")
    .where("nickname", "like", `%${queryName}%`)
    .orWhere("email", "like", `%${queryName}%`)

    return(result)
}
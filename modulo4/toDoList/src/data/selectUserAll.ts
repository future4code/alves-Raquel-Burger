import connection from "./connection";


export default async function selectUserAll() {
    const result = await connection("TodoListUser")
    .select("*")
    return result
}
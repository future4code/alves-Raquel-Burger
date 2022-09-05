import connection from "./connection";

export default async function selectTask(id:string){

    const result = await connection("TodoListTask")
    .where("TodoListTask.id", id)
    .join("TodoListUser", "TodoListTask.creator_user_id", "TodoListUser.id")
    .select("*")
    return result
}
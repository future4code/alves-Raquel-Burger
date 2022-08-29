import connection from "./connection";


export default async function selectTaskUser(creator_user_id: string) {

    const result = await connection("TodoListTask")
    .where("TodoListTask.creator_user_id", creator_user_id)
    .join("TodoListUser", "TodoListTask.creator_user_id", "TodoListUser.id")
    .select("TodoListTask.id", "TodoListTask.title", "TodoListTask.description", "TodoListTask.limit_date", "TodoListTask.status", "TodoListTask.creator_user_id", "TodoListUser.nickname")
    return result
}
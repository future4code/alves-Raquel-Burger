import connection from "./connection";

export default async function addTask(title: string, description: string, limit_date: string, creator_user_id: string) {
    const result = await connection("TodoListTask")
    .insert({
        id: Date.now().toString(),
        title,
        description,
        limit_date: limit_date.split('/').reverse().join("-").split('T')[0],
        creator_user_id
    })
    return result
}
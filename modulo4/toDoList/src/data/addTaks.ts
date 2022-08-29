import { Task } from "../types";
import connection from "./connection";

export default async function addTask(task:Task) {
    const result = await connection("TodoListTask")
    .insert(task)
    return result
}
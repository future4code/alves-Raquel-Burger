import connection from "./connection"

export default async function selectUsers(name: string): Promise<any> {
    const result = await connection("aula49_exercicio")
    .where("name", "LIKE", `${name}`)
    return result
}
import connection from "./connection";

export default async function selectuserId(id:string): Promise<any> {
    const result = await connection("labecommerce_users")
    .select("*")
    .where("id", id)
    return result
}
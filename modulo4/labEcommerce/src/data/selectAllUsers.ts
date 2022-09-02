import connection from "./connection";

export default async function selectAllUsers() {
    const result = await connection("labecommerce_users")
    .select('*')

    return result
}
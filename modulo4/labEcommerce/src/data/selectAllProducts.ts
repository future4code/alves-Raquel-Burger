import connection from "./connection";

export default async function selectAllProducts() {
    const result = await connection("labecommerce_products")
    .select('*')

    return result
}
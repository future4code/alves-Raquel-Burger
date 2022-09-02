import app from "./app";
import getProductId from "./endpoints/getProductId";
import getProducts from "./endpoints/getProducts";
import getUserId from "./endpoints/getUserId";
import getAllUsers from "./endpoints/getUsers";
import { postProduct } from "./endpoints/postProduct";
import { postPurchase } from "./endpoints/postPurchase";
import { postUser } from "./endpoints/postUser";

// USERS

app.get("/users", getAllUsers)

app.get("/users/:id", getUserId)

app.post("/users", postUser)

// PRODUCTS

app.get("/products", getProducts)

app.get("/products/:id", getProductId)

app.post("/products", postProduct)

// PURCHASES

app.post("/purchases", postPurchase)
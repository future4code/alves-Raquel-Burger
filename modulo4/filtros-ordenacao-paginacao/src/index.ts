import app from "./app";
import { getAllUsers } from "./endpoints/gettAllUsers";

app.get("/users", getAllUsers)
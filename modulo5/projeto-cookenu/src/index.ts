import app from "./app";
import { UserController } from "./endpoints/UserController";

const userController = new UserController()

app.get('/user/profile', userController.getUserProfile)
app.get('/user/:id', userController.getOtherProfile)

app.post('/signup', userController.createUser)
app.post('/login', userController.login)

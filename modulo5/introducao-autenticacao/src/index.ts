import app from './app'
import { userController } from './endpoints/UserController'

const user = new userController()

app.get('/user', user.getUser)
app.post('/user/singup', user.createUser)
app.post("/user/login", user.login)
app.get("/user/profile", user.getUserLogin)
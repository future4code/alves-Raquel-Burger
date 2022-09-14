import app from "./app";
import { RecipeController } from "./endpoints/RecipeController";
import { UserController } from "./endpoints/UserController";

const userController = new UserController()
const recipeController = new RecipeController()

app.get('/user/profile', userController.getUserProfile)
app.get('/user/:id', userController.getOtherProfile)

app.get('/recipe/:id', recipeController.getRecipeByID)

app.post('/signup', userController.createUser)
app.post('/login', userController.login)

app.post('/recipe',recipeController.createRecipe)

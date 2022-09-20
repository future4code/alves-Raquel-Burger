import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { UserDataBase } from "../data/UserDataBase";
import { Recipe } from "../entites.ts/Recipe";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFields";
import { NotAuthorized } from "../error/NotAuthorized";
import Authenticator from "../services/Autheticator";
import { GenerateId } from "../services/GenerateId";

export class RecipeController {
    createRecipe = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization
            const { title, description } = req.body
            if (!token) {
                throw new InvalidCredencial()
            }

            if (!title || !description) {
                throw new MissingFields()
            }

            const autheticator = new Authenticator()
            const payload = autheticator.verifyToken(token)

            const userDataBase = new UserDataBase()
            const userDB = await userDataBase.getUserByID(payload.id)

            if (!userDB) {
                throw new InvalidCredencial()
            }

            const id = new GenerateId().createId()
            const date = new Date().toLocaleDateString()
            // const formatDate = date.split("/").reverse().join("/")
            const recipe = new Recipe(id, userDB.id, title, description, date)

            const recipeDataBase = new RecipeDataBase()
            await recipeDataBase.insertRecipe(recipe)

            res.status(201).send("Receita criada com sucesso!")


        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })

        }
    }

    getRecipeByID = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization
            const { id } = req.params

            if (!token) {
                throw new InvalidCredencial()
            }
            if (!id) {
                throw new MissingFields()
            }

            const autheticator = new Authenticator()
            const payload = autheticator.verifyToken(token)

            if (!payload.role) {
                throw new NotAuthorized()
            }

            const recipeDataBase = new RecipeDataBase()
            const recipeDB = await recipeDataBase.getRecipeById(id)
            if (!recipeDB) {
                throw new Error("Receita não encontrada")
            }

            res.status(200).send({
                id: recipeDB.id, 
                title: recipeDB.title, 
                description: recipeDB.description, 
                createdAt: recipeDB.createDate
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })

        }
    }
}
import { BaseDatabase } from "../data/BaseDataBase";
import { IRecipeDB, Recipe } from "../entites.ts/Recipe";

const recipeTable = "cookenu_recipes"

export class RecipeDataBase extends BaseDatabase {
    insertRecipe = async (recipe: Recipe) => {
        const recipeDB: IRecipeDB = {
            id: recipe.getId(),
            user_id: recipe.getUser_Id(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            createDate: recipe.getCreateDate()
        }

        await this.getConnection()
            .insert(recipeDB)
            .into(recipeTable)
    }

    getRecipeById = async (id: string): Promise<IRecipeDB | undefined> => {
        const result: IRecipeDB[] = await this.getConnection()
            .select('*')
            .from(recipeTable)
            .where({ id })
        return result[0]
    }
}
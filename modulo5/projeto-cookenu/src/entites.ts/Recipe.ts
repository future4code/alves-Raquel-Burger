export interface IRecipeDB {
    id: string,
    user_id: string,
    title: string,
    description: string,
    createDate: string
}

export class Recipe {
    private id: string
    private user_id: string
    private title: string
    private description: string
    private createDate: string

    constructor(
        id: string,
        user_id: string,
        title: string,
        description: string,
        createDate: string
    ){
        this.id = id
        this.user_id = user_id
        this.title = title
        this.description = description
        this.createDate = createDate
    }
    public getId(){
        return this.id
    }
    public getUser_Id(){
        return this.user_id
    }
    public getTitle(){
        return this.title
    }
    public getDescription(){
        return this.description
    }
    public getCreateDate(){
        return this.createDate
    }

}
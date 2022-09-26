import { PostDatabase } from "../database/PostDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ParamsError } from "../errors/ParamsError"
import { ICreatePostInputDTO, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public createPost = async (input: ICreatePostInputDTO) => {
        const {token, content} = input

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new AuthenticationError()
        }

        if(content.length < 1){
            throw new Error("A postagem deve ter mais de um caractere!")
        }

        if(typeof content !== "string"){
            throw new ParamsError()
        }

        const id = this.idGenerator.generate()

        const post = new Post(id, content, payload.id)

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post criado com sucesso",
            post
        }

        return response
    }
    public getPosts =async (token: string) => {

        const payload = this.authenticator.getTokenPayload(token)
        
        if(!payload){
            throw new AuthenticationError()
        }

        const postDB = await this.postDatabase.getPosts()

        const posts = postDB.map((post) => {
            return new Post(post.id, post.content, post.user_id)
        })

        for(let post of posts){
            const postID = post.getId()
            const qtdLikes = await this.postDatabase.getLikes(postID) as number
            
            post.setLikes(qtdLikes)
        }

        const response = {
            posts
        }
        
    }

}
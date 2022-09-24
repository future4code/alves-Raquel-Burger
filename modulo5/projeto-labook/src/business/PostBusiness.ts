import { PostDatabase } from "../database/PostDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ParamsError } from "../errors/ParamsError"
import { IPostInputDTO, Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public addPost = async (input: IPostInputDTO) => {
        const content = input.content
        const token = input.token

        if(!content){
            throw new ParamsError()
        }

        if(typeof content !== "string" || content.length < 1) {
            throw new Error("O Post deve conter pelo menos um caractere")
        }

        if(!token) {
            throw new AuthenticationError()
        }

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        // const userDB = await this.user

        // const id = this.idGenerator.generate()
        // const 

        // const post = new Post(
        //     id,
        //     content: AuthenticationError,

        // )


    }

}
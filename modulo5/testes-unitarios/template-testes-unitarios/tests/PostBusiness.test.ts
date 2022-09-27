import { PostBusiness } from "../src/business/PostBusiness"
import { IAddLikeInputDTO, ICreatePostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO, IGetPostsInputIDtDTO, IRemoveLikeInputDTO, Post } from "../src/models/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"

describe("Teste PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Crie o teste de sucesso do método getPosts da PostBusiness", async () => {
        const input: IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response = await postBusiness.getPosts(input)
        expect(response.posts.length).toBe(3)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })

    test("Crie o teste de sucesso do método createPost da PostBusiness", async () => {
        const input: ICreatePostInputDTO = {
            token: "token-mock-normal",
            content: "Teste do mock"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toBe("Post criado com sucesso")
        expect(response.post).toBeInstanceOf(Post)
        expect(response.post.getId()).toBe("id-mock")
        expect(response.post.getContent()).toBe("Teste do mock")
        expect(response.post.getLikes()).toBe(0)
        expect(response.post.getUserId()).toBe("id-mock")

    })

    test("Teste deletePost", async () => {
        const input: IDeletePostInputDTO = {
            token: "token-mock-admin",
            postId: "201"
        }

        const response = await postBusiness.deletePost(input)

        expect(response.message).toBe("Post deletado com sucesso")
    })

    test("Teste addLike", async () => {
        const input: IAddLikeInputDTO ={
            token: "token-mock-normal",
            postId: "202"
        }

        const response = await postBusiness.addLike(input)
        expect(response.message).toBe("Like realizado com sucesso")
    })

    test("Deve remover um like", async () => {
        const input: IRemoveLikeInputDTO = {
            token: "token-mock-normal",
            postId: "201"
        }
        const response = await postBusiness.removeLike(input)

        expect(response.message).toBe("Like removido com sucesso")
    })
})
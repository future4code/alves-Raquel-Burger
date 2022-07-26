import React from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestdata from '../../hooks/useRequestdata'
import { BodyPost, ContainerCard, Votes, ContainerVoteComment, TitlePost, UserPost, Comments } from './FeedStyled'
import Up from '../../assets/up.svg'
import Down from '../../assets/down.svg'
import Comment from '../../assets/comment.svg'

const FeedPage = () => {
  const posts = useRequestdata([], `${BASE_URL}/posts`)
  useProtectedPage()
  console.log(posts)

  const postCards = posts.map((post) => {
    return (
      <ContainerCard key={post.id}>
        <UserPost>Enviado por: {post.username}</UserPost>
        <TitlePost>{post.title}</TitlePost>
        <BodyPost>{post.body}</BodyPost>
        <ContainerVoteComment>
          <Votes> <img src={Up} alt = "imagem seta para cima"/> <p>10</p><img src={Down} alt="imagem seta para baixo" /></Votes>
          <Comments> <img src={Comment} alt = "imagem balão de comentário"/> <p>10</p></Comments>
        </ContainerVoteComment>
      </ContainerCard>
    )

  })

  return (
    <div>
      {postCards}
    </div>
  )
}

export default FeedPage

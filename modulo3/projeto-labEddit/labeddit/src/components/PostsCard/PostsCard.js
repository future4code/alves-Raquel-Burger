import React from 'react'
import { BodyPost, ContainerCard, Votes, ContainerVoteComment, TitlePost, UserPost, Comments } from './PostsCardStyled'
import Up from '../../assets/up.svg'
import Down from '../../assets/down.svg'
import Comment from '../../assets/comment.svg'

const PostsCard = (props) => {
  return (
    <ContainerCard key={props.post.id}>
        <UserPost>Enviado por: {props.post.username}</UserPost>
        <TitlePost>{props.post.title}</TitlePost>
        <BodyPost>{props.post.body}</BodyPost>
        <ContainerVoteComment>
          <Votes> <img src={Up} alt="imagem seta para cima" /> <p>10</p><img src={Down} alt="imagem seta para baixo" /></Votes>
          <Comments onClick={() => props.onClickComment(props.post.id)}> <img src={Comment} alt="imagem balão de comentário" /> <p>10</p></Comments>
        </ContainerVoteComment>
      </ContainerCard>
  )
}

export default PostsCard
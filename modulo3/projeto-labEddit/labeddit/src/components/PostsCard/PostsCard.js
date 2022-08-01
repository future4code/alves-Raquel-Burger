import React from 'react'
import { BodyPost, ContainerCard, Votes, ContainerVoteComment, TitlePost, UserPost, Comments } from './PostsCardStyled'
import Up from '../../assets/up.svg'
import Down from '../../assets/down.svg'
import Comment from '../../assets/comment.svg'

const PostsCard = (props) => {
  return (
    <ContainerCard >
        <UserPost>Enviado por: {props.post.username}</UserPost>
        <TitlePost>{props.post.title}</TitlePost>
        <BodyPost>{props.post.body}</BodyPost>
        <ContainerVoteComment>
          <Votes> <img src={Up} alt="imagem seta para cima" onClick={() => props.upLike(props.post.id)} /> 
          <p>{props.post.voteSum} </p>
          <img src={Down} alt="imagem seta para baixo" onClick={() => props.downDislike(props.post.id)} /></Votes>
          <Comments onClick={() => props.onClickComment(props.post.id)}> <img src={Comment} alt="imagem balão de comentário" /> {props.post.commentCount}</Comments>
        </ContainerVoteComment>
      </ContainerCard>
  )
}

export default PostsCard
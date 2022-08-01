import React from 'react'
import { BodyPost, ContainerCard, Votes, ContainerVoteComment, TitlePost, UserPost, Comments } from '../PostsCard/PostsCardStyled'
import Up from '../../assets/up.svg'
import Down from '../../assets/down.svg'
import Comment from '../../assets/comment.svg'

const CommentCard = (props) => {
  return (
    <ContainerCard >
      <UserPost>Enviado por: {props.comment.username}</UserPost>
      <BodyPost>{props.comment.body}</BodyPost>
      <ContainerVoteComment>
        <Votes>
          <img src={Up} alt="imagem seta para cima" onClick={() => props.upLike(props.comment.id)} />
          <p>{props.comment.voteSum} </p>
          <img src={Down} alt="imagem seta para baixo" onClick={() => props.downDislike(props.comment.id)} />
        </Votes>
      </ContainerVoteComment>
    </ContainerCard>
  )
}

export default CommentCard
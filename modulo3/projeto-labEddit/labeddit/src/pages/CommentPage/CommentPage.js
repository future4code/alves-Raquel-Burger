import React, { useState } from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestdata from '../../hooks/useRequestdata'
import { BASE_URL } from '../../constants/urls'
import useForm from '../../hooks/useForm'
import PostsCard from '../../components/PostsCard/PostsCard'
import axios from 'axios'
import { createComment } from '../../Services/posts'
import { Form } from '../FeedPage/FeedStyled'
import CommentCard from '../../components/CommentCard/CommentCard'
import { ButtonComment, ContainerCommentPage, LineImg } from './CommentSyted'
import Line from '../../assets/line.svg'



const CommentPage = () => {
  useProtectedPage()
  const params = useParams()
  const [refresh, setRefresh] = useState(false)
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { form, onChange, cleanFields } = useForm({ body: "" })
  const comments = useRequestdata([], `${BASE_URL}/posts/${params.id}/comments`, refresh)
  const posts = useRequestdata([], `${BASE_URL}/posts`, refresh)

  const onSubmitComment = (event) => {
    event.preventDefault()
    createComment(form, params.id, cleanFields, setRefresh, refresh, setIsLoading)

  }
  const upLike = (id) => {
    if (like === true) {
      RemoveVote(setLike, like, id)
      setLike(!like)
    } else {
      const body = { direction: 1 }
      axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
        .then((res) => {
          setLike(!like)
          setRefresh(!refresh)
        })
        .catch((err) => {
          alert(err.response.data)
        })
    }
  }

  const downDislike = (id) => {
    if (dislike === true) {
      RemoveVote(setDislike, dislike, id)
      setDislike(!dislike)
    } else {
      const body = { direction: -1 }
      axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
        .then((res) => {
          setDislike(!dislike)
          setRefresh(!refresh)
        })
        .catch((err) => {
          alert(err.response.data)
        })
    }
  }

  const RemoveVote = (setVote, voteName, id) => {
    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {
        setVote(!voteName)
        setRefresh(!refresh)
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }

  const getPost = posts.map((post) => {
    if (post.id === params.id) {
      return (
        <PostsCard key={post.id} upLike={upLike} downDislike={downDislike} post={post} onClickComment={""} />
      )
    } else {
      return (<div key={post.id}></div>)
    }
  })

  const showComments = comments.map((comment) => {
    return (
      <CommentCard key={comment.id} comment={comment} upLike={upLike} downDislike={downDislike} />

    )
  })

  return (
    <ContainerCommentPage>
      {comments ?
        <>
          {getPost}
          <Form onSubmit={onSubmitComment}>
            <textarea name={"body"} onChange={onChange} value={form.body} placeholder="Adicionar comentário" required></textarea>
          <ButtonComment type='submit'>Responder</ButtonComment>
          </Form>
          <LineImg src={Line} alt="linha divisória" />
          {showComments}
        </> 
        : <p>Carregando</p>
  
  }
    </ContainerCommentPage>
  )
}

export default CommentPage
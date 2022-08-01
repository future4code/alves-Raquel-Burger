import React, { useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestdata from '../../hooks/useRequestdata'
import { LoadingGif, LineImg, Form, ContainerFeed, ButtonPost } from './FeedStyled'
import { goToComment } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import Line from '../../assets/line.svg'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import Loading from '../../components/Loading/Loading'
import PostsCard from '../../components/PostsCard/PostsCard'
import { createPost } from '../../Services/posts.js'
import { toast } from 'react-toastify'
import CircleLoading from '../../assets/loading.gif'

const FeedPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const { form, onChange, cleanFields } = useForm({ title: "", body: "" })
  const posts = useRequestdata([], `${BASE_URL}/posts?size=500`, refresh)
  const navigate = useNavigate()
  useProtectedPage()

  const onClickComment = (id) => {
    goToComment(navigate, id)
  }

  const onSubmitPost = (event) => {
    event.preventDefault()
    createPost(form, cleanFields, setRefresh, refresh, setIsLoading)
   
  }

  const upLike = (id) => {
    if (like === true) {
      RemoveVote(setLike, like, id)
      setLike(!like)
    } else {
      const body = { direction: 1 }
      axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then((res) => {
        setLike(!like)
        setRefresh(!refresh)
        toast.success("Curtido")
      })
      .catch((err) => {
        toast.error(err.response.data)
      })
    }
  }
  
  const downDislike = (id) => {
    if(dislike === true) {
      RemoveVote(setDislike, dislike, id)
      setDislike(!dislike)
    } else {
      const body = { direction: -1 }
      axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then((res) => {
        setDislike(!dislike)
        setRefresh(!refresh)
        toast.info("Descurtido")
      })
      .catch((err) => {
        toast.error(err.response.data)
      })
    }
  }

  const postCards = posts.map((post) => {
    return (
      <PostsCard  key={post.id} upLike={upLike} downDislike={downDislike} post = {post} onClickComment = {onClickComment}/>
       )

  })

  const RemoveVote = (setVote, voteName, id) => {
    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
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

  return (
    <ContainerFeed>
      <Form onSubmit={onSubmitPost}>
        <input name={"title"} value={form.title} onChange={onChange} placeholder='Título' required></input>
        <textarea name={"body"} value={form.body} onChange={onChange} placeholder='Escreva seu post...' required></textarea>
        <ButtonPost>{isLoading ? <LoadingGif src={CircleLoading} /> : <>Postar</>}</ButtonPost>
      </Form>
      <LineImg src={Line} alt="Linha separação de botões" />
     
        {postCards.length > 0 ? postCards : <Loading />}
      

    </ContainerFeed>
  )
}

export default FeedPage

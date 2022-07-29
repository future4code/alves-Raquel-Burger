import React, { useState } from 'react'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestdata from '../../hooks/useRequestdata'
import { LoadingGif, LineImg, BodyPost, ContainerCard, Votes, ContainerVoteComment, TitlePost, UserPost, Comments, Form, ContainerFeed, ButtonPost } from './FeedStyled'
import Up from '../../assets/up.svg'
import Down from '../../assets/down.svg'
import Comment from '../../assets/comment.svg'
import { goToComment } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import Line from '../../assets/line.svg'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import Loading from '../../components/Loading/Loading'


const FeedPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { form, onChange, cleanFields } = useForm({ title: "", body: "" })
  const navigate = useNavigate()
  const posts = useRequestdata([], `${BASE_URL}/posts`)
  useProtectedPage()

  const onClickComment = (id) => {
    goToComment(navigate, id)
  }

  const createPost = () => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/posts`, form, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((res) => {
        setIsLoading(false)
        alert(res.data)
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err.data)
      })

  }

  const onSubmitPost = (event) => {
    event.preventDefault()
    createPost()
    cleanFields()
  }


  const postCards = posts.map((post) => {
    return (
      <ContainerCard key={post.id}>
        <UserPost>Enviado por: {post.username}</UserPost>
        <TitlePost>{post.title}</TitlePost>
        <BodyPost>{post.body}</BodyPost>
        <ContainerVoteComment>
          <Votes> <img src={Up} alt="imagem seta para cima" /> <p>10</p><img src={Down} alt="imagem seta para baixo" /></Votes>
          <Comments onClick={() => onClickComment(post.id)}> <img src={Comment} alt="imagem balão de comentário" /> <p>10</p></Comments>
        </ContainerVoteComment>
      </ContainerCard>
    )

  })

  return (
    <ContainerFeed>
      <Form onSubmit={onSubmitPost}>
        <input name={"title"} value={form.title} onChange={onChange} placeholder='Título' required></input>
        <textarea name={"body"} value={form.body} onChange={onChange} placeholder='Escreva seu post...' required></textarea>
        <ButtonPost>{isLoading ? <LoadingGif src={Loading} /> : <>Postar</>}</ButtonPost>
      </Form>
      <LineImg src={Line} alt="Linha separação de botões" />
     
        {postCards.length > 0 ? postCards : <Loading />}
      

    </ContainerFeed>
  )
}

export default FeedPage

import React, { useState, useEffect } from 'react'
import { BASE_URL } from "../constants/urls"
import axios from 'axios'
import { ContainerHome, Image, TextContainer, Button, ButtonContainer } from './Styled'
import Clear from './Clear'
import AddHeart from '../assets/Addheart.png'
import No from '../assets/no.png'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Fire from '../assets/fire.png'

const Home = () => {
  const [users, setUsers] = useState({})
  const [likeDislike, setLikeDislike] = useState("normal")

  const getUsers = () => {
    axios.get(`${BASE_URL}person`)
      .then((res) => {
        setUsers(res.data.profile)
        setLikeSlideNormal()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const setLikeSlide = () => {
    setLikeDislike("like")
  }
  const setDislikeSlide = () => {
    setLikeDislike("dislike")
  }
  const setLikeSlideNormal = () => {
    setLikeDislike("normal")
  }

  const choosePerson = (choice) => {
    axios.post(`${BASE_URL}choose-person`,
      {
        "id": users.id,
        "choice": choice
      }
    )
      .then((res) => {
        if (choice === true) {
          setLikeSlide()
        } else if (choice === false) {
          setDislikeSlide()
        }
        if (res.data.isMatch) {
          toast(`Uhul, você teve um match com ${users.name}!`, {
            icon: <img src={Fire} height='25px' width='25px' />
          })
        }
        getUsers()

      })
      .catch((err) => {
        console.log("err")
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      {users ? (
        <ContainerHome>
          <Image likeDislike={likeDislike} src={users.photo} alt={users.name} />
          <TextContainer>
            <p>{users.name}, {users.age}</p>
            <p>{users.bio}</p>
          </TextContainer>
          <ButtonContainer>
            <Button type='button' onClick={() => choosePerson(false)}><img src={No} height='40px' width='40px' /></Button>
            <Button type='button' onClick={() => choosePerson(true)}><img src={AddHeart} height='40px' width='40px' /></Button>
          </ButtonContainer>
        </ContainerHome>)
        :
        <Clear getUsers={getUsers} />}
    </div>
  )
}

export default Home
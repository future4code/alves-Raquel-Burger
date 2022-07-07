import React, { useState, useEffect } from 'react'
import { BASE_URL } from "../constants/urls"
import axios from 'axios'
import { ContainerHome, Image, TextContainer, Button, ButtonContainer, ImageContainer } from './Styled'
import Clear from './Clear'
import AddHeart from '../assets/Addheart.png'
import No from '../assets/no.png'


const Home = () => {
  const [users, setUsers] = useState({})
  const [imgEffect, setImgEffect] = useState("")

  const getUsers = () => {
    axios.get(`${BASE_URL}person`)
      .then((res) => {
        setUsers(res.data.profile)
        
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const choosePerson = (id) => {
    axios.post(`${BASE_URL}choose-person`,
      {
        "id": id,
        "choice": true
      }
    )
      .then((res) => {
        if (res.data.isMatch) {
          alert("deu match")
        }
        setImgEffect(true)
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
          <ImageContainer >
          <Image imgEffect={imgEffect}  src={users.photo} alt={users.name} />
          </ImageContainer>
          <TextContainer>
          <p>{users.name}, {users.age}</p>
          <p>{users.bio}</p>
          </TextContainer>
          <ButtonContainer>
          <Button type='button' onClick={getUsers}><img src={No} height='40px' width='40px'/></Button>
          <Button type='button' onClick={() => choosePerson(users.id)}><img src={AddHeart} height='40px' width='40px'/></Button>
          </ButtonContainer>
        </ContainerHome>)
        :
        // loading por aqui
        <Clear getUsers={getUsers} />}
    </div>
  )
}

export default Home
import React, { useState, useEffect } from 'react'
import { BASE_URL } from "../constants/urls"
import axios from 'axios'
import { ContainerHome, Image } from './Styled'
import Clear from './Clear'



const Home = () => {
  const [users, setUsers] = useState({})

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
        getUsers()
      })
      .catch((err) => {
        console.log("err")
      })
  }

  // const clearMatches = () => {
  //   axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel/clear')
  //     .then((response) => {
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  // const handleOnclick = () => {
  //   clearMatches()
  //   alert("Perfis resetados!")
  //   getUsers()
  // }


  useEffect(() => {
    getUsers()
  }, [])



  return (
    <div>
      {users ? (
        <ContainerHome>
          <Image src={users.photo} alt={users.name} />
          <p>{users.name}</p>
          <p>{users.age}</p>
          <p>{users.bio}</p>
          <button onClick={() => choosePerson(users.id)}>Gostei</button>
          <button onClick={getUsers}>Não Gostei</button>
        </ContainerHome>)
        :
        // loading por aqui
        <Clear getUsers={getUsers}/>}
    </div>
  )
}

export default Home
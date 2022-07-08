import React, { useState, useEffect } from 'react'
import { BASE_URL } from "../constants/urls"
import axios from 'axios'
import Clear from './Clear'
import { CardMatches, CardScroll } from './Styled'


const Matches = () => {
  const [usersMatches, setUsersMatches] = useState ([])
  const getMatches = () => {
    axios.get(`${BASE_URL}matches`)
    .then((res) =>{
      setUsersMatches(res.data.matches)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  useEffect(() => {
    getMatches()
  },[usersMatches])

  const showMatches = usersMatches.map((user) => {
    return(
      <CardMatches key={user.id}>
      <img src={user.photo} alt={user.name} />
      <p>{user.name}</p>
      <p>Oi, sumida!</p>
      </CardMatches>
    )
  })
  return (
    <CardScroll>
      {showMatches}
      <Clear />
    </CardScroll>
  )
}

export default Matches
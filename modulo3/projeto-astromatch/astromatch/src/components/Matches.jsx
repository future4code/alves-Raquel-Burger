import React, { useState, useEffect } from 'react'
import { BASE_URL } from "../constants/urls"
import axios from 'axios'
import Clear from './Clear'


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
      <div>
      <img src={user.photo} alt={user.name} />
      <p>{user.name}</p>
      </div>
    )
  })
  return (
    <div>
      {showMatches}
      <Clear />
    </div>
  )
}

export default Matches
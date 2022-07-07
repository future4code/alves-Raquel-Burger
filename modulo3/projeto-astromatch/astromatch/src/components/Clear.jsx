import React from 'react'
import { BASE_URL } from '../constants/urls'
import axios from 'axios'

function Clear(props) {
    const clearMatches = () => {
        axios.put(`${BASE_URL}clear`)
          .then((response) => {
            alert("Perfis resetados!")
        })
        .catch((error) => {
            console.log(error)
        })
        props.getUsers()
      }
    

  return (
    
    <button onClick={() => clearMatches()}>Resetar</button>

  )
}

export default Clear
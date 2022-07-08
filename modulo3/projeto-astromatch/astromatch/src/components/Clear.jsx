import React from 'react'
import { BASE_URL } from '../constants/urls'
import axios from 'axios'
import Reset from '../assets/reset.png'
import { Button, ContainerClear } from './Styled'

function Clear(props) {
    const clearMatches = () => {
        axios.put(`${BASE_URL}clear`)
          .then((response) => {
            alert("Perfis resetados!")
        })
        .catch((error) => {
            console.log(error)
        })
        {props.getUsers()}
      }
    

  return (
    <ContainerClear>
    <Button onClick={() => clearMatches()}><img src={Reset} height='50px' width='50px'/></Button>
    </ContainerClear>
  )
}

export default Clear
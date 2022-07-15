import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { goToLogin } from '../routes/coordinator'


const UseProtectedPage = () => {

   const navigate = useNavigate() 
   
   useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
          console.log("não está logado")
          goToLogin(navigate)
        }
      }, [navigate])
    
  return (
    <div>

    </div>
  )
}

export default UseProtectedPage
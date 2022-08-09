import React from 'react'
import {useNavigate} from 'react-router-dom'
import { ButtonClose, ButtonLogin, ContainerHeader, LogoHeader } from './HeaderStyled'
import Logo from '../../assets/logo.png'
import { goToLogin, goBack, goToFeed } from '../../routes/coordinator'
const Header = () => {
   const navigate = useNavigate()

   const logout = () => {
    localStorage.removeItem("token")
    goToLogin(navigate)
   }

    const showHeader = () => {
        if (window.location.pathname === "login") {
            return (
                <>
                </>
            )
        } else if (window.location.pathname === "/singup") {
            return (
                <ContainerHeader>
                    <LogoHeader src={Logo} />
                    <ButtonLogin onClick={() => goToFeed(navigate)} >Entrar</ButtonLogin>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/") {
            return (
                <ContainerHeader>
                    <LogoHeader src={Logo} />
                    <ButtonLogin onClick={logout}>Logout</ButtonLogin>
                </ContainerHeader>
            )
        } else if (window.location.pathname.includes("/comment")) {
            return (
                <ContainerHeader>
                    <ButtonClose onClick={() => goBack(navigate)}> X </ButtonClose>
                    <LogoHeader src={Logo} />
                    <ButtonLogin onClick={logout}>Logout</ButtonLogin>
                </ContainerHeader>
            )
        }
    }


    return (
        <>
            {showHeader()}
        </>
    )
}

export default Header
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { ButtonClose, ButtonLogin, ContainerHeader, LogoHeader } from './HeaderStyled'
import Logo from '../../assets/logo.png'
import { goToLogin, goBack } from '../../routes/coordinator'
const Header = () => {
   const navigate = useNavigate()

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
                    <ButtonLogin>Entrar</ButtonLogin>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/") {
            return (
                <ContainerHeader>
                    <LogoHeader src={Logo} />
                    <ButtonLogin onClick={() => goToLogin(navigate)}>Logout</ButtonLogin>
                </ContainerHeader>
            )
        } else if (window.location.pathname === "/comment") {
            return (
                <ContainerHeader>
                    <ButtonClose onClick={() => goBack(navigate)}> X </ButtonClose>
                    <LogoHeader src={Logo} />
                    <ButtonLogin onClick={() => goToLogin(navigate)}>Logout</ButtonLogin>
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
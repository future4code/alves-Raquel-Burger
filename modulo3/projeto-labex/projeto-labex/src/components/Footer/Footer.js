import React from 'react'
import Linkedin from '../../assets/linkedin.png'
import { ContainerFooter } from './FooterStyled'

const FooterStyled = () => {
  return (
    <ContainerFooter>
        <p>Desenvolvido por Raquel Bürger</p>
        <a target={'_blank'} rel='noreferrer' href="https://www.linkedin.com/in/raquelburger/">
        <img src={Linkedin} alt='Logo Linkedin' height='25px' width='25px' />
        </a>
        
    </ContainerFooter>
  )
}

export default FooterStyled
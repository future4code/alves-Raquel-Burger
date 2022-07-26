import styled from "styled-components";

export const ContainerLogin = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    border: 1px blue solid;
     
`
export const ContainerLogo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px red solid;
    `

export const LogoLogin = styled.img `
    height: 5.25rem;
    width: 5.25rem;
`

export const LogoBigText = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: #373737;
`

export const LogoTextSmall = styled.h2`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 22.688rem;
    border: 1px orange solid;
    input{
        height: 3.75rem;
        border-radius: 4px;
        border: 1px solid #D5D8DE;
        font-weight: 400;
        font-size: 16px;
        color: #323941;
        opacity: 0.8;

    }
`

export const ContainerButtons = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid green;
`

export const ButtonContinue = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.813rem 7.063rem;
    border-radius: 27px;
    width: 22.813rem;
    height: 3.188rem;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: none;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
`
export const ButtonCreate = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.813rem 7.063rem;
    border-radius: 27px;
    width: 22.813rem;
    height: 3.188rem;
    border: 1px solid #FE7E02;
    background-color: transparent;
    color: #FE7E02;
    font-family: 'Noto Sans';
    font-weight: 700;
    font-size: 18px;
`
 export const LineImg = styled.img`
    width: 22.813rem;
    `
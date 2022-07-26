import styled from "styled-components";

export const ContainerSingUp = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
`

export const BigText = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: #373737;
    text-align: start;
`

export const FormSingUp = styled.form`
    padding-top: 12rem;
    display: flex;
    flex-direction: column;
    width: 22.688rem;
    input{
        height: 3.75rem;
        border-radius: 4px;
        border: 1px solid #D5D8DE;
        font-weight: 400;
        font-size: 16px;
        color: #323941;
        opacity: 0.8;
        margin-top: 0.5rem;
    }
`
export const LegalText = styled.p`
    font-size: 14px;
    font-family: 'Noto Sans';
    font-weight: 400;
    text-align: start;
    padding-left: 0.5rem;
    a {
        text-decoration: none;
        color: #4088CB;
    }
`

export const ContainerCheckBox = styled.section`
    display: flex;
    align-items: center;
    padding-left: 0.5rem;


    input {
        color: #C4C4C4;
    border-radius: 2px;
    opacity: 0.8; 
    }
   
`

export const ButtonRegister = styled.button`
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
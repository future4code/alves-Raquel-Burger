import styled from "styled-components";

export const ContainerFeed = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`


export const LineImg = styled.img`
    width: 22.813rem;
    margin-top: 1.125rem;
    margin-bottom: 1.125rem;
    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 22.688rem;
  
    input, textarea {
        height: 2.4rem;
        border-radius: 12px;
        border: 1px solid #D5D8DE;
        font-weight: 400;
        font-size: 18px;
        color: #323941;
        opacity: 0.8;
        margin-top: 0.5rem;
        background: #EDEDED;
        font-family: 'IBM Plex Sans';
        padding: 0.5rem;
    };
    textarea{
        height: 5rem;
    };
    input{
        margin-top: 1.8rem ;
    }
`

export const ButtonPost = styled.button`
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
    margin-top: 0.75rem;
`
export const LoadingGif = styled.img`
    width: 50px;
    height: 50px;
    background-color: transparent;
   
`

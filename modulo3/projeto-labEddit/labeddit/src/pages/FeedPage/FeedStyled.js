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

export const ContainerCard = styled.section`
    display: flex;
    flex-direction: column;
    border: 1px solid #E0E0E0;
    padding: 0.563rem 0.625rem;
    border-radius: 12px;
    background-color: #FBFBFB;
    margin: 1.5rem;
    width: 22.688rem;

`

export const UserPost = styled.p`
  color: #6F6F6F; 
  font-family: 'IBM Plex Sans';
  font-weight: 400;
  font-size: 12px;
`
export const TitlePost = styled.h1`
  font-family: 'IBM Plex Sans';
  font-weight: 600;
  font-size: 23px;
  margin: 0;

`
export const BodyPost = styled.p`
  font-family: 'IBM Plex Sans';
  font-weight: 400;
  font-size: 18px;
`

export const ContainerVoteComment = styled.section`
   display: flex;
`
export const Votes = styled.section`
    border: 1px solid #ECECEC;
    border-radius: 28px;
    padding: 0.02rem;
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 6.125rem;
    margin-right: 0.5rem;
    img {
        width: 0.875rem;
        height: 0.875rem;
        cursor: pointer;
    }
    p {
        color: #6F6F6F; 
        font-family: 'IBM Plex Sans';
        font-weight: 700;
        font-size: 0.625rem;
    }
`
export const Comments = styled.section`
    border: 1px solid #ECECEC;
    border-radius: 28px;
    padding: 0.02rem;
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 4.146rem;
    img {
        width: 0.875rem;
        height: 0.875rem;
        cursor: pointer;
    }
    p {
        color: #6F6F6F; 
        font-family: 'IBM Plex Sans';
        font-weight: 700;
        font-size: 0.625rem;
    }
`

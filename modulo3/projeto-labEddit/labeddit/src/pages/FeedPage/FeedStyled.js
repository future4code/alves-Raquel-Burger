import styled from "styled-components";

export const ContainerCard = styled.section`
    display: flex;
    flex-direction: column;
    border: 1px solid #E0E0E0;
    padding: 0.563rem 0.625rem;
    border-radius: 12px;
    background-color: #FBFBFB;
    margin: 1.5rem;
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
    }
    p {
        color: #6F6F6F; 
        font-family: 'IBM Plex Sans';
        font-weight: 700;
        font-size: 0.625rem;
    }
`

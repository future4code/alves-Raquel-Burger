import styled from "styled-components";
import { keyframes } from "styled-components";

// app
export const ContainerApp = styled.section`
    display: flex;
    justify-content: center;
`
export const ContainerCardApp = styled.section`
    height: 660px;
    width: 370px;
    border: 1px #4BB2F2 solid;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;
`
// Header
export const HeaderAstro = styled.div`
   display: flex;
   justify-content: space-between;
   height: 3rem;
   align-items: center;
   padding-left: 1rem;
   padding-right: 1rem;
`
export const Titulo = styled.h1`
    color: #4BB2F2;
    font-size: 1.8rem;
    text-shadow: -3px 0px 4px rgba(15, 242, 242, 0.63);
`
export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    :hover{
        transform: scale(1.5);
    }
`
const breatheAnimation = keyframes`
 0% { transform: scale(.3) }
 50% { transform: scale(.7) }
 100% { transform: scale(1.5)}
`
export const ButtonLike = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover{
        animation-name: ${breatheAnimation};
        animation-duration: 1s;
        animation-iteration-count: infinite;
    }
    
`
// Home
export const ContainerHome = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    max-height: 98%;
`
export const Image = styled.img`
    height: 25rem;
    width: 85%;
    object-fit: contain, cover;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;    
    margin-top: 0.5rem;
    transition: all 2s ease;
  ${(props) => props.likeDislike === "like" && "transform: translate(15rem, 5rem) rotate(22deg)"};
  ${(props) => props.likeDislike === "like" && "opacity: 0"};
  ${(props) => props.likeDislike === "normal" && ""};
  ${(props) => props.likeDislike === "dislike" && "transform: translate(-15rem, 5rem) rotate(-22deg)"};
  ${(props) => props.likeDislike === "dislike" && "opacity: 0"};

`
export const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    height: 9rem;
`
export const ButtonContainer = styled.section`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: flex-end;
`
// Macthes
export const CardScroll = styled.div`
    width: 95%;
    height: 80%;
    overflow-y: scroll;
    margin-top: 1rem;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: rgba(15, 242, 242, 0.4);
    border-radius: 10px;
    }
`
export const CardMatches = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    border-radius: 10px;
    margin: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    padding-right: 0.5rem;
    img{
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
    border: 2px dotted #49bab5 ;
    padding: 2px;
    margin: 2px;
    }
 `
export const ContainerRaquel = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
 `
// Clear
export const ContainerClear = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`
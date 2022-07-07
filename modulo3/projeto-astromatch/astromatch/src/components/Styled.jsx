import styled from "styled-components";


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
    height: 100%;
    width: 100%;
    object-fit: contain, cover;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;    
    margin-top: 0.5rem;
    transition: all 0.7s ease-in;
  ${(props) => props.imgEffect && "transform: translate(15rem, 5rem) rotate(15deg)"};
  ${(props) => props.imgEffect && "opacity: 1"};
`
export const ImageContainer = styled.section`
    height: 25rem;
    width: 85%;
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
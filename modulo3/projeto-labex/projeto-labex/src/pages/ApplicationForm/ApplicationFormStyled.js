import styled from "styled-components";

export const ContainerApplication = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 60vw;
    box-shadow: rgba(30, 235, 165, 0.15) 0px 15px 25px, rgba(30, 235, 165, 0.05) 0px 5px 10px;
    border: 1px black solid;
    input, select{
        font-size: 20px;
        margin: 0.2rem;
        height: 25px;
    }
`
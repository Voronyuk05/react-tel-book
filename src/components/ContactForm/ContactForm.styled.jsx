import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1vw;
    width: 25vw;
    border: 1px solid gray;
    border-radius: 40px;
    padding: 1.5vw;
`

export const SumbmitButton = styled.button`
    width: 10vw;
    height: 2vw;
    border-radius: 30px;
    border: none;
    background-color: #50C9CE;
    &:hover {
        background: #5e548e;
        color: white;
    }
`

export const Input = styled.input`
    width: 14vw;
    height: 2vw;
    border-radius: 30px;
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.8vw;
`
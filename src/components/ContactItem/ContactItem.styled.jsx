import styled from "styled-components";

export const Item = styled.li`
    height: 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1vw;
    border: 1px solid black;
    border-radius: 30px;
`

export const DeleteButton = styled.button`
    width: 10vw;
    height: 2vw;
    border-radius: 30px;
    border: none;
    background-color: #ffb703;
    color: white;
    &:hover {
        background: #c1121f;
        color: white;
    }
`

export const H2 = styled.h2`
    margin: 0px;
`

export const H3 = styled.h3`
    font-size: 1vw;
`
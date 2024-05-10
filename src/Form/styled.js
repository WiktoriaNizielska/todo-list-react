import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px){
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: solid rgb(209, 203, 203) 1px;
    width: 100%;
`;

export const Button = styled.button`
    background: teal;
    color: white;
    border: none;
    padding: 10px;
    transition: 0.7s;

    &:hover{
        background-color: rgb(6, 167, 167);
        transform: scale(1.1);
    }

    &:active{
        background-color: rgb(13, 192, 192);
    }

    @media(max-width: 767px){
        &:hover{
            transform: scale(1.02);
        }
    }
`;
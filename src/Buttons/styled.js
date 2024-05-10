import styled from "styled-components";

export const Wrapper = styled.div`
    @media(max-width:767px){
        margin-bottom: 20px;
}
`;

export const Button = styled.button`
    border: 0;
    background: none;
    color: teal;
    transition: 0.4s;

    @media(max-width:767px){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        padding: 7px;
    }

    &:hover{
        color: hsl(180, 100%, 40%);
    }

    &:disabled{
        color: #ccc;
    }
`;
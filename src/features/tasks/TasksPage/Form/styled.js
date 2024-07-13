import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    background: ${({ theme }) => theme.color.teal};
    color:${({ theme }) => theme.color.white} ;
    border: none;
    padding: 10px;
    transition: 0.7s;

    &:hover{
        filter:brightness(130%);
        transform: scale(1.1);
    }

    &:active{
        filter:brightness(150%);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        &:hover{
            transform: scale(1.02);
        }
    }
`;
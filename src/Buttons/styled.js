import styled from "styled-components";

export const Wrapper = styled.div`
    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
        margin-bottom: 20px;
    }
`;

export const Button = styled.button`
    border: 0;
    background: none;
    color: ${({ theme }) => theme.color.teal};
    transition: 0.4s;

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        padding: 7px;
    }

    &:hover{
        filter:brightness(140%);
    }

    &:disabled{
        color: ${({ theme }) => theme.color.grey};
    }
`;
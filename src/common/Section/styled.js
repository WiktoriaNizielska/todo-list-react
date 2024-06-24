import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    background: ${({ theme }) => theme.color.alabaster};
    margin: 10px 0;
    box-shadow: 13px 15px 27px -57px rgba(161, 161, 164, 1);
    max-width: 900px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: 20px;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    border-bottom: 1px solid rgb(209, 203, 203);

    @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        grid-gap: 0;
    }
`;

export const Body = styled.div`
    padding: 10px;
    word-break: break-word;
`;

export const Header = styled.h2`
    margin: 0;
    padding: 20px;

    ${({ $alignment }) => $alignment && css`
        align-self: flex-start;
    `}
`;
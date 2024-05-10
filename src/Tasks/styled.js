import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding-left: 0px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid rgb(209, 203, 203);

    ${({ hidden }) => hidden && css`
        display:none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.7s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: rgb(53, 127, 48);

        &:hover{
            background-color: rgb(69, 164, 62);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: rgb(209, 50, 50);

        &:hover{
            background-color: rgb(228, 65, 65);
        }
    `}
`;
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
    color:${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.7s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.green};

        &:hover{
            filter:brightness(130%);
        }
        &:active{
            filter:brightness(160%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.red};

        &:hover{
            filter:brightness(120%);
        }
        &:active{
            filter:brightness(170%);
        }
    `}
`;
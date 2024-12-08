import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.color.alabaster};
  margin: 10px 0;
  box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
  max-width: 900px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 20px;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    grid-gap: 0;
  }
`;

export const Body = styled.div`
  padding: 20px;
  word-break: break-word;
`;

export const Header = styled.h2<{ $alignment: boolean }>`
  margin: 0;
  padding: 20px;

  ${({ $alignment }) =>
    $alignment &&
    css`
      align-self: flex-start;
    `}
`;

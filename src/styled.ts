import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  padding: 20px;
  display: block;

  &.active {
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 15px;
  }
`;

export const StyledNavigation = styled.ul`
  background-color: ${({ theme }) => theme.color.teal};
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 15px;
  padding: 0;
`;

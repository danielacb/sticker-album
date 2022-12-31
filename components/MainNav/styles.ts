import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 2rem;
    background-color: ${theme.colors.white};
    border-bottom: 4px solid ${theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const NavButton = styled.button`
  ${({ theme }) => css`
    padding: 0 0 0 2rem;
    font-family: "DM Serif Display";
    font-size: 1.2rem;
    background-color: transparent;
    color: ${theme.colors.black};
  `}
`;

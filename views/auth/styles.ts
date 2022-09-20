import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${theme.colors.white};

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: ${theme.breakpoints.large}) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Banner = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    padding: 40px;

    background-color: ${theme.colors.lightgray};
    background-image: radial-gradient(${theme.colors.gray} 10%, transparent 11%),
      radial-gradient(${theme.colors.gray} 10%, transparent 11%);
    background-position: 0 0, 10px 10px;
    background-repeat: repeat;
    background-size: 20px 20px;

    z-index: 1;
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 532px;
    max-width: 410px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.white};
      border: 4px solid ${theme.colors.black};
      border-radius: ${theme.border.radius};
      transition: 0.3s;
      z-index: -1;
    }

    &::before {
      right: -10px;
      bottom: -10px;
    }

    &::after {
      left: -10px;
      top: -10px;
    }

    &:hover {
      &::before {
        right: -15px;
        bottom: -15px;
        background-color: ${theme.colors.gray};
      }

      &::after {
        left: -15px;
        top: -15px;
      }
    }

    @media (max-width: ${theme.breakpoints.large}) {
      height: 200px;
      padding: 20px;
    }
  `}
`;

export const FormContainer = styled.div`
  margin: 40px auto;
  width: 100%;
  max-width: 410px;
  padding: 20px;
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.red};
    color: ${theme.colors.white};
    padding: 1rem;
    display: block;
  `}
`;

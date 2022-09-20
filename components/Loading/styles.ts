import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    border-color: ${theme.colors.lightgray};
    border-style: solid;
    border-width: 0.4rem;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    animation: ${spin} 0.7s infinite linear;
    border-top-color: ${theme.colors.black};
    border-right-color: ${theme.colors.black};
  `}
`;

import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      position: absolute;
      background: ${theme.colors.black};
      width: 100%;
      height: 100%;
      opacity: 0.9;
      z-index: -1;
    }
  `}
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 400px;
  position: relative;
  padding: 60px;
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  margin: 0;
`;

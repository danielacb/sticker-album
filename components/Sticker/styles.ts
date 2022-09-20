import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  width: 100%;
  height: 426px;
  position: relative;
  z-index: 1;
  background-color: transparent;
`;

export const Card = styled.div`
  ${({ theme }) => css`
    &,
    &::before {
      border: 4px solid ${theme.colors.black};
      border-radius: ${theme.border.radius};
      position: absolute;
    }

    top: 10px;
    left: 10px;
    transition: 0.4s;
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    background-color: ${theme.colors.white};

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      right: -18px;
      bottom: -18px;
      z-index: -1;
      transition: 0.4s;
      background-color: ${theme.colors.gray};
    }

    &:hover {
      top: 0;
      left: 0;

      &::before {
        background-color: ${theme.colors.darkgray};
        right: -34px;
        bottom: -34px;
      }
    }
  `}
`;

export const PlayerName = styled.div`
  height: calc(100% - 70px);

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};

  h3 {
    padding: 1.25rem;
    text-align: center;
    margin: 0;
  }

  span {
    padding: 1rem;
    position: absolute;
    height: 70px;
    width: calc(100% - 70px);
    bottom: 0;
    left: 0;

    font-weight: 400;
    font-size: 1.25rem;
    line-height: 35px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: calc(100% - 70px);
    background: ${theme.colors.lightgray};
    border-radius: ${theme.border.radius};
  `}
`;

export const PlayerNumber = styled.span`
  ${({ theme }) => css`
    width: 70px;
    height: 70px;

    font-family: "DM Serif Display";
    font-size: 3rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};

    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

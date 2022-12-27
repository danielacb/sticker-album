import styled, { css } from "styled-components";

type LabelProps = { checked: boolean };

export const Label = styled.label<LabelProps>`
  ${({ checked, theme }) => css`
    align-items: center;
    cursor: pointer;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 20px 22px;
    width: 100%;
    font-weight: 400;

    background-color: ${checked ? theme.colors.lightgray : "transparent"};
    transition: background-color 0.3s;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    padding: 0;
    margin: 0;
    width: 22px;
    height: 22px;
    border: 2px solid ${theme.colors.black};
    border-radius: ${theme.border.smallRadius};
    cursor: pointer;

    &:checked {
      background-color: ${theme.colors.black};
      background-image: url("/img/icon-check.svg");
      background-repeat: no-repeat;
      background-size: 12px;
      background-position: center;
    }
  `}
`;

import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 1.25rem 0;

    button {
      background-color: ${theme.colors.white};
      border: 4px dashed ${theme.colors.black};
      color: ${theme.colors.black};
      height: calc(100% - 14px);
      width: calc(100% - 14px - 1rem);
      margin: 0 auto 0 1rem;
      margin-top: 10px;
      font-weight: 400;
      font-size: 1.5rem;
      border-radius: ${theme.border.radius};
    }
  `}
`;

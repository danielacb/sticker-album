import { createGlobalStyle, css, DefaultTheme } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* inter-regular - latin */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/inter-v11-latin-regular.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("/fonts/inter-v11-latin-regular.eot?#iefix") format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/inter-v11-latin-regular.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/inter-v11-latin-regular.woff")
        format("woff"),
      /* Modern Browsers */ url("/fonts/inter-v11-latin-regular.ttf")
        format("truetype"),
      /* Safari, Android, iOS */ url("/fonts/inter-v11-latin-regular.svg#Inter")
        format("svg"); /* Legacy iOS */
  }

  /* inter-500 - latin */
  @font-face {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    src: url("/fonts/inter-v11-latin-500.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("/fonts/inter-v11-latin-500.eot?#iefix") format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/inter-v11-latin-500.woff2") format("woff2"),
      /* Super Modern Browsers */ url("/fonts/inter-v11-latin-500.woff")
        format("woff"),
      /* Modern Browsers */ url("/fonts/inter-v11-latin-500.ttf")
        format("truetype"),
      /* Safari, Android, iOS */ url("/fonts/inter-v11-latin-500.svg#Inter")
        format("svg"); /* Legacy iOS */
  }

  /* dm-serif-display-regular - latin */
  @font-face {
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: 400;
    src: url("/fonts/dm-serif-display-v10-latin-regular.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("/fonts/dm-serif-display-v10-latin-regular.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("/fonts/dm-serif-display-v10-latin-regular.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("/fonts/dm-serif-display-v10-latin-regular.woff") format("woff"),
      /* Modern Browsers */ url("/fonts/dm-serif-display-v10-latin-regular.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("/fonts/dm-serif-display-v10-latin-regular.svg#DMSerifDisplay")
        format("svg"); /* Legacy iOS */
  }

  ${({ theme }) => css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: "Inter";
      color: ${theme.colors.black};

      background-color: ${theme.colors.lightgray};
      background-image: radial-gradient(
          ${theme.colors.gray} 10%,
          transparent 11%
        ),
        radial-gradient(${theme.colors.gray} 10%, transparent 11%);
      background-position: 0 0, 10px 10px;
      background-repeat: repeat;
      background-size: 20px 20px;
    }

    a {
      color: inherit;
      font-family: "DM Serif Display";
      text-decoration: none;

      &:hover {
        opacity: 0.8;
        text-decoration: underline;
      }
    }

    a,
    button {
      cursor: pointer;
    }

    * {
      box-sizing: border-box;
    }

    h1 {
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 4rem;
      margin: 0 0 1.75rem;
    }

    h3 {
      font-family: "DM Serif Display";
      font-weight: 400;
      font-size: 2.5rem;
    }

    p {
      font-weight: 500;
      font-size: 1.2rem;
    }

    label {
      font-weight: 500;
      font-size: 1.25rem;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
      display: block;
    }

    input {
      display: block;
      width: 100%;
      padding: 1rem;
      border: 4px solid ${theme.colors.black};
      margin-bottom: 1.5rem;
      font-size: 1rem;

      &::placeholder {
        font-size: 1rem;
        color: ${theme.colors.black};
      }

      &:focus {
        outline-style: solid;
        outline-color: ${theme.colors.gray};
      }
    }

    button {
      padding: 1.25rem;
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
      border: none;
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      font-weight: 500;
      font-size: 1rem;

      &.full {
        width: 100%;
      }
    }
  `}
`;

export default GlobalStyles;

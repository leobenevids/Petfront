import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`${css`
  * {
    padding: 0;
    margin: 0;
    font-family: "Baloo 2", cursive;
    box-sizing: border-box;

    /* colors */
    --orange-yellow: #fad47b;
    --fire-opal: #dd5d4f;
    --success-green: #4bb543;
    --mimi-pink: #f9d3e0;
    --black: #000;
    --white: #fff;

    /* box-shadows */
    --shadow-1: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    --shadow-2: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    --shadow-3: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  body {
    background-color: var(--orange-yellow);
  }

  h1 {
    margin-bottom: 1em;
    font-size: 2.1em;
  }

  .bold {
    font-weight: bold;
  }
`}`;

import { createGlobalStyle, css } from "styled-components";

import background from "../src/assets/img/pattern.svg";

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
    --shadow-1: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    --shadow-2: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    --shadow-3: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  body {
    background-color: var(--orange-yellow);
    background-image: url(${background});
    background-size: contain;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  h1 {
    margin-bottom: 1em;
    font-size: 2.1em;
  }

  .bold {
    font-weight: bold;
  }

  input[type="submit"],
  a,
  button :hover {
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }

`}`;

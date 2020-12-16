import { createGlobalStyle } from "styled-components";

import background from "../assets/background.png";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F0 url(${background}) no-repeat 70% 100%;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 968px;
    margin: 0 auto;
    padding: 40px 20px;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;

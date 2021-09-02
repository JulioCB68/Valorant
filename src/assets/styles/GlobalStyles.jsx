import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family: "Druk Wide Bold";
  src: url('/fonts/DrukWideBold.ttf');
}
/* -------------------- RESET -------------------- */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Druk Wide Bold';
  }
/* -------------------- PRE-SETTINGS -------------------- */
  html, body, #root {
    height: 100%;
  }

  img {
    width: 100%;
  }

/* -------------------- COLORS -------------------- */
  :root {
    --Black: #1F2326;
    --White: #FFFFFF;
    --Red: #E83F5B;
  }
`;
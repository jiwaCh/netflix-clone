import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root {
  /* font */
  --font: "PlusJakartaSans";
  /* colours */
  --primary-red: rgba(229, 9, 20, 1);
  --primary-red-dark: rgba(210, 45, 43, 1);
  --light-text: rgba(255, 255, 255, 1);
    --light-gray :  rgba(48, 48, 48,1); 


  /* --dark-text: rgba(0, 74, 75, 1);
  
  --light-blue: rgba(182,224,238,1); */

  /* typography */
  --font-weight-bold: 700;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --font-weight-light: 300;

  --h1-size: 42px;
  --h1-line-height: 48px;
  --h1-weight: var(--font-weight-medium);

  --h2-size: 36px;
  --h2-line-height: 42px;
  --h2-weight: var(--font-weight-medium);

  --h3-size: 24px;
  --h3-line-height: 30px;
  --h3-weight: var(--font-weight-medium);

  --h4-size: 18px;
  --h4-line-height: 26px;
  --h4-weight: var(--font-weight-bold);

  --h5-size: 16px;
  --h5-line-height: 20px;
  --h5-weight: var(--font-weight-bold);

  --spacing-module: 90px;
  --spacing-component: 50px;
  --spacing-sub-component: 30px;

  --p1-size: 24px;
  --p1-line-height: 34px;
  --p1-weight: var(--font-weight-medium);

  --p2-size: 16px;
  --p2-line-height: 24px;
  --p2-weight: var(--font-weight-medium);
  --p2-spacing: 0.02em;

  --p3-size: 13px;
  --p3-line-height: 20px;
  --p3-weight: var(--font-weight-medium);
  --p3-spacing: 0.02em;

  --p4-size: 11px;
  --p4-line-height: 14px;
  --p4-weight: var(--font-weight-normal);
  --p4-spacing: 0.2px;

  --font-spacing-2: 0.2px;
  --font-spacing-5: 0.5px;
}

@media (min-width: 768px) {
  :root {
    /* typography */
    --h1-size: 56px;
    --h1-line-height: 62px;

    --h2-size: 42px;
    --h2-line-height: 48px;

    --h3-size: 24px;
    --h3-line-height: 30px;

  --p3-size: 13px;
  --p3-line-height: 20px;

    --spacing-module: 100px;
  }
}

@media (min-width: 1024px) {
  :root {
    /* typography */
    --h1-size: 70px;
    --h1-line-height: 76px;

    --h3-size: 28px;
    --h3-line-height: 34px;

    --p1-size: 30px;
    --p1-weight: 40px;
    
    --p2-size: 18px;
    --p2-line-height: 28px;

    --spacing-module: 130px;
    --spacing-component: 60px;
    --spacing-sub-component: 40px;
  }
}
@font-face {
  font-family: "PlusJakartaSans";
  src: url("/fonts/PlusJakartaSans/PlusJakartaSans-Regular.woff2");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

/* @font-face {
  font-family: "PlusJakartaSans";
  src: url("/fonts/PlusJakartaSans/PlusJakartaSans-Medium.woff2");
  font-style: medium;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: "PlusJakartaSans";
  src: url("/fonts/PlusJakartaSans/PlusJakartaSans-Bold.woff2");
  font-style: bold;
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: "PlusJakartaSans";
  src: url("/fonts/PlusJakartaSans/PlusJakartaSans-Light.woff2");
  font-style: light;
  font-weight: 300;
  font-display: swap;
} */

html,
body {
  padding: 0;
  margin: 0;
  font-family: var(--font);
  font-size: 16px;
}

.faq,
.tac {
  background-color: #F9F7F7;
}

.quotes {
  background-color: #f8f8f8;
}

.bp-wl {
  background-color: var(--secondary-dark-green);
}

a {
  color: inherit;
  text-decoration: none;
  font-family: var(--font);
}

* {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  background: "transparent";
  background-color: transparent;
  font-family: var(--font);
}

.slick-slide {
  position: relative;
}

.slick-dots {
  position: asbolute;
}

.svg-defs {
  position: absolute;
  width: 0;
  height: 0;
  }

/* width */
body::-webkit-scrollbar {
  width: 6px;
}

/* Track */
body::-webkit-scrollbar-track {
  border-radius: 10px;
  background: rgba(255, 71, 64, 0.2);
}

/* Handle */
body::-webkit-scrollbar-thumb {
  background: rgba(255, 71, 64, 1);
  border-radius: 10px;
}

/* Handle on hover */
body::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 71, 64, 1);
}

`;

import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
  /* THEME - CSS  http://colrd.com/image-dna/23358/*/
  --primaryWhite: #fbf9fa;
  --peach: #ecb0a5;
  --mauve: #b35e63;

  --blueGrey: #547388;
  --navy:#08304a; 

  --brightPink: #d55f5b;


  --primaryColor: var(--mauve);
  --primaryLightColor: var(--peach);
  --primaryDarkColor: var(--blueGrey);

  --primaryFont: "Roboto", sans-serif;
  --cursiveFont: "Sacramento", cursive;
  --slantedFont: "Sacramento", cursive;

  --mainWhite: #f6f5f1;
  --offWhite: #fae0df;
  --transparantWhite: hsl(0deg 0% 92% / 44%);
  --mainBackground: #ebebeb;
  --mainOverlay: rgba(35, 10, 36, 0.4);
  --mainBlack: #4c4c4c;
  --mainGrey: #898b8a;
  --darkGrey: #898b8a;
  --mainTransition: all 0.3s linear;
  --mainSpacing: 0.3rem;
  --lightShadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  --mainBorderRadius: 0.25rem;
  --maxWidth: 40rem;
  --smallWidth: 85vw;
  --fullWidth: 1170px;

  --clr-primary-3: var(--peach);
  --clr-primary-5: var(--blueGrey);

  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: #f1f5f8;
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: "Montserrat", sans-serif;
  --ff-secondary: "Montserrat",serif; 
  --ff-cursive: "Sacramento", cursive;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}

/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--primaryFont);
  background: var(--mainBackground);
  color: var(--mainBlack);
  line-height: 1.4;
  font-size: 1rem; /* font-size: 0.875rem; */
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  font-weight: 300 !important;
  /* line-height: 1.25; */
  /* margin-bottom: 0.75rem; */
  /* font-family: var(--ff-primary); */
  /* font-weight: 400;*/

  /* NEW */
  font-family: var(--primayFont);
  margin-bottom: 1.25rem;
  letter-spacing: var(--mainSpacing);
}
h1 {
  font-size: 2rem;
  font-weight: 300 !important;
}
h2 {
  font-size: 2rem;
  font-weight: 300 !important;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

.btn {
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  background: var(--clr-primary-7);
  color: var(--clr-primary-1);
}

/* section */
.section {
  padding: 5rem 0;
  position: relative;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
.hero {
    min-height: 65vh;
    background: linear-gradient(90deg,rgba(116,149,171,.1) 1%,hsla(0,0%,100%,.8)), top/cover no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #7daece;
    color: var(--primaryColor);
}

`
export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      {element}
    </>
  )
}


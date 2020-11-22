import React from "react"

import "fontsource-great-vibes"
import "fontsource-open-sans" // Defaults to weight 400 with all styles included
import "fontsource-karla"; // paragraphs
import "fontsource-playfair-display"; // headers
import "fontsource-sacramento";

import { createGlobalStyle } from "styled-components"
//import { GatsbyProvider } from "./src/context/context"

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
  /* New Color Scheme */

  --purple: hsl(304deg 17% 34%);
  --lightPink: hsl(355deg 15% 72%);
  --darkGrey: hsl(221deg 8% 50%);
  --mauve: hsl(355deg 31% 55%);
  --wine: hsl(327deg 85% 18%);
  --lightBrick: hsl(30deg 52% 46%);
  --darkBrick: hsl(12deg 73% 33%);

  --lightGrey: hsl(0deg 0% 80%); /* img bcg*/
  --mccGrey: hsl(0deg 0% 86%);  /* gainsboro*/
  --mainBackground: #DBDBDB; /* spashop bcg*/

  --backgroundColor: #f1f5f8; /* current bcg*/

  /* FONTS */

  --cursiveFont: "Sacramento", cursive;
  --slantedFont: "Sacramento", cursive;

  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;


  --maxWidth: 40rem;
  --smallWidth: 85vw;
  --fullWidth: 1117px;


  --primaryColor: var(--mauve);
  --mainWhite: hsl(206deg 33% 96%);
  --mainBlack: #4c4c4c;


  /* dark shades of primary color*/
      /* mauve === hsl(355deg 31% 55%);*/
  --clr-primary-1: hsl(355deg 60% 22%);  /* hsl(21, 91%, 17%);*/
  --clr-primary-2: hsl(355deg 31% 55%);  /* hsl(21, 84%, 25%);*/
  --clr-primary-3: hsl(355deg 31% 55%);  /* hsl(21, 81%, 29%);*/
  --clr-primary-4: hsl(355deg 31% 55%);  /* hsl(21, 77%, 34%);*/

  --clr-primary-5: var(--mauve); /* Main Primary Color hsl(21, 62%, 45%);*/

  /* lighter shades of primary color */
  --clr-primary-6: hsl(355deg 26% 60%);   /* hsl(21, 57%, 50%);*/
  --clr-primary-7: hsl(355deg 31% 55%); /* hsl(355 46% 65% / 1);*/  /* hsl(21, 65%, 59%);*/
  --clr-primary-8: hsl(355deg 49% 84%);   /* hsl(21, 80%, 74%);*/
  --clr-primary-9: hsl(355deg 63% 97%);   /* hsl(21, 94%, 87%);*/
  --clr-primary-10: var(--lightPink);     /*hsl(21, 100%, 94%);*/

  /* darkest grey - used for headings */
  --clr-grey-1: hsl(327 85% 13% / 1); /* hsl(209, 61%, 16%);*/
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: var(--purple); /* hsl(209, 34%, 30%); */
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: var(--darkGrey); /* hsl(210, 22%, 49%);*/
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

  --mainTransition: all 0.3s linear;
  --transition: all 0.3s linear;

  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: var(--fullWidth); /* 1170px;*/
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
  font-family: var(--ff-secondary);
  background: var(--backgroundColor);  /*background: var(--clr-white);*/
  color: var(--wine);
  line-height: 1.5;
  font-size: 0.875rem;
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
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
  font-weight: 400;
  transition: font-size 0.1s ease;
}
h1 {
  font-size: 2rem;
  transition: font-size 0.1s ease;
}
h2 {
  font-size: 2rem;
  transition: font-size 0.1s ease;
}
h3 {
  font-size: 2.00rem;
  transition: font-size 0.1s ease;
  color: var(--backgroundColor);
}
h4 {
  font-size: 0.875rem;
  transition: font-size 0.1s ease;
}
p {
  margin-bottom: 1.25rem;
  color: #553d54;
  transition: font-size 0.1s ease;
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2.00rem; /* 1.75 */
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
  font-family: "Karla";
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  background: var(--lightPink); /* var(--clr-primary-7);*/
  color: var(--clr-primary-1);
}


.btn,
.btn-white,
.btn-primary {
  color: var(--primaryColor);
  border: 2px solid var(--primaryColor);
  padding: 0.45rem 0.8rem;
  display: inline-block;
  transition: var(--mainTransition);
  cursor: pointer;
  font-size: 0.8rem;
  background: transparent;
}
.btn:hover {
  background: var(--mauve);
  color: var(--mainWhite);
}
.btn-white {
  background: transparent;
  color: var(--mainWhite);
  border-color: var(--mainWhite);
}
.btn-white:hover {
  background: var(--mainWhite);
  color: var(--primaryColor);
}
.btn-primary {
  background: var(--primaryColor);
  color: var(--mainWhite);
  border-color: var(--primaryColor);
}
.btn-primary:hover {
  background: transparent;
  color: var(--primaryColor);
}
.btn-block {
  width: 100%;
  display: block;
  margin: 0 auto;
  box-shadow: var(--lightShadow);
  text-align: center;
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
  min-height: calc(65vh);
  background: linear-gradient(
      to right,
      rgba(116, 149, 171, 0.1) 1%,
      rgba(255, 255, 255, 0.1)
    ),
    url("black-feathers.jpg") top/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primaryColor);
}
.cursive {
  font-family: var(--cursiveFont);
  color: black;
}
.banner {
  width: var(--smallWidth);
  max-width: var(--fullWidth);
}
.hero h1 {
  font-size: 3rem;
  text-transform: capitalize;
}
.hero p {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 1.75rem;
}
.btn-hero {
  border-radius: 0;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  background: var(--primaryColor);
  border-color: var(--primaryColor);
  color: var(--mainBlack);
}
.btn-hero:hover {
  color: var(--primaryColor);
}
@media screen and (min-width: 768px) {
  .banner {
    margin-top: 0;
  }

  .hero h1 {
    font-size: 5.3rem;
  }
  .hero p {
    font-size: 2.3rem;
  }
  .btn-hero {
    font-size: 1.2rem;
    padding: 1rem 3rem;
  }
}

/* UTILITY CLASSES */
.cursive {
  font-family: var(--cursiveFont);
  color: black;
}
.txt-center{
  text-align: center;
}
#loading-gif{
  text-align: center;
  color: var(--mauve);
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

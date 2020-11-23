import React from "react"
import styled, { keyframes } from "styled-components"

const AnimatedSvg = () => {
  React.useEffect(() => {
    document.getElementsByClassName("intro")[0].classList.add("go")
  }, [])
  return (
    <Wrapper>
      <svg className="intro" viewBox="0 0 200 86">
        <text
          textAnchor="start"
          x="10"
          y="30"
          className="logo-text text-stroke"
          clipPath="url(#text1)"
        >
          The
        </text>
        <text
          textAnchor="start"
          x="10"
          y="50"
          className="logo-text text-stroke"
          clipPath="url(#text2)"
        >
          Dev
        </text>
        <text
          textAnchor="start"
          x="10"
          y="70"
          className="logo-text text-stroke"
          clipPath="url(#text3)"
        >
          Salon.
        </text>
        <text
          textAnchor="start"
          x="10"
          y="30"
          className="logo-text text-stroke text-stroke-2"
          clipPath="url(#text1)"
        >
          The
        </text>
        <text
          textAnchor="start"
          x="10"
          y="50"
          className="logo-text text-stroke text-stroke-2"
          clipPath="url(#text2)"
        >
          Dev
        </text>
        <text
          textAnchor="start"
          x="10"
          y="70"
          className="logo-text text-stroke text-stroke-2"
          clipPath="url(#text3)"
        >
          Salon
        </text>
        <defs>
          <clipPath id="text1">
            <text textAnchor="start" x="10" y="30" className="logo-text">
              The
            </text>
          </clipPath>
          <clipPath id="text2">
            <text textAnchor="start" x="10" y="50" className="logo-text">
              Dev
            </text>
          </clipPath>
          <clipPath id="text3">
            <text textAnchor="start" x="10" y="70" className="logo-text">
              Salon.
            </text>
          </clipPath>
        </defs>
      </svg>
    </Wrapper>
  )
}

const dash = keyframes`
   100% {
    stroke-dashoffset: 0;
  } 
`
const Wrapper = styled.div`
  height: 100%;
  padding: 0;
  margin: 0;

  .intro {
    max-width: 170px;
    position: absolute;
    top: 50%;
    left: 100px;
    transform: translate(-50%, -50%);
  }
  .logo-text {
    display: none;
  }
  .go {
    .logo-text {
      font-family: Arial, sans-serif;
      font-size: 20px;
      text-transform: uppercase;
      display: block;
    }
    .text-stroke {
      fill: none;
      stroke: var(--darkGrey);
      /* stroke: #51256f;*/
      stroke-width: 2.8px;
      stroke-dashoffset: -900;
      stroke-dasharray: 900;
      stroke-linecap: butt;
      stroke-linejoin: round;
      animation: ${dash} 2.5s ease-in-out forwards;
    }
    .text-stroke:nth-child(2) {
      animation-delay: 0.3s;
    }
    .text-stroke:nth-child(3) {
      animation-delay: 0.9s;
    }
    .text-stroke-2 {
      stroke: var(--lightPink);
      /* stroke: #f6bdfa;*/
      animation-delay: 1.2s;
    }
    .text-stroke:nth-child(5) {
      animation-delay: 1.5s;
    }
    .text-stroke:nth-child(6) {
      animation-delay: 1.8s;
    }
  }
`
export default AnimatedSvg

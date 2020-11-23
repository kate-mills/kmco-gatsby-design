import React from "react"
import styled from "styled-components"
import logo from "../images/devsalon-3dd copy.png"
import { GoThreeBars } from "react-icons/go"
import { Link } from "gatsby"
import NavLink from "./NavLink"

import { GatsbyContext } from "../context/context"

const Navbar = () => {
  const { showSidebar, links } = React.useContext(GatsbyContext)

  const mamaPages = [
    ...new Set(
      links.map(link => {
        return link.page
      })
    ),
  ]

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="devsalon logo" />
          </Link>
          <button className="toggle-btn" onClick={showSidebar}>
            <GoThreeBars />
          </button>
        </div>
        <ul className="nav-links">
          {mamaPages.map((page, index) => {
            return <NavLink key={index} page={page} />
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  background: var(--mauve);
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--blueGrey);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img,
    svg {
      width: auto;
    }
    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--lightPink);
      background: transparent;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        color: var(--mauve);
        cursor: pointer;
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 500px;
    }
    li {
      padding: 1rem 0;
      position: relative;
    }
    button {
      color: var(--lightPink);
      background: transparent;
      border: transparent;
      font-family: "Karla";
      /* font-family: 'Montserrat';*/
      font-size: 1rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 10px 20px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
    }
  }
`

export default Navbar

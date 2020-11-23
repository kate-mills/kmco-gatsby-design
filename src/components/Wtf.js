import React from "react"
import { Link } from "gatsby"

const Hero = ({children}) => {
  return (
    <div className="hero">
      <div className="banner">
        <p className="cursive">If you can dream it, we can create it.</p>
        <h1>Let your online presence be unique and stylish</h1>
          {children}
          <Link className="btn btn-primary btn-hero" to="/projects">Projects</Link>
      </div>
    </div>
  )
}
export default Hero

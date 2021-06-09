import React from 'react'
import introImage from "./illustration-intro.png"
import "./page-style/intro-page.css"



export const Intro = () => {
  return (
    <div className='intro-image'>
      <img src={introImage} alt="image error" ></img>
      <div className="intro_text">
        <h1> All your files in one secure location,<br/> accessible anywhere. </h1>
        <p> Fylo stores all your most important file in one secure locaton. Access them wherever you need, share and collaborate with friends family, and co-workers.
        </p>
        <button class="btn"> Get Started </button>
      </div>
    </div>
  )
}


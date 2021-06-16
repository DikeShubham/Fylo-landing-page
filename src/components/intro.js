import React from "react";
// Intro Image
import IntroImage  from "./images/illustration-intro.png";
// css
import "./style/components.css";

export const Intro = () => {
  return (
    <div className="intro-image">
      <div className="intro_text">
        <h1>
          <img src={IntroImage} alt="img error" />
          All your files in one secure location,
          <br /> accessible anywhere.
        </h1>
        <p>
          Fylo stores all your most important file in one secure locaton. Access
          them wherever you need, share and collaborate with friends family, and
          co-workers.
        </p>
        <button class="btn"> Get Started </button>
      </div>
    </div>
  );
};

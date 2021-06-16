import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// Logo
import Logo from "./logo.svg";
// Intro page
import { Intro } from "./components/intro";
// Feature page
import { Feature } from "./components/Feature";
// Team page
import { Team } from "./components/team";
// css
import "./style/Index.css";

function App() {
  return (
    <>
      <div className="header-navBar">
        <div className="fylo-logo">
          <img src={Logo} alt="Error" />
        </div>
        <div className="menu-section">
          <ul>
            <li>
              <Link to={"/Home"}>
                <a className="menuText">Home</a>
              </Link>
            </li>
            <li>
              <Link to={"/Feature"}>
                <a className="menuText">Feature</a>
              </Link>
            </li>
            <li>
              <Link to={"/Team"}>
                <a className="menuText">Team</a>
              </Link>
            </li>
            <li>
              <Link to={"/Sign-In"}>
                <a className="menuText">Sign In</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="App">
        <div className="intro-page">
          <Switch>
          <Route exact path="/home" component={Intro} />
          <Route path="/Feature" component={Feature} />
          <Route path="/Team" component={Team} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react"
import {Nav_Bar} from "./components/header/Nav-Bar"
import {Intro} from "./pages/intro"
import {Feature} from "./pages/Feature"
import {Team} from "./pages/team"

function App() {
  return (
    <div className="App">
      <div className="intro-page" >
      <Nav_Bar/>
      <Intro/>
      <Feature/>
      <Team/>
      </div>
    </div>
  );
}

export default App;

import React from "react"
import {Nav_Bar} from "./components/header/Nav-Bar"
import {Intro} from "./pages/intro"

function App() {
  return (
    <div className="App">
      <div className="intro-page" >
      <Nav_Bar/>
      <Intro/>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import AboutUs from "./AboutUs/aboutUs";
import Feature from "./Feature/feature";
import "./App.css";

function App() {
  return (
    <div>
      <AboutUs />
      <Feature />
      <Feature swap={true} />
    </div>
  );
}

export default App;

import React from "react";
import AboutUs from "./AboutUs/aboutUs";
import Feature from "./Feature/feature";
import Footer from "./Footer/footer";
import "./App.css";
import DemoFooter from "./DemoFooter/demoFooter";

function App() {
  return (
    <div>
      <AboutUs />
      <Feature />
      <Feature swap={true} />
      <Footer />
    </div>
  );
}

export default App;

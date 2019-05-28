import React from "react";
import AboutUs from "./AboutUs/aboutUs";
import Feature from "./Feature/feature";
import Footer from "./Footer/footer";
import "./App.css";
import Header from "./Header/header";

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Feature />
      <Feature swap={true} />
      <Footer />
    </div>
  );
}

export default App;

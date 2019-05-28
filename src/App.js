import React from "react";
import AboutUs from "./AboutUs/aboutUs";
import Feature from "./Feature/feature";
import Footer from "./Footer/footer";
import GlobalStyle from "./GlobalStyle";
import "./App.css";
import Header from "./Header/header";
import Team from "./Team/team";
import Services from "./Services/services";

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <Feature />
      <Team />
      {/* <Feature swap={true} /> */}
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;

import React from "react";
import styled from "styled-components";
import NewsLetter from "./newsLetter";
import Address from "./address";
import { FaArrowUp } from "react-icons/fa";

const FooterSection = styled.div`
  background-color: midnightblue;
  display: flex;
  justify-content: center;
  padding: 4rem;
`;
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
  line-height: 200%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 4fr 3fr 3fr 2fr;
  }
`;

const FooterBottom = styled.div`
  background: #000;
  color: #fff;
  padding: 1.5em;
  text-align: center;
  font-size: 14px;
`;
const FooterColumn = styled.div`
  .center {
    text-align: center;
  }
  li a {
    font-size: 14px;
    color: darkgray;
  }
  color: #fff;
`;
const Top = styled.div`
  text-align: center;
  background: midnightblue;
  padding: 15px 0 15px 0;
`;
const Footer = () => {
  return (
    <React.Fragment>
      <FooterSection>
        <FooterContainer>
          <FooterColumn>
            <Address />
          </FooterColumn>

          <FooterColumn>
            <ul className="center">
              <h3>Service Links</h3>
              <li>
                <a href="service.html">Sea Freight</a>
              </li>
              <li>
                <a href="service.html">Air Freights</a>
              </li>
              <li>
                <a href="service.html">Land Transport</a>
              </li>
              <li>
                <a href="service.html">Logistic Solutions</a>
              </li>
              <li>
                <a href="service.html">Warehousing</a>
              </li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <NewsLetter />
          </FooterColumn>
          <FooterColumn>
            <ul className="center">
              <h3>Quick links</h3>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </FooterColumn>
        </FooterContainer>
      </FooterSection>
      <Top>
        <a href="#">
          <FaArrowUp color="white" size="1.5em" />
        </a>
      </Top>
      <FooterBottom>&copy; 2019 Cargos</FooterBottom>
    </React.Fragment>
  );
};

export default Footer;

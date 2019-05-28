import React from "react";
import styled from "styled-components";
import { Section } from "../components/section";
import { Container } from "../components/container";

const FooterSection = styled.div`
  background-color: peru;
  background-color: cornflowerblue;
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
    flex-direction: row;

    justify-content: space-around;
  }

  ul {
    list-style: none;
    li:first-child {
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
      border-bottom: #444 solid 1px;
      margin-bottom: 1rem;
    }
  }
`;

const FooterBottom = styled.div`
  background: #333;
  color: wheat;
  padding: 1rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <React.Fragment>
      <FooterSection>
        <FooterContainer>
          <ul>
            <li>Shop & Learn</li>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Shows</a>
            </li>
            <li>
              <a href="#">Apps</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>

          <ul>
            <li>Orange Store</li>
            <li>
              <a href="#">Find a Store</a>
            </li>
            <li>
              <a href="#">Today at Orange</a>
            </li>
            <li>
              <a href="#">Orange Camp</a>
            </li>
            <li>
              <a href="#">Financing</a>
            </li>
            <li>
              <a href="#">Order Status</a>
            </li>
          </ul>

          <ul>
            <li>Education & Business</li>
            <li>
              <a href="#">Orange & Education</a>
            </li>
            <li>
              <a href="#">Shop For College</a>
            </li>
            <li>
              <a href="#">Orange & Business</a>
            </li>
            <li>
              <a href="#">Shop For Business</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
          </ul>

          <ul>
            <li>About Orange</li>
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">Orange Leadership</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contact Orange</a>
            </li>
          </ul>
        </FooterContainer>
      </FooterSection>
      <FooterBottom>Copyright &copy; 2019 Cargos</FooterBottom>
    </React.Fragment>
  );
};

export default Footer;

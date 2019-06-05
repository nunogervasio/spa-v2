import React from "react";
import styled from "styled-components";
import { Container, Section, Title, Paragraph, Button } from "../components";
import img from "../images/loading-dock2.jpg";

const HeaderSection = styled.div`
  flex-direction: column;
  ${"" /* height: 75vh; */}
  background-color: midnightblue;
  ${"" /* height: 600px; */}
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 500px;
  margin: 2rem 0;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
  }
`;
const HeaderImage = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 500px;
`;

const HeaderTitle = styled(Title)`
  text-align: left;
  font-size: 3rem;
  margin: 0;
`;
const TitleWrapper = styled.div`
  padding-left: 4em;
  padding-right: 2em;
  color: lavenderblush;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const HeaderPara = styled(Paragraph)`
  font-size: 1rem;
  letter-spacing: 3px;
  margin: 2rem 0;
`;
const Header = () => {
  return (
    <HeaderSection>
      <TitleWrapper>
        <HeaderTitle>
          We Provide The Best Solution For Your Transport
        </HeaderTitle>
        <HeaderPara left>
          eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet, eiusmod tempor incididunt ut labore et consectetur
          adipiscing
        </HeaderPara>
        <Button>Contact Us</Button>
      </TitleWrapper>
      <HeaderImage />
    </HeaderSection>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import { Container, Section, Title, Paragraph, Button } from "../components";
import img from "../images/loading-dock2.jpg";

const HeaderSection = styled.div`
  flex-direction: column;
  background-color: midnightblue;
`;
const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
  }
`;
const HeaderImage = styled.div`
  background: url(${img}) no-repeat center/cover;
`;

const HeaderTitle = styled(Title)`
  text-align: left;
  font-size: 2rem;
  margin: 0;
  @media (min-width: 482px) {
    font-size: 3rem;
  }
`;
const TitleWrapper = styled.div`
  padding-left: 2.2em;
  padding-right: 1em;
  color: #fff;
  margin: 2rem 0;
  @media (min-width: 482px) {
    padding-left: 4em;
    padding-right: 2em;
  }
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const HeaderPara = styled(Paragraph)`
  font-size: 1rem;
  letter-spacing: 1.2px;
  margin: 2rem 0;
  line-height: 1;
  color: darkgray;
  @media (min-width: 482px) {
    letter-spacing: 2px;
    line-height: 1.5;
  }
`;
const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
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
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;

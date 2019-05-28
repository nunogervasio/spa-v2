import React from "react";
import styled from "styled-components";
import {
  Section,
  Container,
  Title,
  Button,
  Paragraph,
  Image
} from "../components";
import img from "../images/delivery-truck.svg";
const AboutSection = styled(Section)`
  flex-direction: column;
  @media (min-width: 992px) {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
  }
`;

const TitleContainer = styled(Container)`
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  padding: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media (min-width: 768px) {
  }
`;
const TitlePrimary = styled(Title)`
  text-align: right;
  font-size: 2.2rem;
  margin-top: 0;
`;
const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ServiceImage = styled(Image)`
  width: 75px;
`;
const AboutUs = () => {
  return (
    <AboutSection>
      <TitleContainer>
        <Title>About Us</Title>
        <TitlePrimary>What We Provide The Best</TitlePrimary>
        <Paragraph>
          sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem
          ipsum dolor sit amet, eiusmod tempor incididunt ut labore consectetur
          adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit
          amet Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod
          tempor incididunt ut Lorem ipsum dolor sit amet
        </Paragraph>
        <Button>Read More</Button>
      </TitleContainer>
      <GridContainer>
        <ServiceCard>
          <ServiceImage src={img} />
          <Title>Land Transport</Title>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage src={img} />
          <Title>Land Transport</Title>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage src={img} />
          <Title>Land Transport</Title>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage src={img} />
          <Title>Land Transport</Title>
        </ServiceCard>
      </GridContainer>
    </AboutSection>
  );
};

export default AboutUs;

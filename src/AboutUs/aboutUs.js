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
import ServiceCard from "../components/serviceCard";

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
  justify-items: center;
  @media (min-width: 768px) {
  }
`;
const TitlePrimary = styled(Title)`
  text-align: right;
  font-size: 2.2rem;
  margin-top: 0;
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
        <ServiceCard title="Sea Freight" color="gold" icon="ship" />
        <ServiceCard title="Air Freight" color="tomato" icon="plane" />
        <ServiceCard title="Warehousing" color="dodgerblue" icon="cubes" />
        <ServiceCard title="Land Transport" color="forestgreen" icon="truck" />
      </GridContainer>
    </AboutSection>
  );
};

export default AboutUs;

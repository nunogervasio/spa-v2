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
  ${"" /* flex-direction: column;
  margin: 3rem auto;
  @media (min-width: 992px) {
    max-width: 1100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
  } */}
`;
const AboutContainer = styled.div`
  flex-direction: column;
  margin: 2rem 1rem;
  @media (min-width: 992px) {
    margin: 2rem 2rem;
    max-width: 1100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
    column-gap: 1.5rem;
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
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 2rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    column-gap: 2rem;
  }
`;
const TitlePrimary = styled(Title)`
  text-align: right;
  font-size: 2.2rem;
  margin-top: 0;
`;

const CardWrapper = styled.div`
  background-color: whitesmoke;
  box-shadow: 0 0 15px -3px rgba(0, 0, 0, 0.5);
  width: 255px;
  @media (min-width: 992px) {
    width: 200px;
  }
  @media (min-width: 1100px) {
    width: 255px;
  }
`;
const AboutUs = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <TitleContainer>
          <Title>About Us</Title>
          <TitlePrimary>What We Provide The Best</TitlePrimary>
          <Paragraph>
            sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem
            ipsum dolor sit amet, eiusmod tempor incididunt ut labore
            consectetur adipiscing sed do eiusmod tempor incididunt ut Lorem
            ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
            adipiscing sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit
            amet
          </Paragraph>
          <Button>Read More</Button>
        </TitleContainer>
        <GridContainer>
          <CardWrapper>
            <ServiceCard title="Sea Freight" color="gold" icon="ship" />
          </CardWrapper>
          <CardWrapper>
            <ServiceCard title="Air Freight" color="tomato" icon="plane" />
          </CardWrapper>
          <CardWrapper>
            <ServiceCard title="Warehousing" color="dodgerblue" icon="cubes" />
          </CardWrapper>
          <CardWrapper>
            <ServiceCard
              title="Land Transport"
              color="forestgreen"
              icon="truck"
            />
          </CardWrapper>
        </GridContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutUs;

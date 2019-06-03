import React from "react";
import styled from "styled-components";
import { Section, Container, Title, Image, Paragraph } from "../components";
import ServiceCard from "../components/serviceCard";

const ServicesSection = styled(Section)`
  background: whitesmoke;
`;
const ServiceContainer = styled(Container)`
  margin: 3rem 1rem;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
const TitlePrimary = styled(Title)`
  ${"" /* text-align: right; */}
  font-size: 2.2rem;
  margin: 0;
`;

const TitleContainer = styled(Container)`
  flex-direction: column;
  padding: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-column: 1fr;
  @media (min-width: 440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Services = () => {
  return (
    <ServicesSection>
      <ServiceContainer>
        <TitleContainer>
          <Title>Services</Title>
          <TitlePrimary>
            We Provide The Best Transportation Services
          </TitlePrimary>
        </TitleContainer>

        <FlexContainer>
          <ServiceCard
            title="Timely Delivery"
            color="tomato"
            icon="clock"
            details={true}
          />
          <ServiceCard
            title="Land Transport"
            color="gold"
            icon="truck"
            details={true}
          />
          <ServiceCard
            title="Sea Freight"
            color="forestgreen"
            icon="ship"
            details={true}
          />
          <ServiceCard
            title="Air Freight"
            color="dodgerblue"
            icon="plane"
            details={true}
          />
          <ServiceCard
            title="Packaging and Store"
            color="forestgreen"
            icon="database"
            details={true}
          />
          <ServiceCard
            title="Logistic Solutions"
            color="dodgerblue"
            icon="check-square"
            details={true}
          />

          <ServiceCard
            title="Warehousing"
            color="tomato"
            icon="cubes"
            details={true}
          />
          <ServiceCard
            title="Quickest Cargo"
            color="gold"
            icon="history"
            details={true}
          />
        </FlexContainer>
      </ServiceContainer>
    </ServicesSection>
  );
};

export default Services;

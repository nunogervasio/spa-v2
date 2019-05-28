import React from "react";
import styled from "styled-components";
import { Section, Container, Title, Image, Paragraph } from "../components";
import img from "../images/delivery-truck.svg";

const ServicesSection = styled(Section)`
  background: whitesmoke;
`;
const ServiceContainer = styled(Container)`
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin: 2rem;
  max-width: 200px;
`;
const ServiceImage = styled(Image)`
  width: 75px;
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
          <ServiceCard>
            <ServiceImage src={img} />
            <Title>Land Transport</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
            </Paragraph>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src={img} />
            <Title>Land Transport</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
            </Paragraph>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src={img} />
            <Title>Land Transport</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
            </Paragraph>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src={img} />
            <Title>Land Transport</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
            </Paragraph>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src={img} />
            <Title>Land Transport</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
            </Paragraph>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src={img} />
            <Title>Land Transport</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
            </Paragraph>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src={img} />
            <Title>Land Transport</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
            </Paragraph>
          </ServiceCard>
          <ServiceCard>
            <ServiceImage src={img} />
            <Title>Land Transport</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nibh urna Lorem ipsum dolor sit amet, consectetur
            </Paragraph>
          </ServiceCard>
        </FlexContainer>
      </ServiceContainer>
    </ServicesSection>
  );
};

export default Services;

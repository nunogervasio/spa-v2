import React from "react";
import styled from "styled-components";
import { Section, Container, Title, Card } from "../components";

const TeamContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const TitleContainer = styled(Container)`
  flex-direction: column;
  padding: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const TitlePrimary = styled(Title)`
  font-size: 2.2rem;
  margin-top: 0;
`;
const CardContainer = styled(Container)``;
const Team = () => {
  return (
    <Section>
      <TeamContainer>
        <TitleContainer>
          <Title>Our Team</Title>
          <TitlePrimary>Our Expert Team Members</TitlePrimary>
        </TitleContainer>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </TeamContainer>
    </Section>
  );
};

export default Team;

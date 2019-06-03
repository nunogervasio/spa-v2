import React from "react";
import styled from "styled-components";
import { Section, Container, Title, Card } from "../components";

const TeamContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
`;

const TitleContainer = styled(Container)`
  flex-direction: column;
  padding: 1.5rem;
`;

const TitlePrimary = styled(Title)`
  font-size: 2.2rem;
  margin-top: 0;
`;
const CardContainer = styled.div`
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

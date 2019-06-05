import React from "react";
import styled from "styled-components";
import { Section, Container, Title, Card } from "../components";
import t1 from "../images/t1.jpg";
import t2 from "../images/t2.jpg";
import t3 from "../images/t3.jpg";
import t4 from "../images/t4.jpg";

const TeamContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: 3rem 1rem;
`;

const TitleContainer = styled(Container)`
  flex-direction: column;
  padding: 0 0 1.5rem 0;
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
    margin: 0 2.5rem;
  }
`;
const Team = () => {
  return (
    <Section>
      <TeamContainer>
        <TitleContainer>
          <Title gray>Our Team</Title>
          <TitlePrimary>Our Expert Team Members</TitlePrimary>
        </TitleContainer>
        <CardContainer>
          <Card img={t1} name="Jack Will" title="Manager" />
          <Card img={t2} name="Simon Bond" title="Delivery Person" />
          <Card img={t3} name="Lesley Carter" title="Technician" />
          <Card img={t4} name="Michael Smitch" title="Director" />
        </CardContainer>
      </TeamContainer>
    </Section>
  );
};

export default Team;

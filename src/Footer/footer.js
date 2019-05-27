import React from "react";
import styled from "styled-components";
import { Section } from "../components/section";
import { Container } from "../components/container";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterContainer>this is footer</FooterContainer>
      </Container>
    </Section>
  );
};

export default Footer;

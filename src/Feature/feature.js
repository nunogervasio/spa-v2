import React from "react";
import styled from "styled-components";
import { Image } from "../components/image";
import { Section } from "../components/section";
import { Container } from "../components/container";
import { Button } from "../components/button";
import { Paragraph } from "../components/paragraph";
import { Title } from "../components/title";
import yogi from "../images/yoga-guy.jpg";

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImgWrapper = styled.div`
  max-width: 600px;
  max-height: 400px;
  margin: 0.75em;
  order: 0;
`;

const FeatureText = styled.div`
  max-width: 600px;
  max-height: 400px;
  margin: 0.75em;
  display: flex;
  flex-direction: column;
  order: ${props => (props.swap === true ? -1 : 0)};
`;
const Feature = ({ swap }) => {
  return (
    <Section>
      <Container>
        <FeatureContainer>
          <ImgWrapper>
            <Image src={yogi} />
          </ImgWrapper>

          <FeatureText swap={swap}>
            <Title>Default Title</Title>
            <Paragraph>
              Ofrecemos diferentes tipos de yoga, power ashtanga, vinyasa flow,
              vinyasa chakra, yin y pilates. Con más de 20 clases por semana y
              una variedad de instructores certificados, nuestro horario y
              clases son para estudiantes de todos los niveles.
            </Paragraph>
            <Button>Normal</Button>
          </FeatureText>
        </FeatureContainer>
      </Container>
    </Section>
  );
};

export default Feature;

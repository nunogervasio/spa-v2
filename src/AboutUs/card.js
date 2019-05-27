import React from "react";
import styled from "styled-components";
import { Button } from "./button";
import { Paragraph } from "./paragraph";
import { Image } from "./image";
import { Container } from "./container";
import { Title } from "./title";
import yogi from "../images/yoga-guy.jpg";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  max-width: 1100px;
  margin: 0.75em;
  padding: 0.5em;
  background-color: white;
  border-radius: 2%;
`;

const Card = () => {
  return (
    <CardContainer>
      {/* <Image src="https://via.placeholder.com/260" /> */}
      <Image src={yogi} />
      <Title>Default Title</Title>
      <Paragraph>
        Ofrecemos diferentes tipos de yoga, power ashtanga, vinyasa flow,
        vinyasa chakra, yin y pilates. Con más de 20 clases por semana y una
        variedad de instructores certificados, nuestro horario y clases son para
        estudiantes de todos los niveles.
      </Paragraph>
      <Button>Normal</Button>
      {/* <Button primary>Normal Plus</Button> */}
    </CardContainer>
  );
};

export default Card;

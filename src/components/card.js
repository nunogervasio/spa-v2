import React from "react";
import styled from "styled-components";
import { Button } from "./button";
import { Paragraph } from "./paragraph";
import { Image } from "./image";
import { Title } from "./title";
import yogi from "../images/t1.jpg";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  ${"" /* max-width: 1100px; */}
  margin: 0.75em;
  padding: 0.5em;
  background-color: white;
  border-radius: 2%;
`;

const EmpImage = styled(Image)`
  border-radius: 50%;
`;
export const Card = () => {
  return (
    <CardContainer>
      {/* <Image src="https://via.placeholder.com/260" /> */}
      <EmpImage src={yogi} />
      <Title>Default Title</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
      </Paragraph>
      <Button>Profile</Button>
      {/* <Button primary>Normal Plus</Button> */}
    </CardContainer>
  );
};

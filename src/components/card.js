import React from "react";
import styled from "styled-components";
import { Button } from "./button";
import { Paragraph } from "./paragraph";
import { Image } from "./image";
import { Title } from "./title";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  ${"" /* max-width: 1100px; */}
  margin: 0.75em;
  padding: 1em;
  background-color: white;
  box-shadow: 0 0 15px -3px rgba(0, 0, 0, 0.2);
  max-width: 330px;
  height: 355px;
`;

const EmpImage = styled(Image)`
  border-radius: 50%;
`;
const RoleTitle = styled(Title)`
  font-size: 1rem;
  color: black;
  margin-top: 0;
`;
const ProfileName = styled(Title)`
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  color: midnightblue;
`;

export const Card = ({ img, name, title }) => {
  return (
    <CardContainer>
      {/* <Image src="https://via.placeholder.com/260" /> */}
      <EmpImage src={img} />
      <ProfileName>{name}</ProfileName>
      <RoleTitle>{title}</RoleTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
      </Paragraph>
      <Button>Profile</Button>
      {/* <Button primary>Normal Plus</Button> */}
    </CardContainer>
  );
};

import React from "react";
import styled from "styled-components";
import { Title, Paragraph } from "../components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin: 2rem;
  ${"" /* max-width: 200px; */}
`;

const ServiceCard = ({ title, color, icon, details }) => {
  return (
    <Card>
      <span className="fa-stack fa-2x">
        <i className="fas fa-circle fa-stack-2x" style={{ color: color }} />
        <i className={`fas fa-${icon} fa-stack-1x fa-inverse`} />
      </span>
      <Title>{title}</Title>
      {details === true ? (
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nibh urna Lorem ipsum dolor sit amet, consectetur
        </Paragraph>
      ) : null}
    </Card>
  );
};

export default ServiceCard;

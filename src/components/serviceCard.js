import React from "react";
import styled from "styled-components";
import { Title } from "./title";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceCard = ({ title, color, icon }) => {
  return (
    <Card>
      <span className="fa-stack fa-2x">
        <i className="fas fa-circle fa-stack-2x" style={{ color: color }} />
        <i className={`fas fa-${icon} fa-stack-1x fa-inverse`} />
      </span>
      <Title>{title}</Title>
    </Card>
  );
};

export default ServiceCard;

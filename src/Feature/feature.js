import React from "react";
import styled from "styled-components";
import { Container, Section, Title, Paragraph, Button } from "../components";
import img from "../images/loading-dock.jpg";

const HeaderSection = styled(Section)`
  flex-direction: column;
  ${"" /* height: 75vh; */}
  background-color: midnightblue;
  ${"" /* height: 600px; */}

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
`;
const HeaderImage = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: auto;
`;

const TitlePrimary = styled(Title)`
  font-size: 2.2rem;
  margin: 0;
`;
const TitleWrapper = styled.div`
  padding: 4em;
  color: lavenderblush;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Feature = () => {
  return (
    <HeaderSection>
      <HeaderImage />

      <TitleWrapper>
        <TitlePrimary>
          We Provide The Best Solution For Your Transport
        </TitlePrimary>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nibh urna Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Vestibulum nibh urna Lorem
          ipsum dolor sit amet, consectetur
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nibh urna Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
        </Paragraph>
      </TitleWrapper>
    </HeaderSection>
  );
};

export default Feature;

import React from "react";
import styled from "styled-components";
import Card from "./card";
import { Section } from "../components/section";
import { Container } from "../components/container";

// const AboutUs = () => {
const AboutUs = () => {
  return (
    <Section>
      <Container>
        <Card />
        <Card />
        <Card />
      </Container>
    </Section>
  );
};

export default AboutUs;

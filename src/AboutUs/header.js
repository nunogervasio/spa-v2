import React from "react";
import styled from "styled-components";
import { Title } from "./title";

// export const Header = styled.header`
//   border: 2px solid palevioletred;
// `;

const SubTitle = styled(Title)`
  font-size: 0.9em;
`;
const Header = () => {
  return (
    <header>
      <Title>Header of Page</Title>
      <SubTitle>Subtitle of the page...</SubTitle>
    </header>
  );
};

export default Header;

import React, { Component } from "react";
import styled from "styled-components";
import { Container, Section } from "../components";

const LargeMenu = styled.div`
  display: none;

  ${"" /* large menu 'display' is 'none' on displays up to 'max-width' */}
  @media (min-width: 700px) {
    ${"" /* background-color: midnightblue; */}
    background-color: #fff;
    height: 81px;
    display: flex;
    justify-content: space-between;
    ${"" /* max-width: 1100px; */}
  }
`;

const NavContiainer = styled(Container)`
  ${"" /* justify-content: space-between; */}
`;
class ResponsiveMenu extends Component {
  render() {
    const { menu } = this.props;

    return (
      <Section>
        <NavContiainer>
          <LargeMenu>{menu}</LargeMenu>
        </NavContiainer>
      </Section>
    );
  }
}

export default ResponsiveMenu;

import React, { Component } from "react";
import styled from "styled-components";
import { Container, Section } from "../components";

const LargeMenu = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 700px) {
      flex-direction: row;
    }
  }
  li {
    list-style-type: none;
    margin: 0.4rem 0;
    @media (min-width: 700px) {
      flex-direction: row;
      margin-left: 30px;
    }
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: midnightblue;

    &:hover {
      color: royalblue;
      transition: 0.5s;
    }
  }
`;

const SmallMenu = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 700px) {
      flex-direction: row;
    }
  }
  li {
    list-style-type: none;
    margin: 0.4rem 0;
    @media (min-width: 700px) {
      flex-direction: row;
      margin-left: 30px;
    }
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: midnightblue;

    &:hover {
      color: royalblue;
      transition: 0.5s;
    }
  }
`;
const Brand = styled.h1`
  font-size: 1.8rem;
  color: midnightblue;
  display: inline;
  margin: 0;
`;

const NavContainer = styled.div`
  background: #fff;
  margin: 0 2rem;
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    height: 59px;
  }
  @media (min-width: 1124px) {
    margin: 0 auto;
  }
`;
const NavSection = styled.section`
  background: #fff;
`;
class Test extends Component {
  state = {
    hiddin: true
  };

  handleClick = () => {
    this.setState({ hidden: !this.state.hiddin });
  };

  render() {
    return (
      <NavSection>
        <NavContainer>
          <Brand>Cargoes</Brand>
          <LargeMenu>
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
            {/* <span>
              <i class="fas fa-bars" />
            </span>
            <span>
              <i class="fas fa-times" />
            </span> */}
          </LargeMenu>
        </NavContainer>
      </NavSection>
    );
  }
}

export default Test;

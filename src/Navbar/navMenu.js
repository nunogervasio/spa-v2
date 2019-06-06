import React from "react";
import styled from "styled-components";
import ResponsiveMenu from "./responsiveMenu";

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: midnightblue;
    display: inline;
    margin: 0;
  }
  ul {
    padding: 0;
    margin: 0;
  }

  li {
    display: inline;
    list-style-type: none;
    margin-left: 30px;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    color: midnightblue;

    &:hover {
      color: pink;
    }
  }

  @media (max-width: 576px) {
    padding: 10px 0;
    li {
      padding: 10px 0;
      display: block;
      margin-left: 0;
    }
  }
`;

const NavMenu = () => {
  return (
    <React.Fragment>
      <ResponsiveMenu
        menu={
          <Menu>
            <h1>Cargo</h1>
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </Menu>
        }
      />
    </React.Fragment>
  );
};

export default NavMenu;

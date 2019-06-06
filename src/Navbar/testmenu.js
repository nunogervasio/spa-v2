import React from "react";
import styled from "styled-components";
import ResponsiveMenu from "./responsiveMenu";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";

const Menu = styled.div`
  ul {
    padding: 0;
    margin: 0;
  }

  li {
    display: block;
    padding: 0.5rem 0;
    margin: 0;
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

  @media (min-width: 700px) {
    li {
      display: inline;
      padding-left: 2rem;
    }
  }
`;

const NavMenu = () => {
  return (
    <React.Fragment>
      <ResponsiveMenu
        menuOpenButton={<FaBars size={20} color="midnightblue" />}
        menuCloseButton={<FaRegWindowClose size={20} color="midnightblue" />}
        menu={
          <Menu>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </Menu>
        }
      />
    </React.Fragment>
  );
};

export default NavMenu;

import React, { Component } from "react";
import styled from "styled-components";

const LargeMenu = styled.div`
  background-color: #fff;
  height: 59px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Brand = styled.h1`
  font-size: 1.2rem;
  @media (min-width: 700px) {
    color: midnightblue;
    display: inline;
    margin: 0;
    font-size: 1.8rem;
  }
`;

const ResponsiveMenuWrapper = styled.div`
  margin: 0 2rem;
`;

const MenuIcon = ({ onClick, icon }) => (
  <div role="button" onClick={onClick}>
    {icon}
  </div>
);

const MenuOrder = styled.div`
  order: 1;
`;
class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { menu, menuOpenButton, menuCloseButton } = this.props;

    const SmallMenu = styled.div`
      background-color: #fff;
      display: none;
      text-align: center;
      @media (max-width: 700px) {
        display: flex;
        flex-direction: ${this.state.showMenu === true ? "column" : "row"};
        justify-content: ${this.state.showMenu === true
          ? "center"
          : "space-between"};

        padding: ${this.state.showMenu === true ? "0.5rem 0" : null};
        align-items: center;
      }
    `;

    return (
      <ResponsiveMenuWrapper>
        <LargeMenu>
          <Brand>Cargoes</Brand>
          {menu}
        </LargeMenu>

        <SmallMenu menuHeight={this.state.showMenu}>
          {this.state.showMenu ? (
            <MenuOrder>{menu}</MenuOrder>
          ) : (
            <Brand>Cargoes</Brand>
          )}
          {!this.state.showMenu ? (
            <MenuIcon onClick={this.handleClick} icon={menuOpenButton} />
          ) : (
            <MenuIcon onClick={this.handleClick} icon={menuCloseButton} />
          )}
        </SmallMenu>
      </ResponsiveMenuWrapper>
    );
  }
}

export default ResponsiveMenu;

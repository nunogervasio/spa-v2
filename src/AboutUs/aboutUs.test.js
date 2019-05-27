import React from "react";
import { shallow } from "enzyme";
import styled from "styled-components";
import { enzymeFind } from "styled-components/test-utils";
import AboutUs from "./aboutUs";
import toJson from "enzyme-to-json";

const wrapper = shallow(<AboutUs />); // StyledButton is your styled-components's component
// const renderedComponent = enzymeFind(wrapper, AboutUs);

it("renders properly", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});
// expect(renderedComponent.prop('className')).toBeDefined();

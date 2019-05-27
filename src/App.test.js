import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import App from "./App";
import toJson from "enzyme-to-json";

it("renders properly", () => {
  const app = shallow(<App />);
  expect(toJson(app)).toMatchSnapshot();
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

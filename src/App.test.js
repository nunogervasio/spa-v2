import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import App from "./App";

it("renders properly", () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import styled, { css } from "styled-components";

export const Button = styled.button`
  background: ${props => (props.primary ? "gainsboro" : "white")};
  color: ${props => (props.primary ? "white" : "midnightblue")};

  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid gainsboro;
  border-radius: 3px;
  :hover {
    cursor: pointer;
    background: gainsboro;
  }
  :focus {
    outline: none;
  }
  transition: 0.5s;

  ${props =>
    props.dark &&
    css`
      :hover {
        background: midnightblue;
        color: white;
      }
    `};
`;

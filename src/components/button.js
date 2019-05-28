import styled from "styled-components";

export const Button = styled.button`
  background: ${props => (props.primary ? "gainsboro" : "white")};
  color: ${props => (props.primary ? "white" : "cornflowerblue")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid gainsboro;
  border-radius: 3px;
  ${"" /* max-width: 150px; */}
`;

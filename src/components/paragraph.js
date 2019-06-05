import styled from "styled-components";

export const Paragraph = styled.p`
  ${"" /* align-self: center; */}
  text-align: ${props => (props.left ? "left" : "center")};
  line-height: 1.5;
  font-size: 14px;
`;

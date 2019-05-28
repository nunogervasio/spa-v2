import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

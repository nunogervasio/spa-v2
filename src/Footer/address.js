import React from "react";
import styled from "styled-components";
import { Title, Paragraph } from "../components";

const FooterAddress = styled.div`
  line-height: 100%;
  li,
  li h5,
  li p {
    display: inline;
  }
  h5 {
    margin-right: 0.25rem;
  }
`;
const FooterTitle = styled(Title)`
  text-align: left;
`;
// also in newletter -> refactor
const FooterPara = styled(Paragraph)`
  text-align: left;
  line-height: 24px;
  color: darkgray;
`;

const Address = () => {
  return (
    <FooterAddress>
      <FooterTitle>
        <a href="#">Cargoes</a>
      </FooterTitle>
      <div>
        <ul>
          <li>
            <h5>Address</h5>
          </li>
          <li>
            <FooterPara>Melbourne st, QLD 4101,Australia</FooterPara>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h5>Email</h5>
          </li>
          <li>
            <FooterPara>
              <a href="mailto:info@example.com">info@example1.com</a>
            </FooterPara>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <h5>Phone</h5>
          </li>
          <li>
            <FooterPara>+(000) 123 4565 32</FooterPara>
          </li>
        </ul>
      </div>
    </FooterAddress>
  );
};

export default Address;

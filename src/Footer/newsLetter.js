import React from "react";
import styled from "styled-components";
import { Paragraph } from "../components";
import { FaEnvelope, FaFacebook, FaTwitter, FaRss } from "react-icons/fa";

const Form = styled.div`
  input {
    border: 1px solid #fff;
  }
  button {
    border: 1px solid transparent;
    background: midnightblue;
    border: 1px solid #fff;
  }
  input,
  button {
    display: inline;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 0;
    -webkit-appearance: none;
  }
`;
// also in address -> refactor
const FooterPara = styled(Paragraph)`
  text-align: left;
  line-height: 24px;
  color: darkgray;
`;
const MediaIcon = styled.div`
  display: inline;
  margin: 0 6px;
`;
const NewsLetter = () => {
  return (
    <div>
      <h3>Newsletter</h3>
      <Form>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required=""
          />
          <button type="submit">
            <FaEnvelope color="white" size="1em" />
          </button>
        </form>
      </Form>

      <FooterPara>
        vehicula velit sagittis vehicula. Duis posuere ex in mollis iaculis.
        Suspendisse tincidunt velit sagittis vehicula
      </FooterPara>

      <MediaIcon />
      <a href="#">
        <FaFacebook color="white" size="1.2em" />
      </a>
      <MediaIcon>
        <a href="#">
          <FaTwitter color="white" size="1.2em" />
        </a>
      </MediaIcon>
      <MediaIcon>
        <a href="#">
          <FaRss color="white" size="1.2em" />
        </a>
      </MediaIcon>
    </div>
  );
};

export default NewsLetter;

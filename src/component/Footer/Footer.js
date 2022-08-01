import React from "react";
import SrollToTop from "../ScrollToTop/SrollToTop";
import { Container, FooterWrapper, Para, Span, TextBox } from "./footerStyles";

function Footer() {
  return (
    <Container>
      <FooterWrapper>
        <TextBox>
          <Para>© 2022. All right Reserved</Para>
          <Para>
            Designed and built by&nbsp;
            <Span>John Ahachi</Span>
          </Para>
        </TextBox>
        <SrollToTop />
      </FooterWrapper>
    </Container>
  );
}

export default Footer;

import React from "react";
import { Container, Section } from "../../GlobalStyles";
import { ContainerWrapper, FormContainer, TextWrapper } from "./ContactStyles";

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <ContainerWrapper>
          <TextWrapper>
            <h3>Need a beautiful, fast and interactive website?</h3>
            <h1>
              Let's get it <span>started.</span>
            </h1>
          </TextWrapper>
          <FormContainer>
            <form>
              <div>
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder=""
                    id="user_name"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="user_name">Name</label>
                </div>
                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder=""
                    id="user_email"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="user_email">Email</label>
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="20"
                  required
                  placeholder=""
                />
                <label htmlFor="message">Message</label>
              </div>
              <button type="submit">Send</button>
            </form>
          </FormContainer>
        </ContainerWrapper>
      </Container>
    </Section>
  );
};

export default Contact;

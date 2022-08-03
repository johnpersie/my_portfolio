import React, { useEffect, useRef, useState } from "react";
import { Container } from "../../GlobalStyles";
import {
  ContactSection,
  ContainerWrapper,
  FormContainer,
  TextWrapper,
} from "./ContactStyles";
import emailjs from "@emailjs/browser";
import Alert from "../alert";
import CardLink from "./CardLink";
import { ScaleInAnimations } from "../Motion/animation";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Contact = () => {
  const [alert, setAlert] = useState(null);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView ? control.start("show") : control.start("hidden");
  }, [control, inView]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 10000);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent", result.text);
          showAlert(
            "Message sent",
            "I will get back to you as soon as possible"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <ContainerWrapper>
          <TextWrapper>
            <h3>Need a beautiful, fast and interactive website?</h3>
            <h1>
              Let's get it <span>started.</span>
            </h1>
          </TextWrapper>
          <FormContainer
            variants={ScaleInAnimations}
            initial="hidden"
            animate={control}
            transition={{ delay: 0.6, duration: "1", type: "spring" }}
          >
            <form ref={form} onSubmit={sendEmail}>
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
            <Alert alert={alert} />
          </FormContainer>
        </ContainerWrapper>
        <CardLink />
      </Container>
    </ContactSection>
  );
};

export default Contact;

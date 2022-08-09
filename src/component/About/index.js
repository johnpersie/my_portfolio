import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import {
  AboutContent,
  AboutLink,
  AboutSection,
  Img,
  ImgWrapper,
  Title,
  Wrapper,
  ContentWrapper,
  Container,
} from "./AboutStyles";
import { AboutAnimations, projectAnimations } from "../Motion/animation";
import { useInView } from "react-intersection-observer";
import resume from "../../Assets/JohnAhachi.pdf";

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView || control.start("show");
  }, [control, inView]);
  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <Title
          variants={projectAnimations}
          transition={{ delay: 0.5, type: "tween" }}
          animate={control}
          initial="hidden"
        >
          About Me
        </Title>
        <Wrapper
          variants={AboutAnimations}
          transition={{ delay: 0.6, duration: 1.2, type: "spring" }}
          animate={control}
          initial="hidden"
        >
          <ImgWrapper>
            <Img src={require("../../Assets/john.jpg")} alt="skills" />
          </ImgWrapper>
          <AboutContent>
            <ContentWrapper>
              <p>
                I like to code things from scratch, and enjoy bringing ideas to
                life to websites. I have a good understanding of relational
                databases as well as solid computer software foundations such as
                DOM manipulations and complex alogrithms.
              </p>
              <p>
                I have developed a passion for the software industry over the
                years and enjoy what I do. I prefer to keep learning, continue
                challenging myself, and do interesting things that matter.
              </p>
              <p>
                My goal is to always build products that provide rich
                interactive, high performing and pixel-perfect experience.
              </p>
              <AboutLink>
                <a href={resume} download target="_blank" rel="noreferrer">
                  Resume
                </a>
              </AboutLink>
            </ContentWrapper>
          </AboutContent>
        </Wrapper>
      </Container>
    </AboutSection>
  );
};

export default About;

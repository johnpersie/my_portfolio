import React from "react";
import TypewriterComponent from "typewriter-effect";
import Button from "../reuseableComponents/Button";
import {
  Container,
  HeroSection,
  HeroContent,
  HeroSubHeading,
  HeroHeading,
  HeroDescription,
  TypewriterText,
  Row,
  Arrow,
  Mouse,
  MouseDownWrapper,
} from "./HeroStyles";

import { heroAnimations } from "../Motion/animation";

const Hero = () => {
  return (
    <HeroSection id="hero">
      <Container>
        <HeroContent
          variants={heroAnimations}
          transition={{ delay: 0.6, type: "spring" }}
        >
          <HeroSubHeading>
            👋 hello there, i am <span>john</span>
          </HeroSubHeading>
          <HeroHeading>Frontend Developer</HeroHeading>
          <HeroDescription>
            I build high-performing, beautiful and rich interactive websites
            with React, JavaScript and some other cool libraries and frameworks.
          </HeroDescription>
          <TypewriterText>
            <p>My work focuses on:&nbsp;</p>
            <TypewriterComponent
              options={{
                cursor: " />",
                strings: [
                  "Responsive Layout",
                  "Accessibility",
                  "Scalability",
                  "Maintainable Code",
                  "Brand Accurate",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </TypewriterText>
          <Row>
            <Button href="#contact" text="Get in touch" />
            <Button href="#project" text="View Project" />
          </Row>
        </HeroContent>
      </Container>
      <MouseDownWrapper href="#about">
        <div>
          <Mouse />
          <Arrow />
        </div>
      </MouseDownWrapper>
    </HeroSection>
  );
};

export default Hero;

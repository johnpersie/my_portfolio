import React from "react";
import { Section } from "../../GlobalStyles";
import { technologies } from "../Data/TechStackData";
import {
  Heading,
  Para,
  TechContainer,
  Title,
  Technologies,
  Wrapper,
  Tech,
  TextWrapper,
} from "./TechStackStyles";

const TechStack = () => {
  return (
    <Section id="tech-stack">
      <TechContainer>
        <Wrapper>
          <TextWrapper>
            <Title>TechStack</Title>
            <Heading>My Toolbox & Things I Can Do</Heading>
            <Para>
              The skills, tools and technologies I use to bring your products to
              life:
            </Para>
          </TextWrapper>
          <Technologies>
            <Tech>
              {technologies.map((item) => (
                <figure key={item.id}>
                  <img src={item.icon} alt="" />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </Tech>
          </Technologies>
        </Wrapper>
      </TechContainer>
    </Section>
  );
};

export default TechStack;

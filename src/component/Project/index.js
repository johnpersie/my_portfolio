import React from "react";
import { Container, Heading, MainHeading, Section } from "../../GlobalStyles";
import { data } from "../Data/ProjectData";
import {
  Checked,
  Col1,
  Col2,
  Img,
  // Overlay,
  ProjectWrapper,
  Row,
  TextWrapper,
  Wrapper,
} from "./ProjectStyles";

const Project = () => {
  return (
    <Section>
      <Container>
        <ProjectWrapper>
          <MainHeading>Portfolio</MainHeading>
          <Heading>have a look at my portfolio projects</Heading>
          {data.map((items) => (
            <Row key={items.id}>
              <Col1>
                <Wrapper>
                  <a href={items.live}>
                    <Img src={items.img} alt="project-img" />
                  </a>
                  {/* <Overlay></Overlay> */}
                </Wrapper>
              </Col1>
              <Col2>
                <Wrapper>
                  <TextWrapper>
                    <h3></h3>
                    <h2></h2>
                    <p></p>
                  </TextWrapper>
                  <TextWrapper>
                    <div></div>
                  </TextWrapper>
                  <TextWrapper>
                    <span>
                      {items.stack.map((tech, index) => (
                        <p key={index}>
                          <Checked />
                          {tech}
                        </p>
                      ))}
                    </span>
                  </TextWrapper>
                </Wrapper>
              </Col2>
            </Row>
          ))}
        </ProjectWrapper>
      </Container>
    </Section>
  );
};

export default Project;

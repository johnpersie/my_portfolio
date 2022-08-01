import React from "react";
import { Container, Section } from "../../GlobalStyles";
import { data } from "../Data/ProjectData";
import {
  Checked,
  Code,
  Col1,
  Col2,
  Img,
  Link,
  LinkItem,
  Monitor,
  ProjectWrapper,
  Row,
  TextWrapper,
  Description,
  Wrapper,
  TitleWrapper,
  ProjectTitle,
  SubTitle,
  Parag,
  Heading,
  SubHeading,
} from "./ProjectStyles";

const Project = () => {
  return (
    <Section id="project">
      <Container>
        <ProjectWrapper>
          <Heading>Projects</Heading>
          <SubHeading>Some Things I’ve Built</SubHeading>
          {data.map((items) => (
            <Row key={items.id} fd={items.id % 2 === 0 && "row-reverse"}>
              <Col1>
                <Wrapper>
                  <a href={items.live}>
                    <Img src={items.img} alt="project-img" />
                  </a>
                </Wrapper>
              </Col1>
              <Col2 ai={items.id % 2 === 0 && "flex-start"}>
                <TitleWrapper>
                  <SubTitle>{items.team}</SubTitle>
                  <ProjectTitle>{items.title}</ProjectTitle>
                </TitleWrapper>
                <Description jc={items.id % 2 === 0 && "flex-start"}>
                  <div>
                    <Parag ta={items.id % 2 === 0 && "start"}>
                      {items.text} {items.text1}
                    </Parag>
                  </div>
                </Description>
                <TextWrapper jc={items.id % 2 === 0 && "flex-start"}>
                  <span>
                    {items.stack.map((tech, index) => (
                      <p key={index}>
                        <Checked />
                        {tech}
                      </p>
                    ))}
                  </span>
                  <LinkItem>
                    <Link href={items.code}>
                      <Code />
                    </Link>
                    <Link href={items.live}>
                      <Monitor />
                    </Link>
                  </LinkItem>
                </TextWrapper>
              </Col2>
            </Row>
          ))}
        </ProjectWrapper>
      </Container>
    </Section>
  );
};

export default Project;

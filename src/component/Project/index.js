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
  HeadingWrapper,
} from "./ProjectStyles";
import { projectAnimations, slideInAnimations } from "../Motion/animation";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Project = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView || control.start("show");
  }, [control, inView]);
  return (
    <Section id="project" ref={ref}>
      <Container>
        <ProjectWrapper>
          <HeadingWrapper
            initial="hidden"
            variants={projectAnimations}
            transition={{ delay: 0.3, type: "spring" }}
            animate={control}
          >
            <Heading>Projects</Heading>
            <SubHeading>Some Things I’ve Built</SubHeading>
          </HeadingWrapper>
          {data.map((items) => (
            <Row key={items.id} fd={items.id % 2 === 0 && "row-reverse"}>
              <Col1
                variants={projectAnimations}
                transition={{ delay: 0.5, type: "tween" }}
                animate={control}
                initial="hidden"
              >
                <Wrapper>
                  <a href={items.live}>
                    <Img src={items.img} alt="project-img" />
                  </a>
                </Wrapper>
              </Col1>
              <Col2 ai={items.id % 2 === 0 && "flex-start"}>
                <TitleWrapper
                  variants={projectAnimations}
                  transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                  animate={control}
                  initial="hidden"
                >
                  <SubTitle>{items.team}</SubTitle>
                  <ProjectTitle>{items.title}</ProjectTitle>
                </TitleWrapper>
                <Description
                  variants={slideInAnimations}
                  transition={{ delay: 0.6, duration: "1", type: "tween" }}
                  jc={items.id % 2 === 0 && "flex-start"}
                  animate={control}
                  initial="hidden"
                >
                  <div>
                    <Parag ta={items.id % 2 === 0 && "start"}>
                      {items.text} {items.text1}
                    </Parag>
                  </div>
                </Description>
                <TextWrapper
                  variants={slideInAnimations}
                  transition={{ delay: 1.2, duration: "1", type: "tween" }}
                  animate={control}
                  initial="hidden"
                  jc={items.id % 2 === 0 && "flex-start"}
                >
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

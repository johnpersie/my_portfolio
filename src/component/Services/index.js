import React from "react";
import { Container, Section } from "../../GlobalStyles";
import { Item } from "../Data/ServicesData";
import {
  Card,
  CardWrapper,
  ContainerWrapper,
  PageHeading,
  PageHeadingContainer,
} from "./ServicesStyles";

const Service = () => {
  return (
    <Section id="services">
      <Container>
        <ContainerWrapper>
          <PageHeadingContainer>
            <PageHeading>Services</PageHeading>
          </PageHeadingContainer>
          <CardWrapper>
            {Item.map(({ icon, text, parag, id }) => (
              <Card key={id}>
                <div>{icon}</div>
                <h3>{text}</h3>
                <p>{parag}</p>
              </Card>
            ))}
          </CardWrapper>
        </ContainerWrapper>
      </Container>
    </Section>
  );
};

export default Service;

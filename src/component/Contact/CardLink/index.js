import React from "react";
import Card from "../../Data/Card";
import {
  CardContainer,
  Col,
  Content,
  Heading,
  HeadingContainer,
  ImgContainer,
  Roll,
  Text,
  Para,
} from "./CardLinkStyles";

const CardLink = () => {
  return (
    <CardContainer>
      <HeadingContainer>
        <Heading>Code & Design Presence</Heading>
        <Text>Other platforms I code, design and connect with.</Text>
      </HeadingContainer>
      <Roll>
        {Card.map((item) => (
          <Col href={item.link} key={item.id}>
            <Content>
              <Para>{item.name}</Para>
              <Para>{item.text}</Para>
            </Content>
            <ImgContainer>{item.icon}</ImgContainer>
          </Col>
        ))}
      </Roll>
    </CardContainer>
  );
};

export default CardLink;

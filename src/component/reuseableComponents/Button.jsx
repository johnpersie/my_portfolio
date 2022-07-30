import React from "react";
import styled from "styled-components";
import { LinkButton } from "../../GlobalStyles";

const white = ({ theme }) => theme.color.white;
const orange2 = ({ theme }) => theme.color.orange2;
const black2 = ({ theme }) => theme.color.black2;

const ButtonLink = styled(LinkButton)`
  position: relative;
  display: inline-block;
  padding: 1.5rem 3rem;
  color: ${white};
  background: ${black2};
  transition: 0.5s;
  border-radius: 0.2rem;
  outline: none;
  margin-right: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    margin-right: 0;
    padding: 1.5rem 2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.xsm}) {
    margin-right: 0;
    padding: 1rem 1rem;
  }
  span {
    position: absolute;
    display: block;
    background: ${orange2};

    :nth-child(1) {
      left: 0;
      bottom: 0;
      width: 2px;
      height: 100%;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.3s;
    }
  }
  &:hover span:nth-child(1) {
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 0.3s;
  }

  span {
    position: absolute;
    display: block;
    background: ${orange2};

    :nth-child(2) {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s;
    }
  }
  &:hover span:nth-child(2) {
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.3s;
  }
  span {
    position: absolute;
    display: block;
    background: ${orange2};

    :nth-child(3) {
      right: 0;
      bottom: 0;
      width: 2px;
      height: 100%;
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.3s;
      transition-delay: 0.3s;
    }
  }
  &:hover span:nth-child(3) {
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 0.3s;
    transition-delay: 0.3s;
  }
  span {
    position: absolute;
    display: block;
    background: ${orange2};

    :nth-child(4) {
      left: 0;
      top: 0;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s;
      transition-delay: 0.3s;
    }
  }
  &:hover span:nth-child(4) {
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.3s;
    transition-delay: 0.3s;
  }
`;

const Button = ({ href, text }) => {
  return (
    <ButtonLink href={href}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </ButtonLink>
  );
};

export default Button;

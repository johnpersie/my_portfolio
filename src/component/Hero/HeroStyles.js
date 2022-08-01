import styled from "styled-components";
import { BsMouse } from "react-icons/bs";
import { VscArrowSmallDown } from "react-icons/vsc";

import { Heading, MainHeading, paragraph, Section } from "../../GlobalStyles";
import bg from "../../image/bg.jpg";

const white1 = ({ theme }) => theme.color.white1;
const orange = ({ theme }) => theme.color.orange;
const blackOpacity = ({ theme }) => theme.color.blackOpacity;

export const HeroSection = styled(Section)`
  background-image: url(${bg});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-attachment: fixed;
  box-shadow: inset 0 0 0 100rem ${blackOpacity};
  background-size: cover;
  background-attachment: fixed;
`;

export const Container = styled.div`
  max-width: 120rem;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  align-items: center;
  display: flex;
  transition: 0.5s;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    margin: 0 auto;
    text-align: start;
    padding: 0;
  }
`;

export const HeroContent = styled.div`
  color: ${white1};
`;
export const HeroSubHeading = styled(Heading)`
  font-size: clamp(1.3rem, 5vw, 2rem);
  padding: 0 0 2rem 0;
  text-transform: uppercase;

  span {
    color: ${orange};
    font-size: clamp(1.3rem, 5vw, 2rem);
  }
`;

export const HeroHeading = styled(MainHeading)`
  font-size: clamp(2.7rem, 5vw, 7rem);
  padding: 1rem 0 2rem 0;
  text-transform: capitalize;
`;
export const HeroDescription = styled(paragraph)`
  font-weight: 300;
  line-height: 2;
  font-size: clamp(1.6rem, 3vw, 1.8rem);
  max-width: 60rem;
`;

export const TypewriterText = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4rem;
  font-size: clamp(1.6rem, 3vw, 1.9rem);
  font-family: "Poppins", sans-serif;
  p {
  }
  span {
    color: ${orange};
    @media screen and (max-width: 293px) {
      display: block;
    }
  }
`;
export const Row = styled.div`
  margin: 0 auto;
  margin-top: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    a {
      :first-child {
        margin-right: 2rem;
      }
    }
  }
`;

export const MouseDownWrapper = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0.1rem;
    transform: translateX(-50%);
    color: #fff;
    font-size: 4rem;
    opacity: 0.2;
    animation: bounce 1.5s infinite ease-out;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
export const Mouse = styled(BsMouse)``;
export const Arrow = styled(VscArrowSmallDown)`
  font-size: 2rem;
`;

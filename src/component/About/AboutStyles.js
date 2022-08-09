import { motion } from "framer-motion";
import styled from "styled-components";

const orange = ({ theme }) => theme.color.orange;

export const AboutSection = styled.div`
  width: 100%;
  padding: 5rem 0;
`;
export const Container = styled.div`
  max-width: 120rem;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Wrapper = styled(motion.div)`
  /* width: 100%; */
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const Title = styled(motion.h1)`
  display: inline-block;
  font-size: clamp(2.5rem, 5vw, 3rem);
  position: relative;
  margin: 4rem 0;

  ::before {
    content: "";
    height: 0.5rem;
    width: 10%;
    background-color: ${orange};
    opacity: 0.8;
    position: absolute;
    bottom: 0px;
    border-radius: 0.5rem;
  }
`;
export const ImgWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-items: center;
  align-items: center;
  flex: 0 1 25rem;
  @media screen and (max-width: 960px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    align-items: center;
  }
`;
export const Img = styled.img`
  position: relative;
  width: 100%;
  filter: grayscale(1);

  @media screen and (max-width: 960px) {
    filter: brightness(100%) contrast(110%) saturate(1);
    ::after {
      display: none;
    }
    :hover {
      display: none;
    }
  }
  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  :hover {
    transform: rotate(-5deg) scale(1.05);
    filter: grayscale(0);
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutContent = styled.div`
  max-width: 45%;
  padding: 2rem 2rem;
  flex: 1 1 60%;

  @media screen and (max-width: 960px) {
    max-width: 50%;
    padding: 1rem 1rem;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }

  h1 {
    font-size: clamp(1.8rem, 3vw, 2rem);
    font-weight: 200;
    font-family: "Loto", sans-serif;
    line-height: 1.8;

    @media screen and (max-width: 960px) {
      text-align: center;
    }
  }
  p {
    color: #b1b1b1;
    font-size: clamp(1.5rem, 3vw, 1.6rem);
    padding: 1rem 0;
    line-height: 1.8;
    :first-child {
      padding-top: 0;
    }
  }
`;

export const AboutLink = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
  a {
    color: inherit;
    display: inline-block;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    border: 1.5px solid ${orange};
    outline: none;
    margin-top: 1.5rem;

    &:hover {
      transition: all 0.3s ease-out;
      color: black;
      background-color: ${orange};
    }
  }
`;

import styled from "styled-components";
import { Container } from "../../GlobalStyles";

const orange = ({ theme }) => theme.color.orange;
const gray = ({ theme }) => theme.color.gray;

export const TechContainer = styled(Container)`
  background: ${gray};
  width: 100%;
`;
export const Wrapper = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: auto;
`;
export const TextWrapper = styled.div`
  width: 100%;
`;
export const Title = styled.h1`
  display: inline-block;
  position: relative;
  font-size: clamp(2.5rem, 3vw, 3rem);
  margin-bottom: 1rem;

  ::before {
    content: "";
    height: 0.5rem;
    width: 90%;
    background-color: ${orange};
    opacity: 0.8;
    position: absolute;
    bottom: 0px;
    border-radius: 0.5rem;
  }
`;
export const Heading = styled.h2`
  font-weight: 400;
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 2rem;
`;
export const Para = styled.p`
  display: inline-block;
  font-size: clamp(1.6rem);
  color: ${orange};
`;

export const Technologies = styled.div`
  padding: 4rem 0;
`;

export const Tech = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: 0.3s ease;

  @media screen and (max-width: 960px) {
    width: 100%;
    transition: 0.3s ease;
  }
  figure {
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    text-align: center;
    padding: 1rem;
    width: 12rem;
    height: 15rem;
    margin-right: 1rem;
    transition: transform 0.2s;

    img {
      max-width: 100%;
      height: 7rem;
      width: 8rem;
      padding-bottom: 0.7rem;
      border-bottom: 0.15rem solid rgb(153, 153, 153);
      filter: grayscale();
    }
    figcaption {
      margin-top: 1rem;
    }
    :hover {
      transform: scale(1.1);
    }
    :hover img {
      filter: brightness(100%) contrast(140%) saturate(1);
    }
  }
`;
export const Libraries = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
`;
export const Tools = styled.div`
  justify-content: space-evenly;
  flex: 1;
  display: flex;
`;

import styled from "styled-components";

const black = ({ theme }) => theme.color.black;
const orange = ({ theme }) => theme.color.orange;
const whitesmoke = ({ theme }) => theme.color.whitesmoke;

export const CardContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 8rem 0 4rem;
`;

export const HeadingContainer = styled.div`
  text-align: center;
  margin-bottom: 6rem;

  @media screen and (max-width: 960px) {
    padding: 1rem 1rem;
  }
`;
export const Heading = styled.h1`
  margin-top: 3rem;
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: uppercase;
`;
export const Text = styled.p`
  margin-top: 1rem;
  font-weight: 300;
  color: ${orange};

  font-size: 1.5rem;
`;
export const Roll = styled.div`
  max-width: 120rem;
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 2rem;

  @media screen and (max-width: 960px) {
    width: 98%;
    padding: 1rem 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 98%;
    padding: 1rem 1rem;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
    padding: 1rem 1rem;
  }
`;
export const Col = styled.a`
  padding: 1.5rem;
  width: 30%;
  display: flex;
  text-decoration: none;
  color: ${whitesmoke};
  align-items: center;
  border-radius: 1rem;
  border: 1px solid #ffc75f8f;
  transition: 250ms ease-in;
  @media screen and (max-width: 960px) {
    width: 32%;
    padding: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    width: 45%;
  }
  @media screen and (max-width: 720px) {
    width: 45%;
  }
  @media screen and (max-width: 450px) {
    width: 80%;
    padding: 1rem;
  }
  @media screen and (max-width: 320px) {
    width: 80%;
    padding: 1rem;
  }
  :hover {
    color: ${black};
    background: ${orange};
    transition: 250ms ease-in;
  }
`;
export const Para = styled.p`
  width: 100%;
  font-size: clamp(1.3rem, 5vw, 1.6rem);
  font-weight: 800;
  text-transform: uppercase;

  :last-child {
    width: 100%;
    font-size: clamp(1.1rem, 5vw, 1.2rem);
    font-weight: 400;
    text-transform: capitalize;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;
export const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

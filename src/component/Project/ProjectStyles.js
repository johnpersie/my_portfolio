import styled from "styled-components";
import { Container, MainHeading } from "../../GlobalStyles";
import { FaCheckCircle } from "react-icons/fa";
import { VscVmRunning, VscGithubInverted } from "react-icons/vsc";

const black2 = ({ theme }) => theme.color.black2;
const black1 = ({ theme }) => theme.color.black1;
const orange = ({ theme }) => theme.color.orange;
const gray = ({ theme }) => theme.color.gray;
const white = ({ theme }) => theme.color.white;

export const ProjectWrapper = styled(Container)`
  max-width: 120rem;
  width: 90%;
  margin: auto;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 96%;
  }
`;
export const Heading = styled(MainHeading)`
  position: relative;
  font-size: clamp(2.5rem, 5vw, 3rem);
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
export const SubHeading = styled.h3`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 3%;
  background-color: ${black2};
  width: 100%;
  padding: 3rem 2rem 4rem;
  align-items: center;
  margin: 0rem auto 5rem auto;
  transition: all 0.2s;
  flex-direction: ${({ fd }) => fd || "row"};

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    padding: 3rem 1rem 3rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.mid}) {
    flex-direction: column;
    row-gap: 2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
  }
`;
export const Content = styled.div``;
export const Col1 = styled.div`
  width: 50%;
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #0c0c0c6c;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: 0.5s ease;
  }
  :hover::before {
    height: 0;
  }
  position: relative;
  width: 50%;
  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  display: block;
  height: auto;
`;

export const Col2 = styled.div`
  display: flex;
  width: 50%;
  flex-direction: ${({ fd }) => fd || "column"};
  align-items: ${({ ai }) => ai || "flex-end"};

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100%;
    align-items: start;
    padding: 1rem;
  }
`;
export const TitleWrapper = styled.div`
  text-align: end;
  margin-bottom: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    text-align: start;
  }
`;
export const SubTitle = styled.h3`
  font-weight: 200;
`;
export const ProjectTitle = styled.h2`
  font-weight: 600;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ jc }) => jc || "flex-end"};

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    text-align: start;
  }
  div {
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    background: ${black1};

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      background: none;
      padding: 0;
    }
  }
`;
export const Parag = styled.p`
  text-align: ${({ ta }) => ta || "end"};
  font-weight: 300;
  font-size: clamp(1.4rem 5vw, 1.6rem);

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    text-align: start;
  }
`;
export const TextWrapper = styled.div`
  margin-top: 2rem;
  span {
    display: flex;
    flex-wrap: wrap;
    justify-content: ${({ jc }) => jc || "flex-end"};
    column-gap: 2rem;

    @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
      justify-content: start;
    }
  }

  p {
    font-size: clamp(1.4rem, 5vw, 1.6rem);
    text-align: center;
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    white-space: nowrap;
    padding: 0.5rem 1.2rem;
    border-radius: 0.7rem;
    background: ${gray};
    margin-bottom: 1rem;
    font-weight: 300;
  }
`;
export const LinkItem = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;
export const Link = styled.a`
  font-size: 3rem;
  &:last-child {
    margin-left: 2rem;
  }
`;

export const Checked = styled(FaCheckCircle)`
  color: ${orange};
  size: 3rem;
`;
export const Monitor = styled(VscVmRunning)`
  color: ${white};
`;
export const Code = styled(VscGithubInverted)`
  color: ${white};
`;

import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { FaCheckCircle } from "react-icons/fa";

const black2 = ({ theme }) => theme.color.black2;
const orange = ({ theme }) => theme.color.orange;
const gray = ({ theme }) => theme.color.gray;

export const ProjectWrapper = styled(Container)`
  max-width: 120rem;
  width: 90%;
  margin: auto;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 3%;
  background-color: ${black2};
  width: 100%;
  padding: 3rem 2rem 4rem;
  /* box-shadow: 0 0 15px 3px #0000006a; */
  align-items: flex-start;
  margin: 0rem auto 5rem auto;

  flex-direction: ${({ fd }) => fd || "row"};
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
`;

export const Wrapper = styled.div``;

export const Img = styled.img`
  width: 100%;
  display: block;
  height: auto;
`;

export const Col2 = styled.div`
  width: 50%;
`;
export const TextWrapper = styled.div`
  span {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  p {
    font-size: clamp(1.3rem, 5vw, 1.8rem);
    text-align: center;
    display: inline-flex;
    justify-content: flex-start;
    gap: 0.5rem;
    align-items: center;
    margin-left: 2rem;
    white-space: nowrap;
    padding: 0.5rem 1.2rem;
    border-radius: 0.7rem;
    background: ${gray};
    margin-bottom: 0.7rem;
  }
`;
export const Checked = styled(FaCheckCircle)`
  color: ${orange};
  size: 3rem;
`;

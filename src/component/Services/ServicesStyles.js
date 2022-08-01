import styled from "styled-components";

const orange = ({ theme }) => theme.color.orange;
const gray = ({ theme }) => theme.color.gray;
const white = ({ theme }) => theme.color.white;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 6rem 0;
  color: ${white};
`;
export const ContainerWrapper = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: auto;
`;
export const PageHeadingContainer = styled.div`
  margin: auto;
  margin-bottom: 5rem;
  margin-top: 5rem;
`;
export const PageHeading = styled.h1`
  position: relative;
  font-size: clamp(2.5rem, 3vw, 3rem);

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
export const CardWrapper = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 5rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Card = styled.div`
  padding: 3rem;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  transition: all 0.5s;

  div {
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    border: 2px solid ${orange};
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    font-weight: 600;
    margin: 1rem 0;
  }
  p {
    font-weight: 200;
    line-height: 1.8;
  }
  :hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 5px 3px ${gray};

    @media screen and (max-width: 960px) {
      transform: none;
    }
    @media screen and (max-width: 420px) {
      transform: none;
    }
  }
`;

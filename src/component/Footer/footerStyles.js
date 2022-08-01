import styled from "styled-components";

const black = ({ theme }) => theme.color.black;
const orange = ({ theme }) => theme.color.orange;

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem 0 3rem 0;
  background: ${black};
`;
export const FooterWrapper = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
`;
export const Para = styled.p`
  color: lightgray;
  font-weight: 400;
  font-size: clamp(1.3rem, 3vw, 1.8rem);
`;
export const Span = styled.span`
  color: ${orange};
`;

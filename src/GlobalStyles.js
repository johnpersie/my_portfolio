import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, 
*::before, 
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
::-webkit-scrollbar{
  display: none;
}

a{
  text-decoration: none;
}

body {
background:${({ theme }) => theme.color.bgBlack};
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.color.lavender};
  font-size: 1.6rem;
}

ul {
  list-style: none;
}
`;

export const Section = styled.section`
  background: ${({ bg }) => bg || ""};
  margin: ${({ margin }) => margin || "auto"};
  width: 100%;
`;

export const Container = styled.div`
  padding: ${({ padding }) => padding || "6rem 0"};
  width: ${({ width }) => width || ""};
`;

export const MainHeading = styled.h1`
  font-size: ${({ fs }) => fs || ""};
`;

export const Heading = styled.h2`
  font-size: ${({ fs }) => fs || ""};
`;
export const paragraph = styled.p`
  font-size: ${({ fs }) => fs || ""};
`;

export const TextWrapper = styled.span`
  letter-spacing: ${({ spacing }) => spacing || "1.8"};
  text-align: ${({ align }) => align || "center"};
`;
export const Row = styled.div`
  display: ${({ display }) => (display ? "flex" : "grid")};
  align-items: ${({ align }) => (align ? align : "")};
  padding: ${({ padding }) => padding || ""};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
`;

export const Column = styled.div`
  width: ${({ width }) => width || ""};
  align-items: ${({ align }) => align || ""};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
`;

export const Button = styled.div`
  outline: none;
  background-color: ${({ bg }) => bg || "transparent"};
  border: ${({ border }) => border || "none"};
`;

export const LinkButton = styled.a`
  border: ${({ border }) => border || "none"};
  padding: ${({ padding }) => padding || "1rem 1.5rem"};
  transition: 0.2s ease;
  cursor: pointer;
  color: ${({ color }) => color || ""};
  background-color: ${({ bg }) => bg || ""};
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  text-decoration: none;
`;

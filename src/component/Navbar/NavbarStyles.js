import styled from "styled-components";

const white1 = ({ theme }) => theme.color.white1;
const black1 = ({ theme }) => theme.color.black1;
const orange = ({ theme }) => theme.color.orange;
const gray = ({ theme }) => theme.color.gray;
const blackOpacity = ({ theme }) => theme.color.blackOpacity;

export const Nav = styled.nav`
  position: fixed;
  padding: 0 1.5rem;
  width: 100%;
  height: 7rem;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-content: center;
  background: ${black1};
  transition: 0.5s ease-in;
  box-shadow: 0 2px 1rem ${gray};

  ${({ navColor }) => navColor} {
    background: transparent;
    height: 8rem;
    box-shadow: none;
    border-bottom: 1px solid ${blackOpacity};
  }
`;
export const NavContainer = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
export const NavToggle = styled.div`
  position: fixed;

  top: 1.2rem;
  right: 2rem;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  display: none;
  z-index: 300;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 450px) {
    display: flex;
    align-items: center;
    height: 3.5rem;
    width: 3.5rem;
    top: 2rem;
  }
  span {
    display: inline-block;
    margin-left: 1.2rem;
    position: relative;

    @media screen and (max-width: 450px) {
      margin-left: 1rem;
    }

    &,
    ::before,
    ::after {
      position: absolute;
      width: 2.5rem;
      height: 4px;
      background-color: ${({ isOpen }) =>
        isOpen
          ? ({ theme }) => theme.color.darkgray
          : ({ theme }) => theme.color.white1};
      content: "";
      left: 0;
      transition: all 0.2s ease;
      cursor: pointer;

      @media screen and (max-width: 450px) {
        width: 1.6rem;
        height: 3px;
      }
    }

    & {
      background-color: ${({ isOpen }) =>
        isOpen ? "transparent" : ({ theme }) => theme.color.white1};
    }
    ::before {
      top: ${({ isOpen }) => isOpen || ".8rem"};
      transform: ${({ isOpen }) => (isOpen ? "rotate(135deg)" : "rotate(0)")};

      @media screen and (max-width: 450px) {
        top: ${({ isOpen }) => isOpen || ".6rem"};
      }
    }
    ::after {
      top: ${({ isOpen }) => (isOpen ? "0" : "-.8rem")};
      transform: ${({ isOpen }) => (isOpen ? "rotate(-135deg)" : "rotate(0)")};

      @media screen and (max-width: 450px) {
        top: ${({ isOpen }) => isOpen || "-.6rem"};
      }
    }
  }
`;

export const NavLogo = styled.a`
  text-decoration: none;
  color: ${white1};
  font-size: clamp(1.2rem, 5vw, 2rem);
  display: inline-flex;
  align-items: center;
  width: 18rem;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    z-index: 10;
  }
`;
export const Img = styled.img`
  width: 30%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 450px) {
    width: 20%;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    position: fixed;
    flex-flow: column;
    justify-content: center;
    background-color: #002;
    top: ${({ isOpen }) => (isOpen ? 0 : "-100vh")};
    left: 0;
    opacity: 1;
    height: 100vh;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.5s ease;
    padding-top: 10rem;
  }
`;
export const NavItem = styled.li`
  padding: 1rem 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.screens.lg}) {
    padding: 2rem 2rem;
    width: 100%;
  }
`;
export const NavLinks = styled.a`
  text-decoration: none;
  padding: 0.3rem;
  color: ${white1};
  position: relative;
  font-size: 1.8rem;
  font-weight: 500;
  margin-left: 0.5rem;
  display: inline-block;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    margin-left: none;
    font-size: clamp(1.6rem, 5vw, 2.6rem);

    ::before,
    ::after {
      display: none;
    }
  }

  ::before {
    position: absolute;
    content: "";
    border-bottom: 2px solid ${orange};
    border-radius: 0.5rem;
    top: 0.01rem;
    transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: 100%;
    left: 1rem;
    transform-origin: left;
    transform: translateX(100%);
  }
  ::after {
    position: absolute;
    content: "";
    border-bottom: 2px solid ${orange};
    border-radius: 0.5rem;
    bottom: 0.1rem;
    transition: transform 300ms ease-in-out;
    width: 100%;
    left: 0.5rem;
    transform-origin: right;
    transform: translateX(100%);
  }
  :hover::before {
    transform: scaleX(0.5);
    border-bottom: 1.7px solid ${orange};
  }
  :hover::after {
    transform: translateX(0);
    border-bottom: 1.7px solid ${orange};
  }
`;
export const BtnLink = styled.a`
  color: ${white1};
  padding: 1.2rem 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid ${orange};
  outline: none;
  text-align: center;

  &:hover {
    transition: all 0.3s ease-out;
    color: black;
    background-color: ${orange};
  }

  @media screen and (max-width: 960px) {
    padding: 1.5rem;
    width: 95%;
    text-align: center;
    font-size: clamp(1.6rem, 5vw, 2.6rem);
  }
`;

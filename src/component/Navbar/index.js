import React, { useEffect, useState } from "react";
import {
  BtnLink,
  Img,
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavToggle,
} from "./NavbarStyles";
import logo from "../../image/logo1.png";
import navData from "../Data/NavData";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY >= 80 ? setNavColor(true) : setNavColor(false);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav navColor={navColor}>
      <NavContainer>
        <NavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span>&nbsp;</span>
        </NavToggle>
        <NavLogo href="#home">
          <Img src={logo} alt="JohnAhachi" />
          John&nbsp;<span>Ahachi</span>
        </NavLogo>
        <NavMenu isOpen={isOpen}>
          {navData.map(({ id, title, link }) => (
            <NavItem key={id}>
              <NavLinks href={link} onClick={handleClose}>
                {title}
              </NavLinks>
            </NavItem>
          ))}
          <BtnLink href="../../image/John Ahachi .pdf" download>
            Resume
          </BtnLink>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

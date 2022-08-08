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
import { navAnimations } from "../Motion/animation";
import resume from "../../image/JohnAhachi.pdf";

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
        <NavLogo href="hero">
          <Img src={logo} alt="JohnAhachi" />
          John&nbsp;<span>Ahachi</span>
        </NavLogo>
        <NavMenu isOpen={isOpen}>
          {navData.map(({ id, title, link }) => (
            <NavItem
              key={id}
              variants={navAnimations}
              transition={{ delay: "0.5", type: "spring" }}
            >
              <NavLinks href={link} onClick={handleClose}>
                {title}
              </NavLinks>
            </NavItem>
          ))}
          <BtnLink
            variants={navAnimations}
            transition={{ delay: "0.8", type: "spring" }}
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </BtnLink>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

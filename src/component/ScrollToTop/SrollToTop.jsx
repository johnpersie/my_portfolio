import React, { useState } from "react";
import styled from "styled-components";
import { TbChevronsUp } from "react-icons/tb";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <Div>
      <a href="#hero" className={`${visible ? "block" : "none"}`}>
        <TbChevronsUp />
      </a>
    </Div>
  );
};

const black = ({ theme }) => theme.color.black;
const orange = ({ theme }) => theme.color.orange;

const Div = styled.div`
  max-width: 100vw;

  .none {
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease;
  }
  a {
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    background: ${orange};
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease;
    z-index: 10;
    svg {
      color: ${black};
      font-size: 3rem;
    }
  }
`;
export default ScrollToTop;

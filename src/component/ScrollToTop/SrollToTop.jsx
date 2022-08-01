import React, { useState } from "react";
import styled from "styled-components";
import { TbChevronsUp } from "react-icons/tb";
const SrollToTop = () => {
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
    transition: all 0.4s;
    z-index: 10;
    svg {
      color: ${black};
      font-size: 3rem;
    }
  }
`;
export default SrollToTop;

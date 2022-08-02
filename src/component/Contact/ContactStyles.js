import styled from "styled-components";
import { MainHeading, Section } from "../../GlobalStyles";
import { motion } from "framer-motion";

const black2 = ({ theme }) => theme.color.black2;
const black1 = ({ theme }) => theme.color.black1;
const blackOpacity1 = ({ theme }) => theme.color.blackOpacity1;
const darkgray = ({ theme }) => theme.color.darkgray;
const orange = ({ theme }) => theme.color.orange;
const gray = ({ theme }) => theme.color.gray;
const white = ({ theme }) => theme.color.white;

export const ContactSection = styled(Section)`
  background-image: url(${require("../../image/frontend.jpg")});
  height: 100%;
  width: 100vw;
  background-position: center;
  background-attachment: fixed;
  box-shadow: inset 0 100em 0 0 ${blackOpacity1};
  background-size: cover;
  background-attachment: fixed;
`;
export const ContainerWrapper = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
`;
export const TextWrapper = styled.div`
  text-align: center;
  padding: 4rem 0;

  h4 {
    font-size: clamp(1.6rem, 5vw, 2rem);
    text-transform: capitalize;
  }
  h1 {
    font-weight: 800;
    font-size: clamp(2.6rem, 5vw, 6rem);
    text-transform: uppercase;
    span {
      font-weight: 800;
      color: red;
    }
  }
`;
export const Heading = styled(MainHeading)`
  font-weight: 800;
  font-size: clamp(2.6rem, 5vw, 6rem);
  text-transform: uppercase;
  span {
    font-weight: 800;
    color: red;
  }
`;
export const FormContainer = styled(motion.div)`
  margin: auto;
  width: 50%;
  align-content: center;
  background: ${black2};
  padding: 3rem 3rem;
  border-radius: 2rem;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 1rem;
  }
  form {
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      margin-bottom: 1.5rem;

      div {
        width: 100%;
        position: relative;

        input {
          border: 2px solid ${black1};
          font-family: inherit;
          font-size: 1.8rem;
          padding: 1.6rem 1.8rem;
          border-radius: 5px;
          outline: none;
          color: #fff;
          width: 100%;
          background: ${black1};

          :hover {
            border-color: ${darkgray};
            transition: 0.2s ease-in;
          }

          &::-webkit-input-placeholder {
            color: ${darkgray};
            background: transparent;
          }
          input:placeholder-shown {
            background: transparent;
          }
        }
      }
      input:focus ~ label,
      input:valid + label {
        color: ${white};
        top: -1rem;
        font-size: 1.3rem;
        left: 0.8rem;
      }
    }
    div {
      position: relative;

      textarea {
        width: 100%;
        color: ${white};
        resize: none;
        border-radius: 5px;
        border: 2px solid ${black1};
        outline: none;
        height: 30rem;
        padding: 2rem;
        font-size: 1.8rem;
        font-weight: 300;
        background: ${black1};
        margin-bottom: 1.5rem;
        position: relative;

        :hover {
          border-color: ${darkgray};
          transition: 0.2s ease-in;
        }
      }
      label {
        position: absolute;
        top: 2rem;
        left: 2rem;
        padding: 0 0.5rem;
        font-size: 1.8rem;
        font-weight: 300;
        color: ${darkgray};
        background: ${black1};
        transition: top 200ms ease-in, left 200ms ease-in,
          font-size 200ms ease-in;
      }

      textarea:focus ~ label,
      textarea:valid + label {
        color: ${white};
        top: -1rem;
        font-size: 1.3rem;
        left: 1rem;
      }
    }
    button {
      font-size: 1.8rem;
      border: 2px solid ${black1};
      padding: ${({ padding }) => padding || "1rem 3rem"};
      background: ${black1};
      font-weight: 500;
      color: ${darkgray};
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s ease-in;

      :hover {
        border: 2px solid ${orange};
        background-color: ${orange};
        color: ${black1};
        transition: 0.2s ease-in;
      }
    }
  }
`;

export const TextBox = styled.textarea`
  width: 100%;
  color: ${white};
  resize: none;
  border-radius: 5px;
  border: 2px solid ${gray};
  outline: none;
  padding: 1rem;
  background: rgb(6, 11, 35, 0.5);
  margin-bottom: 2rem;
  position: relative;

  :hover {
    border-color: ${darkgray};
    transition: 0.2s ease-in;
  }
`;

import styled from "styled-components";
import { MainHeading } from "../../GlobalStyles";

const black2 = ({ theme }) => theme.color.black2;
const black1 = ({ theme }) => theme.color.black1;
const darkgray = ({ theme }) => theme.color.darkgray;
const orange = ({ theme }) => theme.color.orange;
const gray = ({ theme }) => theme.color.gray;
const white = ({ theme }) => theme.color.white;

export const ContainerWrapper = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
`;
export const TextWrapper = styled.div`
  text-align: center;
  padding: 6rem 1rem;

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
export const FormContainer = styled.div`
  margin: auto;
  width: 50%;
  align-content: center;

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
          border: 2px solid ${gray};
          font-family: inherit;
          font-size: 1.8rem;
          padding: 1.6rem 1.8rem;
          border-radius: 5px;
          outline: none;
          color: #fff;
          width: 100%;
          background: transparent;

          :hover {
            border-color: ${darkgray};
            transition: 0.2s ease-in;
          }

          &::-webkit-input-placeholder {
            color: #999;
            background: transparent;
          }
          input:placeholder-shown {
            background: transparent;
          }
        }
      }
      input:focus ~ label,
      input:valid + label {
        color: #fff;
        top: -1rem;
        font-size: 1.3rem;
        left: 0.8rem;
      }
    }
    div {
      position: relative;

      textarea {
        width: 100%;
        color: #fff;
        resize: none;
        border-radius: 5px;
        border: 2px solid ${gray};
        outline: none;
        height: 30rem;
        padding: 2rem;
        font-size: 1.8rem;
        font-weight: 300;
        background: transparent;
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
        color: #fff;
        top: -1rem;
        font-size: 1.3rem;
        left: 1rem;
      }
    }
    button {
      font-size: 1.8rem;
      border: 2px solid ${gray};
      padding: ${({ padding }) => padding || "1rem 3rem"};
      background: transparent;
      font-weight: 500;
      color: ${darkgray};
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s ease-in;

      :hover {
        border: 2px solid #ffc75f;
        background-color: #ffc75f;
        color: #000;
        transition: 0.2s ease-in;
      }
    }
  }
`;

export const TextBox = styled.textarea`
  width: 100%;
  color: #fff;
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

import styled from "styled-components";

import { shade } from "polished";

export const Form = styled.form`
  margin-top: 40px;
  max-width: 800px;

  display: flex;
  flex-direction: column;

  input {
    max-width: 450px;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    margin-top: 10px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    max-width: 450px;
    height: 70px;
    background: #04d361;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    margin-top: 10px;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }

  div {
    border: 0;
    border-radius: 5px;
    height: 70px;
    max-width: 450px;
    display: flex;
    background: #039be5;
    color: #fff;
    font-weight: bold;
    justify-content: center;
    align-items: center;
  }
`;

import styled from "styled-components";

import { shade } from "polished";

export const Logo = styled.h2`
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  font: 40px Satisfy, sans-serif;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 800px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }

  div {
    border: 0;
    border-radius: 5px 0 0 5px;
    height: 70px;
    width: 210px;
    display: flex;
    background: #039be5;
    color: #fff;
    font-weight: bold;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  margin-top: 40px;
  width: 210px;
  height: 70px;
  background: #04d361;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, "#04d361")};
  }
`;

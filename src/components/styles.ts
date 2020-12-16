import styled from "styled-components";
import { shade } from "polished";

export const Logo = styled.a`
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  font: 40px Satisfy, sans-serif;
  text-decoration: none;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Subtitle = styled.h2`
  color: #6d5f52;
  max-width: 450px;
  line-height: 56px;
  margin-top: 50px;
  font: 30px Satisfy, sans-serif;
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

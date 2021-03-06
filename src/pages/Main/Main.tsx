import React from "react";

import { Logo, Title, Subtitle, Button } from "../../components/styles";

const Main: React.FC = () => {
  return (
    <>
      <Logo href="/">Seja Poeta</Logo>
      <Title>Descubra um poeta dentro de você</Title>
      <Subtitle>
        Escreva um soneto de maneira simples, prática e rápida
      </Subtitle>

      <a href="/soneto">
        <Button>Iniciar</Button>
      </a>
    </>
  );
};

export default Main;

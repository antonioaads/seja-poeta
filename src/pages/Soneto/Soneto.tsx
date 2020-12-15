import React from "react";

import { Form } from "./styles";
import { Logo, Title, Subtitle } from "../../components/styles";

const Soneto: React.FC = () => {
  return (
    <>
      <Logo href="/">Seja Poeta</Logo>
      <Title>Criação de sonetos</Title>
      <Subtitle>
        Para cada palavra chave, escreva as duas primeiras palavras que vem a
        sua cabeça
      </Subtitle>

      <Form>
        <div>Palavra Chave</div>
        <input placeholder="Digite a primeira palavra" />
        <input placeholder="Digite a primeira palavra" />
        <button type="submit"> Próxima</button>
      </Form>
    </>
  );
};

export default Soneto;

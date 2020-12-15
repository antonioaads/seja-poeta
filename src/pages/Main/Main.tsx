import React from "react";

import { Logo, Title, Form, Button } from "./styles";

const Main: React.FC = () => {
  return (
    <>
      <Logo>Seja Poeta</Logo>
      <Title>Descubra um poeta dentro de você</Title>

      <Button>Iniciar</Button>
      <Form>
        <div>Palavra Chave</div>
        <input placeholder="Digite a primeira palavra" />
        <button type="submit"> Próxima</button>
      </Form>
    </>
  );
};

export default Main;

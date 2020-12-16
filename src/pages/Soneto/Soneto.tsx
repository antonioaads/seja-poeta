import React, { useState, useEffect, useCallback } from "react";

import { Form, Header } from "./styles";
import { Logo, Title, Subtitle, Button } from "../../components/styles";
import { words as backupWords } from "../../utils/words";

interface words {
  keyWord: string;
  word1: string;
  word2: string;
  verse?: string;
}

const Soneto: React.FC = () => {
  const [words, setWords] = useState<words[]>([]);
  const [keyWord, setKeyWord] = useState<string>("");
  const [baseWords, setBaseWords] = useState<string[]>(backupWords);
  const [stage, setStage] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  const getRandomWord = useCallback(() => {
    const indice = Math.floor(Math.random() * baseWords.length);
    const word = baseWords[indice];

    baseWords.splice(indice, 1);
    setBaseWords(baseWords);

    return word;
  }, [baseWords]);

  useEffect(() => {
    const newKeyWord = getRandomWord();
    setKeyWord(newKeyWord);
  }, [setKeyWord, getRandomWord]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (stage === 0) {
      words.push({
        keyWord,
        word1: e.target[0].value,
        word2: e.target[1].value,
      });

      const newKeyWord = getRandomWord();
      setKeyWord(newKeyWord);
    } else {
      words[step].verse = e.target[0].value;
    }

    setWords([...words]);

    const newStep = step + 1;
    if (newStep > 13) {
      setStep(0);
      setStage((prev) => prev + 1);
    } else {
      setStep(newStep);
    }

    e.target[0].value = "";
    e.target[1].value = "";
  };

  return (
    <>
      <Header>
        <Logo href="/">Seja Poeta</Logo>
        {stage < 2 && (
          <div>
            <b>Etapa: </b>
            {stage + 1}
            /3
            <b> Passo: </b>
            {step + 1}
            /14
          </div>
        )}
      </Header>
      <Title>Criação de sonetos</Title>

      {stage === 0 && (
        <>
          <Subtitle>
            Para cada palavra chave, escreva as duas primeiras palavras que vem
            a sua cabeça
          </Subtitle>

          <Form onSubmit={handleSubmit}>
            <div>{keyWord}</div>
            <input placeholder="Digite a primeira palavra" />
            <input placeholder="Digite a segunda palavra" />
            <button type="submit"> Próxima</button>
          </Form>
        </>
      )}

      {stage === 1 && (
        <>
          <Subtitle>Para cada par de palavras, escreva um verso</Subtitle>

          <Form onSubmit={handleSubmit}>
            <div>{`${words[step]?.word1} e ${words[step]?.word2}`}</div>
            <input placeholder="Digite o verso" />
            <button type="submit"> Próxima</button>
          </Form>
        </>
      )}

      {stage === 2 && (
        <>
          <Subtitle>Parabéns, você finalizou o seu soneto:</Subtitle>

          <p style={{ marginTop: "10px" }}>
            {words.map((word) => (
              <>
                <text>{word.verse}</text>
                <br />
              </>
            ))}
          </p>

          <a href="/">
            <Button>Finalizar</Button>
          </a>
        </>
      )}
    </>
  );
};

export default Soneto;

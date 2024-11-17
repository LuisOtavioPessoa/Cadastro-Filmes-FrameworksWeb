import React, { useState } from "react";
import { FormFilmes } from "./components/FormFilmes";
import Header from "./components/Header";
import { ListaFilmes } from "./components/ListaFilmes";
import ButtonComponent from "./components/Button"; 
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const App: React.FC = () => {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [mostrarLista, setMostrarLista] = useState(true);

  return (
    <div>
      <Header />
      <main>
        <br /><br />
        <Container>

        <Button onClick={() => {
            setMostrarForm(true);
            setMostrarLista(false);
        }}
        >Inserir</Button>

        <Button onClick={() => {
          setMostrarForm(false);
          setMostrarLista(true);
        }}
        >Listar</Button>

        </Container>

        <br />
        <Container> {mostrarLista && <ListaFilmes/>}</Container>
        <Container>{mostrarForm && <FormFilmes/>}</Container>

      </main>

    </div>
  );
};
export default App;

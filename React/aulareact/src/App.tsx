import React, { useState } from "react";
import { FormContatos } from "./components/FormContatos";
import Header from "./components/Header";
import { ListaContatos } from "./components/ListaContatos";
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

        <Container> {mostrarLista && <ListaContatos/>}</Container>
        <Container>{mostrarForm && <FormContatos/>}</Container>

      </main>

    </div>
  );
};
export default App;

import React, { useState } from "react";
import { FormContatos } from "./components/FormContatos";
import Header from "./components/Header";
import { ListaContatos } from "./components/ListaContatos";
import ButtonComponent from "./components/Button"; 
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const App: React.FC = () => {
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <div>
      <Header />
      <main>
        <br />
        {mostrarForm && <FormContatos/>}
        <br />
        <Container>
        <Button onClick={() => setMostrarForm(true)}>Cadastrar</Button>

        <Button onClick={() => setMostrarForm(false)}>Listar</Button>
        </Container>
        <br /> <br />
        <ListaContatos />
      </main>
    </div>
  );
};
export default App;

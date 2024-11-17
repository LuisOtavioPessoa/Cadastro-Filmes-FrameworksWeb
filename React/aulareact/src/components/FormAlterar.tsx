import { useState } from "react";
import { Filme } from "../Types/Filme";
import { Container, Form, Button } from "react-bootstrap";

interface FormAlterarProps {
    filme: Filme;
    onSalvar: (filmeAlterado: Filme) => void;
    onCancelar: () => void;
}

export function FormAlterar( {filme, onSalvar, onCancelar}: FormAlterarProps) {
    const [titulo, setTitulo] = useState(filme.titulo);
    const [ator, setAtor] = useState(filme.ator);
    const [faixaEtaria, setFaixaEtaria] = useState(filme.faixaEtaria);
    const [genero, setGenero] = useState(filme.genero);

    const Alterar = () => {
        const filmeAlterado = {titulo, ator, faixaEtaria, genero};
        onSalvar(filmeAlterado);
    };
    
    return (
        <Container>
          <h3>Alterar Filme</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título:</Form.Label>
              <Form.Control type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ator:</Form.Label>
              <Form.Control type="text" value={ator} onChange={(e) => setAtor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Faixa Etária:</Form.Label>
              <Form.Control type="text" value={faixaEtaria} onChange={(e) => setFaixaEtaria(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gênero:</Form.Label>
              <Form.Control type="text" value={genero} onChange={(e) => setGenero(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="me-2" onClick={Alterar}> Salvar Alterações </Button>
            <Button variant="secondary" onClick={onCancelar}> Cancelar </Button>
          </Form>
        </Container>
      );
}
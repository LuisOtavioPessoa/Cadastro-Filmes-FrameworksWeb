import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { listaFilmes } from "../data/ListaFilmes";
import { Filme } from "../Types/Filme";

export function FormFilmes(){

    const [titulo, setTitulo] = useState("");
    const [ator, setAtor] = useState("");
    const [faixaEtaria, setFaixaEtaria] = useState("");
    const [genero, setGenero] = useState("");

    const cadastrarFilme = () => {
        const novoFilme: Filme = {titulo, ator, faixaEtaria, genero};

        listaFilmes.push(novoFilme);

        setTitulo("");
        setAtor("");
        setFaixaEtaria("");
        setGenero("");
    };

    return(
        <Container> 
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Título:</Form.Label>
                        <Form.Control type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Ator:</Form.Label>
                        <Form.Control type="text" value={ator}  onChange={(e) => setAtor(e.target.value)} />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Faixa Etária:</Form.Label>
                        <Form.Control type="text" value={faixaEtaria} onChange={(e) => setFaixaEtaria(e.target.value)}/>
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Genêro:</Form.Label>
                        <Form.Control type="text" value={genero} onChange={(e) => setGenero(e.target.value)}  />
                </Form.Group>
            </Form>

            <Button variant="primary" type="button" onClick={cadastrarFilme}>
            Cadastrar
            </Button>

        </Container>
    );
}
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FormFilmes } from "./FormFilmes";
import { ListaFilmes } from "./ListaFilmes";

export function Header() {
    const[showForm, setShowForm] = useState(false);

    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">App Filmes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#inserir"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowForm(true);
                            }}>Inserir</Nav.Link>

                            <Nav.Link href="#listar"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowForm(false);
                            }}>Listar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showForm ? <FormFilmes /> : <ListaFilmes />}
        </header>
    );
}
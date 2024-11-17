import { Container, Form, Button } from "react-bootstrap";

export function FormFilmes(){

    return(
        <Container> 
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Título:</Form.Label>
                        <Form.Control type="text"  />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Ator:</Form.Label>
                        <Form.Control type="text"  />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Faixa Etária:</Form.Label>
                        <Form.Control type="text"  />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Genêro:</Form.Label>
                        <Form.Control type="text"  />
                </Form.Group>
            </Form>

            <Button variant="primary" type="button">
            Cadastrar
            </Button>

        </Container>
    );
}
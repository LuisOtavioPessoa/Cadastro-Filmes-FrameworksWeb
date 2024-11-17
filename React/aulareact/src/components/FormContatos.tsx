import { Container, Form, Button } from "react-bootstrap";

export function FormContatos(){

    return(
        <Container> 
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>urlImagem</Form.Label>
                        <Form.Control type="text"  />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nome</Form.Label>
                        <Form.Control type="text"  />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                        <Form.Control type="text"  />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text"  />
                </Form.Group>
            </Form>

            <Button variant="primary" type="button">
            Cadastrar
            </Button>

        </Container>
    );
}
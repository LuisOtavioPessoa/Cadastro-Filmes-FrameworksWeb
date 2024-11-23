import { Button, Container, Form } from 
"react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Filme } from "../Types/Filme";
import { saveDataFilmes } from "../service/api";


export function FormFilmes() {

    const {handleSubmit, register, reset} = useForm<Filme>();

    const handleFormSubmit:SubmitHandler<Filme>=
    (data) =>{
        console.log(data);
        saveDataFilmes(data);
        reset();
    }

    return (
        <section>
            <Container className="mt-5">
                <h2>Inserir Filme</h2>
                <Form onSubmit={handleSubmit(handleFormSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control {...register("titulo")} type="text"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ator</Form.Label>
                    <Form.Control {...register("ator")} type="text"/>
                </Form.Group> 
                <Form.Group className="mb-3">
                    <Form.Label>Faixa Etaria</Form.Label>
                    <Form.Control {...register("faixaEtaria")} type="text"/>
                </Form.Group> 
                <Form.Group className="mb-3">
                    <Form.Label>Genêro</Form.Label>
                    <Form.Control {...register("genero")} type="text"/>
                </Form.Group>  
                <Button variant="primary" type="submit">Cadastrar</Button>   
                </Form>
            </Container>
        </section>
    );
  
}
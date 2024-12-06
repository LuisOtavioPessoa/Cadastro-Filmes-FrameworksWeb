import { Button, Container, Form, Alert } from 
"react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Filme } from "../Types/Filme";
import { saveDataFilmes } from "../service/api";
import { useState } from "react";


export function FormFilmes() {

    const {handleSubmit, register, reset, getValues} = useForm<Filme>();
    const [errorMessage , setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isFormVisible, setIsFormVisible] = useState<boolean>(true); // Controle de visibilidade do formulário

    const handleFormSubmit:SubmitHandler<Filme>=
    (data) =>{
        const {titulo, ator, faixaEtaria, genero} = getValues();

        if (!titulo || !ator || !faixaEtaria || !genero){
            setErrorMessage("Todos os campos devem ser preenchidos antes de cadastrar.");
            setSuccessMessage(null);
            return;
        }

        setErrorMessage(null);
        setSuccessMessage("Filme cadastrado com sucesso!");
        console.log(data);
        saveDataFilmes(data);
        reset();

        setTimeout(() => {
            setSuccessMessage(null);
            setIsFormVisible(true);
        }, 2000);
    };

    return (
        <section>
            <Container className="mt-5">
                <h2>Inserir Filme</h2>
                {errorMessage && (
                    <Alert variant="danger">
                        {errorMessage}
                    </Alert>
                )}

                {successMessage && (
                    <Alert variant="success">
                        {successMessage}
                    </Alert>
                )}

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
import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Filme } from "../Types/Filme";
import { useEffect } from "react";
import { updateFilme } from "../service/api";

interface FormEditarFilmeProps {
    filme: Filme; // Recebe o filme a ser editado como prop
    onClose: () => void;  // Função para fechar o formulário após salvar
}

export function FormEditarFilme({ filme, onClose }: FormEditarFilmeProps){
    const { handleSubmit, register, setValue } = useForm<Filme>();

// Preenche os valores do formulário com os dados do filme
    useEffect(() => {
        setValue("titulo", filme.titulo);
        setValue("ator", filme.ator);
        setValue("faixaEtaria", filme.faixaEtaria);
        setValue("genero", filme.genero);
    }, [filme, setValue]);

// Função de envio do formulário
const handleFormSubmit: SubmitHandler<Filme> = async (data) => {
    try{
        await updateFilme(filme.id, data); // Atualiza o filme
        onClose();// Fecha o formulário
    }catch (error){
        console.error("Erro ao atualizar o filme", error);
    }
};

return (
    <section>
        <Container className="mt-5">
            <h2>Alterar Filme</h2>
            <Form onSubmit ={handleSubmit(handleFormSubmit)}>
                <Form.Group className= "mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control {...register("titulo")} type="text" />
                </Form.Group>

                <Form.Group className= "mb-3">
                <Form.Label>Ator</Form.Label>
                <Form.Control {...register("ator")} type="text" />
                </Form.Group>

                <Form.Group className= "mb-3">
                <Form.Label>Faixa Etária</Form.Label>
                <Form.Control {...register("faixaEtaria")} type="text" />
                </Form.Group>

                <Form.Group className= "mb-3">
                <Form.Label>Genêro</Form.Label>
                <Form.Control {...register("genero")} type="text" />
                </Form.Group>

                <Button variant="primary" type="submit"> Salvar Alterações</Button>
                <Button variant="secondary" className="ms-2" onClick={onClose}> Cancelar</Button>

            </Form>
        </Container>
    </section>
);
}
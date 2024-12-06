import { Button, Container, Form, Alert } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Filme } from "../Types/Filme";
import { useEffect, useState } from "react";
import { updateFilme } from "../service/api";

interface FormEditarFilmeProps {
    filme: Filme; // Recebe o filme a ser editado como prop
    onClose: () => void; // Função para fechar o formulário após salvar
}

export function FormEditarFilme({ filme, onClose }: FormEditarFilmeProps) {
    const { handleSubmit, register, setValue, getValues } = useForm<Filme>();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isFormVisible, setIsFormVisible] = useState<boolean>(true); // Controle de visibilidade do formulário

    // Preenche os valores do formulário com os dados do filme
    useEffect(() => {
        setValue("titulo", filme.titulo);
        setValue("ator", filme.ator);
        setValue("faixaEtaria", filme.faixaEtaria);
        setValue("genero", filme.genero);
    }, [filme, setValue]);

    // Função de envio do formulário
    const handleFormSubmit: SubmitHandler<Filme> = async (data) => {
        const { titulo, ator, faixaEtaria, genero } = getValues();

        // Verifica se algum campo está vazio
        if (!titulo || !ator || !faixaEtaria || !genero) {
            setErrorMessage("Todos os campos devem ser preenchidos antes de salvar.");
            return;
        }

        try {
            await updateFilme(filme.id, data); // Atualiza o filme
            setErrorMessage(null); // Remove mensagem de erro (caso exista)
            setSuccessMessage("Filme atualizado com sucesso. Aguarde um instante!"); // Define mensagem de sucesso
            setIsFormVisible(false);// Oculta o formulário imediatamente
            setTimeout(() => {
                setSuccessMessage(null); // Remove a mensagem de sucesso após 3 segundos
                onClose(); // Fecha o formulário
            }, 3000);
        } catch (error) {
            console.error("Erro ao atualizar o filme", error);
            setErrorMessage("Erro ao atualizar o filme. Tente novamente.");
        }
    };

    return (
        <section>
            <Container className="mt-5">

                {errorMessage && (
                    <Alert variant="danger" className="mb-3">
                        {errorMessage}
                    </Alert>
                )}

                {successMessage && (
                    <Alert variant="success" className="mb-3">
                        {successMessage}
                    </Alert>
                )}

                {isFormVisible && <h2>Alterar Filme</h2>}

                {isFormVisible && (
                <Form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Título</Form.Label>
                        <Form.Control {...register("titulo")} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Ator</Form.Label>
                        <Form.Control {...register("ator")} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Faixa Etária</Form.Label>
                        <Form.Control {...register("faixaEtaria")} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Gênero</Form.Label>
                        <Form.Control {...register("genero")} type="text" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Salvar Alterações
                    </Button>
                    <Button variant="secondary" className="ms-2" onClick={onClose}>
                        Cancelar
                    </Button>
                </Form>
                )}
            </Container>
        </section>
    );
}

import axios from "axios";
import { Filme } from "../Types/Filme";

// Função para buscar os filmes
export async function fetchFilmesData(): Promise<Filme[]> {
    try {
        const response = await axios.get("http://localhost:5000/filmes");
        console.log(response.data);
        return response.data.filmes; // Certifique-se de que `response.data.filmes` contém os filmes
    } catch (error: any) {
        console.error(`Erro ao buscar dados dos filmes: ${error.message}`);
        return []; // Retorna uma lista vazia em caso de erro
    }
}

// Função para salvar um novo filme
export async function saveDataFilmes(data: Filme): Promise<void> {
    try {
        const payload = {
            titulo: data.titulo,
            ator: data.ator,
            faixaEtaria: data.faixaEtaria,
            genero: data.genero,
        };
        const response = await axios.post("http://localhost:5000/filmes", payload);
        console.log("Filme salvo com sucesso:", response.data);
    } catch (error: any) {
        console.error(`Erro ao enviar os dados do filme: ${error.message}`);
    }
}

// Função para deletar um filme
export async function deleteFilme(id: number): Promise<void> {
    try {
         await axios.delete(`http://localhost:5000/filmes/${id}`);
        console.log(`Filme com ID ${id} deletado com sucesso!`);
    } catch (error: any) {
        console.error(`Erro ao deletar o filme com ID ${id}: ${error.message}`);
    }
}

// Função para atualizar um filme
export async function updateFilme(id: number, data: Filme): Promise<void> {
    try {
        const payload = {
            titulo: data.titulo,
            ator: data.ator,
            faixaEtaria: data.faixaEtaria,
            genero: data.genero,
        };
        const response = await axios.put(`http://localhost:5000/filmes/${id}`, payload);
        console.log("Filme atualizado com sucesso:", response.data);
    } catch (error: any) {
        console.error(`Erro ao atualizar o filme com ID ${id}: ${error.message}`);
    }
}

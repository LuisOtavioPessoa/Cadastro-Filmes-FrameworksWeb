import axios from "axios";
import { Filme } from "../Types/Filme";

export async function fetchFilmesData(setData:Function)
{
    try{
        const response = await axios.get("http://localhost:5000/filmes");
        console.log(response.data);
        setData(response.data.filmes);
    }catch(error:any){
        console.error(`Erro ao buscar dados dos filmes: ${error.message}`);
    }
}

export async function saveDataFilmes(data:Filme){
    try{
        const payload = {
            titulo: data.titulo,
            ator: data.ator,
            faixaEtaria: data.faixaEtaria,
            genero: data.genero
        }
        const response = await axios.post("http://localhost:5000/filmes", payload);
        console.log(response.data);
    }catch(error:any){
        console.error(`Erro ao enviar os dados filme: ${error.message}`);
    }
}

export async function deleteFilme(id: number){
    try{
        const response = await axios.delete(`http://localhost:5000/filmes/${id}`);
        console.log(`Filme com ID ${id} deletado com sucesso!`);
        return response.data;
    }catch(error: any){
        console.error(`Erro ao deletar o filme com ID ${id}: ${error.message}`);
    }
}

export async function updateFilme(id: number, data: Filme){
    try{
        const payload = {
            titulo: data.titulo,
            ator: data.ator,
            faixaEtaria: data.faixaEtaria,
            genero: data.genero
        };
        const response = await axios.put(`http://localhost:5000/filmes/${id}`,payload);
        return response.data;
    }catch(error: any){
        console.error(`Erro ao atualizar o filme com ID ${id}: ${error.message}`);
    }
}
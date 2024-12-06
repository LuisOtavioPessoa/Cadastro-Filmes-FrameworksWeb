import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteFilme, fetchFilmesData} from "../service/api";
import { Filme } from "../Types/Filme";
import { FormEditarFilme } from "./FormEditarFilme";


export function ListaFilmes() {
  const [data, setData] = useState<Array<Filme>>([]);
  const [filmeEditando, setFilmeEditando] = useState<Filme | null>(null);// Estado para o filme em edição

  useEffect(() => {
    fetchFilmesData(setData);
  }, []);

  const handleDelete = async (id: number) => {
    const confirmar = window.confirm("Tem certeza que deseja deletar este filme?");
    if (confirmar) {
        await deleteFilme(id); 
        fetchFilmesData(setData); 
        window.alert("Filme deletado com sucesso!"); 
    }
};


  const handleEditarClick = (filme: Filme) => {
    setFilmeEditando(filme);// Define o filme que será editado
  };

  const fecharFormulario = () => {
    setFilmeEditando(null);// Fecha o formulário de edição
    fetchFilmesData(setData);// Recarrega os dados para refletir as alterações
  }

  return (
    <section>
      <Container className="mt-5">
        <h2>Listar Filmes</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Ator</th>
              <th>Faixa Etaria</th>
              <th>Gênero</th>
              <th>Operações</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((filme) => {
                return (
                  <tr key={filme.id}>
                    <td>{filme.titulo}</td>
                    <td>{filme.ator}</td>
                    <td>{filme.faixaEtaria}</td>
                    <td>{filme.genero}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditarClick(filme)}>
                        Alterar
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(filme.id)}>
                        Deletar
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
      {/* Renderiza o formulário de edição, se houver um filme em edição */}
      {filmeEditando && (
        <FormEditarFilme filme={filmeEditando} onClose={fecharFormulario} />
      )}
    </section>
  );
}

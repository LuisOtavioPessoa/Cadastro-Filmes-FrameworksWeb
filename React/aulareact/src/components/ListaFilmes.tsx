import { Container, Table, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteFilme, fetchFilmesData } from "../service/api";
import { Filme } from "../Types/Filme";
import { FormEditarFilme } from "./FormEditarFilme";

export function ListaFilmes() {
  const [data, setData] = useState<Array<Filme>>([]); // Dados originais
  const [filteredData, setFilteredData] = useState<Array<Filme>>([]); // Dados filtrados para exibição
  const [searchQuery, setSearchQuery] = useState<string>(""); // Consulta de busca
  const [filmeEditando, setFilmeEditando] = useState<Filme | null>(null); // Estado para o filme em edição

  useEffect(() => {
    const fetchData = async () => {
      const filmes = await fetchFilmesData(); // Busca os filmes da API
      setData(filmes); // Define os dados originais
      setFilteredData(filmes); // Inicializa os dados filtrados
    };
    fetchData();
  }, []);

  // Atualiza a lista de filmes exibida quando a busca é alterada
  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = data.filter((filme) =>
      filme.titulo.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const handleDelete = async (id: number) => {
    const confirmar = window.confirm("Tem certeza que deseja deletar este filme?");
    if (confirmar) {
      await deleteFilme(id);
      const filmes = await fetchFilmesData(); // Atualiza os dados após a exclusão
      setData(filmes);
      setFilteredData(filmes);
      window.alert("Filme deletado com sucesso!");
    }
  };

  const handleEditarClick = (filme: Filme) => {
    setFilmeEditando(filme); // Define o filme que será editado
  };

  const fecharFormulario = () => {
    setFilmeEditando(null); // Fecha o formulário de edição
    fetchFilmesData().then((filmes) => {
      setData(filmes); // Recarrega os dados originais
      setFilteredData(filmes); // Atualiza a lista exibida
    });
  };

  return (
    <section>
      <Container className="mt-5">
        

        {/* Campo de busca */}
        <Form.Group className="mb-4">
          <Form.Label>Buscar Filme</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o título do filme"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Atualiza a consulta
          />
        </Form.Group>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Título</th>
              <th>Ator</th>
              <th>Faixa Etária</th>
              <th>Gênero</th>
              <th>Operações</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((filme) => (
                <tr key={filme.id}>
                  <td>{filme.titulo}</td>
                  <td>{filme.ator}</td>
                  <td>{filme.faixaEtaria}</td>
                  <td>{filme.genero}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEditarClick(filme)}
                    >
                      Alterar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(filme.id)}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  Nenhum filme encontrado.
                </td>
              </tr>
            )}
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

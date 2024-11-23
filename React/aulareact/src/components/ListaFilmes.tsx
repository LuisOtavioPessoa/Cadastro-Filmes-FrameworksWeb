import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { deleteFilme, fetchFilmesData } from "../service/api";
import { Filme } from "../Types/Filme";

export function ListaFilmes() {
  const [data, setData] = useState<Array<Filme>>([]);
  
  useEffect(() => {
    fetchFilmesData(setData);
  }, []);

  const handleDelete = async (id: number) =>{
    await deleteFilme(id);
    fetchFilmesData(setData);
  };

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
                  <tr key={filme.id}> {}
                    <td>{filme.titulo}</td>
                    <td>{filme.ator}</td>
                    <td>{filme.faixaEtaria}</td>
                    <td>{filme.genero}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2">Alterar</button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(filme.id)}>Deletar</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </section>
  );
}

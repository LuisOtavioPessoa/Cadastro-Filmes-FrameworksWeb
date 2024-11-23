import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchFilmesData } from "../service/api";
import { Filme } from "../Types/Filme";

export function ListaFilmes() {
  const [data, setData] = useState<Array<Filme>>([]);
  
  useEffect(() => {
    fetchFilmesData(setData);
  }, []);

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
              data.map((filme, index) => {
                return (
                  <tr key={index}> {}
                    <td>{filme.titulo}</td>
                    <td>{filme.ator}</td>
                    <td>{filme.faixaEtaria}</td>
                    <td>{filme.genero}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2">Alterar</button>
                      <button className="btn btn-danger btn-sm">Deletar</button>
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

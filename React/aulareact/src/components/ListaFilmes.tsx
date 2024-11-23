import { Container, Table } from "react-bootstrap";
import { useEffect, useState} from "react";
import { fetchFilmesData } from "../service/api";
import { Filme } from "../Types/Filme";


export function ListaFilmes(){

  const [data, setData] = useState(Array<Filme>);
  useEffect(()=>{
    fetchFilmesData(setData);
  }, []);

  return(
    <section>
      <Container className="mt-5">
        <h2>Listar Filmes</h2>
        <Table striped bordered hover>
            <thead>
              <th>Titulo</th>
              <th>Ator</th>
              <th>Faixa Etaria</th>
              <th>Gênero</th>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map(filme => {
                  return(
                    <tr>
                      <td>{filme.titulo}</td>
                      <td>{filme.ator}</td>
                      <td>{filme.faixaEtaria}</td>
                      <td>{filme.genero}</td>
                    </tr>
                  );
                })
              }
            </tbody>
        </Table>
      </Container>
    </section>
  );

}
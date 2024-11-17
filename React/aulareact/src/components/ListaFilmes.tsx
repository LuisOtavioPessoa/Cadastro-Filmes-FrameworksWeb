import { Container, Table } from "react-bootstrap";
import { listaFilmes } from "../data/ListaFilmes";

export function ListaFilmes(){

    return(
        <section>
            <Container className="nt-5">
                <Table striped bordered hover>
                    <thead>
                        <th>Filme</th>
                        <th>Ator</th>
                        <th>Faixa Etária</th>
                        <th>Genêro</th>
                    </thead>
                    <tbody>
                        {listaFilmes.length > 0 && 
                            listaFilmes.map(filme => {
                                return(
                                    <tr>
                                        <td>{filme.titulo}</td>
                                        <td>{filme.ator}</td>
                                        <td>{filme.faixaEtaria}</td>
                                        <td>{filme.genero}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>

            </Container>
        </section>

    );
}
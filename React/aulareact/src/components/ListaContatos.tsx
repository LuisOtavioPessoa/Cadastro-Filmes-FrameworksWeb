import { Container, Table } from "react-bootstrap";
import { listaContatos } from "../data/ListaContatos";

export function ListaContatos(){

    return(
        <section>
            <Container className="nt-5">
                <Table striped bordered hover>
                    <thead>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </thead>
                    <tbody>
                        {listaContatos.length > 0 && 
                            listaContatos.map(contato => {
                                return(
                                    <tr>
                                        <td><img src={contato.urlImagem ?? ""} alt="logo usuario" /></td>
                                        <td>{contato.nome}</td>
                                        <td>{contato.email}</td>
                                        <td>{contato.telefone}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>

            </Container>
        </section>

    );
}
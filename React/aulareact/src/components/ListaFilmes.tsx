import { Container, Table, Button } from "react-bootstrap";
import { listaFilmes as filmesIniciais} from "../data/ListaFilmes";
import { useState } from "react";
import { Filme } from "../Types/Filme";
import { FormAlterar } from "./FormAlterar";

export function ListaFilmes(){
    const [filmes, setFilmes] = useState(filmesIniciais);
    const [filmeEditando, setFilmeEditando] = useState<Filme | null>(null);

    const Remover = (titulo: string) => {
        const filmesAtualizados = filmes.filter((filme) => filme.titulo !== titulo);
        setFilmes(filmesAtualizados);
    };

    const handleAlterar = (filme: Filme) => {
        setFilmeEditando(filme);
    };

    const handleSalvarAlteracoes = (filmeAlterado : Filme) => {
        const filmesAtualizados = filmes.map((filme) => 
            filme.titulo == filmeAlterado.titulo ? filmeAlterado : filme
        );
        setFilmes(filmesAtualizados);
        setFilmeEditando(null);
    };

    const handleCancelarAlteracoes = () => {
        setFilmeEditando(null);
    }

    return(
        <section>
           <Container className="mt-5">
        {filmeEditando ? (
          <FormAlterar
            filme={filmeEditando}
            onSalvar={handleSalvarAlteracoes}
            onCancelar={handleCancelarAlteracoes}
          />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Filme</th>
                <th>Ator</th>
                <th>Faixa Etária</th>
                <th>Gênero</th>
                <th>Operações</th>
              </tr>
            </thead>
            <tbody>
              {filmes.length > 0 ? (
                filmes.map((filme) => (
                  <tr key={filme.titulo}>
                    <td>{filme.titulo}</td>
                    <td>{filme.ator}</td>
                    <td>{filme.faixaEtaria}</td>
                    <td>{filme.genero}</td>
                    <td>
                      <Button
                        variant="warning"
                        className="me-2"
                        onClick={() => handleAlterar(filme)}
                      >
                        Alterar
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => Remover(filme.titulo)}
                      >
                        Remover
                      </Button>
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
        )}
      </Container> 
        </section>

    );
}
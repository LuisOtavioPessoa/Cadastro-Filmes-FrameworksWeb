import { FormFilmes } from "./components/FormFilmes";
import { Header } from "./components/Header";
import { ListaFilmes } from "./components/ListaFilmes";


function App() {
  return(
    <div>
      <Header />
      <ListaFilmes />
      <FormFilmes />
    </div>
  );
}

export default App

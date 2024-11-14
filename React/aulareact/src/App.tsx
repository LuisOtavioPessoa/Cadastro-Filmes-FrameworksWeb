import { FormContatos } from "./components/FormContatos";
import Header from "./components/Header";
import { ListaContatos } from "./components/ListaContatos";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <FormContatos/>
        <ListaContatos />
      </main>
    </div>
  );
};
export default App;

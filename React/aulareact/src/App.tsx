import { FormContatos } from "./components/FormContatos";
import Header from "./components/Header";
import { ListaContatos } from "./components/ListaContatos";
import ButtonComponent from "./components/Button"; 


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <br />
        <FormContatos/>
        <br />
        <ButtonComponent />
        <br /> <br />
        <ListaContatos />
      </main>
    </div>
  );
};
export default App;

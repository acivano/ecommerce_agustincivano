import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/estilo.css';
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  let saludo = 'Encontrá el medicamento'
  return (
    <>
    <NavBar />
    <ItemListContainer titulo={saludo}/>
    </>
  );
}

export default App;

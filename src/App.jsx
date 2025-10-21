import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a Axiom Play! Tu tienda de videojuegos favorita" />
    </div>
  )
}

export default App
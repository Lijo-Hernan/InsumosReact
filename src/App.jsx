import './App.css'
import Header from './components/header/Header'
import ItemListContainer from './components/itemListContainer/ItemListContainer'

function App() {

const greeting = "Bienvenidos a nuestro eComerce especializado en insumos para los servicios de diagnostico por imagenes"


  return (
    <>
      <Header/>
      <ItemListContainer introduccion={greeting} />
    </>
  )
}

export default App

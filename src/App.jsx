import './App.css'
import Header from './components/header/Header'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDitailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <Header/>
      <ItemListContainer introduccion="Bienvenidos a nuestro eComerce especializado en insumos para los servicios de diagnostico por imagenes"/>
      <ItemDetailContainer idProducto={5}/>
    </>
  )
}

export default App

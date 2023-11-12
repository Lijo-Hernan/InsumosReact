import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import ItemCategories from './components/itemCategories/ItemCategories'
import Error from './components/error/Error'

function App() {

  return (
    <>
    
    <Header/>

      <BrowserRouter>
      <Routes>

        <Route path='/' element= {<ItemListContainer introduccion="Bienvenidos a nuestro eComerce especializado en insumos para los servicios de diagnostico por imagenes"/>} />
        <Route path='/item/:idProducto' element={<ItemDetailContainer />}/>
        <Route path='/Contrastes' element={<ItemCategories cat="contrastes"/>}/>
        <Route path='/Descartables' element={<ItemCategories cat="descartables"/>}/>
        <Route path='/Consumibles' element={<ItemCategories cat="consumibles"/>}/>
        <Route path='*' element={<Error/>}/>
      
      </Routes>
      
      </BrowserRouter>
        
    </>
  )
}

export default App

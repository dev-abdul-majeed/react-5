import Home from "./pages/Home"
import Joke from "./pages/Joke"
import './App.css'
import Grid from "./pages/Grid"
import { Route, Routes } from 'react-router-dom';
import ItemDetails from "./pages/ItemDetails";



function App() {
  return (
    <Routes>
      <Route path='/items' element={<Grid />}/>
      <Route path='/items/:id' element={<ItemDetails />}/>
    </Routes>
  )
}

export default App

import './css/App.css'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import { MovieProvider } from './context/MovieContext'

function App() {

  return <>
  <MovieProvider>
  <NavBar />
  <main className='main-content'>
    {/* Step2 for Adidng Route - Add the Routings */}
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/favorites' element={<Favorites />}></Route>
    </Routes>
  </main>
  </MovieProvider>
  
    </>
}

export default App

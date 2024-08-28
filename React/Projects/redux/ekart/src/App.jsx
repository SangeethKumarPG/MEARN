import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
      <Footer/>
    </>

  )
}

export default App
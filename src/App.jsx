import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Auth from './pages/auth/Auth'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/*' element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

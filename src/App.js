import './App.css';
// dependencies
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './contexts/UserContext';
// components
import Header from './components/Header';
import Footer from './components/Footer';
// pages
import Home from './pages/Home';
import Login from './pages/login/Login';
import User from './pages/user/User';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/conta/*' element={<User />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  )
}

export default App;

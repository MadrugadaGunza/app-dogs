import './App.css';
// dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserStorage } from './UserContext';
// components
import Header from './components/Header';
// pages
import Home from './pages/Home';
import Login from './pages/login/Login';
import User from './pages/conta/User';
import ProtectedRoute from './helpers/ProtectedRoute';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <UserStorage>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login/*' element={<Login />} />
          <Route exact path='/conta/*' element={<ProtectedRoute><User /></ProtectedRoute>} />
          <Route exact path='/*' element={<NotFound />} />
        </Routes>
      </UserStorage>
    </Router>
  )
}

export default App;

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
// pages
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
    const { login } = React.useContext(UserContext);
    if (login === true) return <Navigate to='/conta' />;

    return (
        <Routes>
            <Route path='/' element={<LoginForm />} />
            <Route path='/criar' element={<LoginCreate />} />
            <Route path='/perdeu' element={<LoginPasswordLost />} />
            <Route path='/resetar' element={<LoginPasswordReset />} />
        </Routes>
    )
}

export default Login

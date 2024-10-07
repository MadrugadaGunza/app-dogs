import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import { UserContext } from '../../UserContext'

const Login = () => {
    const { login } = React.useContext(UserContext);

    if(login === true) return <Navigate to='/conta' />

    return (
        <Routes>
            <Route path='/' element={<LoginForm />} />
        </Routes>
    )
}

export default Login

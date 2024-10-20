import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext';
import UserConta from './UserConta'

const User = () => {
    const { login } = React.useContext(UserContext);
    if (login === false) return <Navigate to='/login' />;

    return (
        <Routes>
            <Route path='/' element={<UserConta />} />
        </Routes>
    )
}

export default User

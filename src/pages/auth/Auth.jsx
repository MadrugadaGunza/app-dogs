import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Create from './create/Create'
import Lost from './lost/Lost'
import Reset from './reset/Reset'

const Auth = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/criar' element={<Create />} />
            <Route path='/perdeu' element={<Lost />} />
            <Route path='/resetar' element={<Reset />} />
        </Routes>
    )
}

export default Auth

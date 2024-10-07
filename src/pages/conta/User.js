import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserConta from './UserConta'
import UserPost from './UserPost'

const User = () => {
    return (
        <Routes>
            <Route path='/' element={<UserConta />} />
            <Route path='/postar' element={<UserPost />} />
        </Routes>
    )
}

export default User

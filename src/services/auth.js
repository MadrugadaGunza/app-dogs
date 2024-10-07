import { BASE_URL } from "./api"

export const USER_LOGIN = ({ email, password }) => {
    return {
        url: `${BASE_URL}/auth`,
        options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }
    }
}

export const GET_USER = (token) => {
    return {
        url: `${BASE_URL}/user/token/validate`,
        options: {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        }
    }
}
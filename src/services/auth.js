import { URL_BASE } from "./api";

export const TOKEN_POST = ({ username, password }) => {
    return {
        url: `${URL_BASE}/jwt-auth/v1/token`,
        options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }
    }
}

export const USER_GET = (token) => {
    return {
        url: `${URL_BASE}/api/user`,
        options: {
            method: 'GET',
            headers: { Authorization: 'Bearer ' + token }
        }
    }
}

export const TOKEN_POST_VALIDATE = (token) => {
    return {
        url: `${URL_BASE}/jwt-auth/v1/token/validate`,
        options: {
            method: 'POST',
            headers: { Authorization: 'Bearer ' + token }
        }
    }
}

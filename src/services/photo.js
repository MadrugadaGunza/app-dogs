import { URL_BASE } from "./api"

export const GET_PHOTO = () => {
    return {
        url: `${URL_BASE}/api/photo`,
        options: {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
    }
}

export const PHOTO_POST = (formData, token) => {
    return {
        url: `${URL_BASE}/api/photo`,
        options: {
            method: 'POST',
            headers: { authorization: 'Bearer ' + token },
            body: formData
        }
    }
}
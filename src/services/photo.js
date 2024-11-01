import { URL_BASE } from "./api"

export const PHOTOS_GET = ({ page, total, user }) => {
    return {
        url: `${URL_BASE}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
        options: {
            method: 'GET',
            cache: 'no-store'
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
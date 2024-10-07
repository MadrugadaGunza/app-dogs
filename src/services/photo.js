import { BASE_URL } from "./api"

export const GET_PHOTOS = () => {
    return {
        url: `${BASE_URL}/photo`,
        options: {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
    }
}

export const POST_PHOTOS = ({ banner, title, description, token }) => {
    return {
        url: `${BASE_URL}/photo`,
        options: {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify({ banner, title, description }),
        }
    }
}
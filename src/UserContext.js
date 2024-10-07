import React from 'react'
import { GET_USER, USER_LOGIN } from './services/auth';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [login, setLogin] = React.useState(false);
    const navigate = useNavigate();

    const getUser = async (token) => {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = GET_USER(token);
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result);
            setLogin(true);
            navigate('/conta')
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const userLogin = async ({ email, password }) => {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = USER_LOGIN({ email, password });
            const response = await fetch(url, options);
            const { message, token } = await response.json();
            if (message) return console.log(message);
            window.localStorage.setItem('token', token);
            await getUser(token);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const logOut = () => {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');
        navigate('/login');
    }

    React.useEffect(() => {
        const autoLogin = async () => {
            const token = window.localStorage.getItem('token');
            if (token) {
                await getUser(token);
            } else {
                setLogin(false);
            }
        }
        autoLogin();
    }, []);

    return (
        <UserContext.Provider value={{ data, loading, error, login, userLogin, logOut }}>
            {children}
        </UserContext.Provider>
    )
}

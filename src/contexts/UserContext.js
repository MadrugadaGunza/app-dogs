import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_POST_VALIDATE, USER_GET } from '../services/auth';

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
            const { url, options } = USER_GET(token);
            const response = await fetch(url, options);
            const result = await response.json();
            setLogin(true);
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const userLogin = async ({ username, password }) => {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = TOKEN_POST({ username, password });
            const response = await fetch(url, options);
            if (!response.ok) throw new Error("Erro ao logar, tente novamente");
            const { token } = await response.json();
            window.localStorage.setItem('token', token);
            await getUser(token);
            navigate('/conta');
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const userLogout = React.useCallback(() => {
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');
    }, []);

    React.useEffect(() => {
        const autoLogin = async () => {
            const token = window.localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const { url, options } = TOKEN_POST_VALIDATE(token);
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error("Token inválido");
                    await getUser(token);
                } catch (error) {
                    userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }
        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{ data, loading, error, login, userLogin, userLogout }}>
            {children}
        </UserContext.Provider>
    )
}

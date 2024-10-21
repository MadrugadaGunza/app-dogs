// styles
import styles from './LoginForm.module.css';
// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { USER_POST } from '../../services/auth';
import { UserContext } from '../../contexts/UserContext';
import useFetch from '../../hooks/useFetch';
// components
import Input from '../../components/forms/Input';
import Button from '../../components/forms/Button';

const LoginCreate = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { userLogin } = React.useContext(UserContext);
    const { loading, request } = useFetch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { url, options } = USER_POST({ username, email, password });
        const { response } = await request(url, options);
        if (response.ok) userLogin({ username, password });
    }

    return (
        <section className='animeLeft'>
            <h1 className='title'>Cadastro</h1>
            <form onSubmit={handleSubmit}>
                <Input label='Usuário' type='text' name='username' id='username'
                    placeholder='Digite o nome de usuário'
                    value={username} onChange={({ target }) => setUsername(target.value)}
                />
                <Input label='Email' type='email' name='email' id='email'
                    placeholder='Digite o email'
                    value={email} onChange={({ target }) => setEmail(target.value)}
                />
                <Input label='Senha' type='password' name='password' id='password'
                    placeholder='Digite a senha'
                    value={password} onChange={({ target }) => setPassword(target.value)}
                />
                {loading ? <Button disabled>Carregando...</Button> : <Button>Cadastrar</Button>}
            </form>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Faça login</h2>
                <p>Já possui conta? faça login no site.</p>
                <Link to='/login'>Login</Link>
            </div>
        </section>
    )
}

export default LoginCreate

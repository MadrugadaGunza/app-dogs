import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext';
// components
import Input from '../../components/forms/Input';
import Button from '../../components/forms/Button';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { userLogin, loading } = React.useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin({ username, password });
    }

    return (
        <section>
            <h1 className='title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input type='text' label='Usuário' id='username' name='username'
                    placeholder='Digite o nome de usuário'
                    value={username} onChange={({ target }) => setUsername(target.value)}
                />
                <Input type='password' label='Senha' id='password' name='password'
                    placeholder='Digite a sua senha'
                    value={password} onChange={({ target }) => setPassword(target.value)}
                />
                {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
            </form>
            <Link to='/login/criar'>Criar</Link>
        </section>
    )
}

export default LoginForm

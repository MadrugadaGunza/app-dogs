// styles
import styles from './LoginForm.module.css';
import stylesBtn from '../../components/forms/Button.module.css';
// dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
// components
import Input from '../../components/forms/Input';
import Button from '../../components/forms/Button';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { userLogin, loading, error } = React.useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        userLogin({ username, password });
    }

    return (
        <section className='animeLeft'>
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
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
            <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a senha?</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
            </div>
        </section>
    )
}

export default LoginForm

import React from 'react'
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { userLogin, loading } = React.useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    userLogin({ email, password })
  }

  return (
    <section className='container'>
      <h1 className='title'>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' id='email' placeholder='Digite o seu email'
          value={email} onChange={({ target }) => setEmail(target.value)}
        />
        <input type='password' name='password' id='password' placeholder='Digite a sua senha'
          value={password} onChange={({ target }) => setPassword(target.value)}
        />
        {loading ? <button disabled>Carregando...</button> :<button type='submit'>Login</button>}
      </form>
    </section>
  )
}

export default LoginForm

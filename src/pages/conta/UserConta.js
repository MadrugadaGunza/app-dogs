import styles from './UserConta.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext'
import Feed from '../../components/feed/Feed';

const UserConta = () => {
    const { logOut } = React.useContext(UserContext);

    return (
        <section className='container'>
            <section className={styles.header}>
                <h1 className='title'>Minha Conta</h1>
                <nav className={styles.nav}>
                    <NavLink to='/conta/postar'>Posta</NavLink>
                    <button onClick={() => logOut()}>Sair</button>
                </nav>
            </section>
            <Feed />
        </section>
    )
}

export default UserConta
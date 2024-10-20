import styles from './Header.module.css';
import React from 'react';
import { ReactComponent as Dogs } from '../assets/dogs.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const Header = () => {
    const { data, userLogout } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to='/' className={styles.logo} aria-label='Dogs - Home'>
                    <Dogs />
                </Link>
                {data ?
                    <Link to='/conta' className={styles.login}>
                        {data.nome}
                        <button onClick={userLogout}>sai</button>
                    </Link> :
                    <Link to='/login' className={styles.login}>Login</Link>
                }
            </nav>
        </header>
    )
}

export default Header

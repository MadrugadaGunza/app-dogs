import styles from './Header.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Dog } from '../assets/dogs.svg'
import { UserContext } from '../UserContext'

const Header = () => {
    const { data } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <Link to='/' className={styles.logo}><Dog /></Link>
            <nav className={styles.nav}>
                <Link to='/' className={styles.home}>Home</Link>
                {data ?
                    <Link to='/conta' title='Minha Conta' className={styles.login}>{data.name}</Link> :
                    <Link to='/login' className={styles.login}>Login</Link>
                }
            </nav>
        </header>
    )
}

export default Header

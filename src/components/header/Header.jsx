import styles from './Header.module.css';
import { Link } from 'react-router-dom'
import { ReactComponent as Dog } from '../../assets/dogs.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/'><Dog/></Link>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/login' className={styles.login}>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

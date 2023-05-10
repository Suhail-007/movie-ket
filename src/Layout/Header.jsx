import { BsFillMenuAppFill } from 'react-icons/bs'
import styles from './header.module.css';

const Header = function() {
  return (
    <header className={styles.header}>
      <h1>Movie-ket</h1>
        <div className={styles.menu__icon}> 
          <BsFillMenuAppFill />
        </div>
    </header>
  )
}

export default Header
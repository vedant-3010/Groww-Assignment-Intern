import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { AiOutlineBulb, AiFillBulb } from 'react-icons/ai';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={`${styles.navbar} ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link legacyBehavior href="/">
            <a className={`${styles.navLink} ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`} >GrowwMedia</a>
          </Link>
        </li>
      </ul>
      <div className={styles.themeToggle}>

        <button onClick={toggleTheme}>
          {theme === 'dark' ? <AiFillBulb /> : <AiOutlineBulb />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

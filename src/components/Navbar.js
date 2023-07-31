import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css'; // Import the CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link legacyBehavior href="/">
            <a className={styles.navLink}>GrowwMedia</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

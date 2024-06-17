import Link from 'next/link';
import { GrTechnology } from 'react-icons/gr';
import styles from './header.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href={'/'} className={styles.logo}>
          cloud <GrTechnology /> hosting
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/articles">
          Articles
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <Link className={styles.link} href="/admin">
          admin Dashboard
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;

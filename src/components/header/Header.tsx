import Link from 'next/link';
import styles from './header.module.css';
import NavBar from './NavBar';
const Header = () => {
  return (
    <header className={styles.header}>
      <NavBar />

      <div className={styles.right}>
        <Link className={styles.btn} href="/register">
          register
        </Link>
        <Link className={styles.btn} href="/login">
          login
        </Link>
      </div>
    </header>
  );
};

export default Header;

// write code add two numbers

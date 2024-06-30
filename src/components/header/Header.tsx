import Link from 'next/link';
import styles from './header.module.css';
import NavBar from './NavBar';
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from './LogoutButton';
const Header = () => {
  const token = cookies().get("JwtToken")?.value || "";
  const payload = verifyTokenForPage(token)


  return (
    <header className={styles.header}>
      <NavBar />

      <div className={styles.right}>
        {payload ? (<>
          <strong className='text-blue-800 md:text-xl capitalize' >
            {payload?.username}
          </strong>
          <LogoutButton />
        </>) : (
          <>
            <Link className={styles.btn} href="/register">register</Link>
            <Link className={styles.btn} href="/login">login</Link>
          </>)}
      </div>
    </header>
  );
};

export default Header;

// write code add two numbers

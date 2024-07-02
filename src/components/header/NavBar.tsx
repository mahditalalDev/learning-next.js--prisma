'use client';
import Link from 'next/link';
import { GrTechnology } from 'react-icons/gr';
import styles from './header.module.css';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';
import React from 'react';
interface NavBarProps {
  isAdmin: boolean;
}

const NavBar = ({ isAdmin }: NavBarProps) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={styles.nav}>
      <Link href={'/'} className={styles.logo}>
        cloud <GrTechnology /> hosting
      </Link>

      <div
        className={styles.menu}
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        {toggle ? <IoCloseSharp className={styles.iconClose} /> : <IoMenu />}
      </div>
      <div
        className={styles.navLinksWrapper}
        style={{
          clipPath: (toggle && 'polygon(0 0,100% 0, 100% 100%,0 100%)') || '',
        }}
      >
        <ul className={styles.navLinks}>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            className={styles.link}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            className={styles.link}
            href="/articles?pageNumber=1"
          >
            Articles
          </Link>
          <Link
            onClick={() => {
              setToggle(false);
            }}
            className={styles.link}
            href="/about"
          >
            About
          </Link>
          {isAdmin && (
            <Link
              onClick={() => {
                setToggle(false);
              }}
              className={styles.link}
              href="/admin"
            >
              admin Dashboard
            </Link>)}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

// const NavBar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   return (
//     <header className={styles.header}>
//       {/* LOGO+LINKS */}
//       <nav className={styles.nav}>
//         <Link href={'/'}>
//           <div className={styles.logo}>
//             TEsting <GrTechnology />
//             Logo
//           </div>
//         </Link>
//         {/*=== LOGO+LINKS=== */}
//         <IoMenu
//           className={styles.menu}
//           onClick={() => {
//             setShowMenu((prev) => !prev);
//           }}
//         />
//         {/* navLinks */}
//         <div
//           className={styles.navLinksWrapper}
//           style={{
//             clipPath:
//               (showMenu && 'polygon(0 0,100% 0, 100% 100%,0 100%)') || '',
//           }}
//         >
//           <ul className={styles.navLinks}>
//             <Link className={styles.link} href={'/'}>
//               home
//             </Link>
//             <Link className={styles.link} href={'/articles'}>
//               Articles
//             </Link>
//             <Link className={styles.link} href={'/about'}>
//               about
//             </Link>
//             <Link className={styles.link} href={'/admin'}>
//               ِAdmin Dashbord
//             </Link>
//           </ul>
//         </div>
//         {/* ====navLinks =====*/}
//       </nav>
//     </header>
//   );
// };

// export default NavBar;

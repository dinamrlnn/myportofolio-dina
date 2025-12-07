import Link from 'next/link';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="#home">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#certificates">Certificates</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#technologies">Technologies</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
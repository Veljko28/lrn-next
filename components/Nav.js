import Link from 'next/Link';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.title}>Articles</h2>
      <ul>
        <li>
          <Link href="home">Home</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <Link href="articles">Articles</Link>
        </li>
      </ul>
    </nav>
  )
}

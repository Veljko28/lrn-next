import Link from 'next/Link';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="http://localhost:3000/"><h2 className={styles.title}>Articles</h2></Link>
      <ul>
        <li>
          <Link href="http://localhost:3000/home">Home</Link>
        </li>
        <li>
          <Link href="http://localhost:3000/about">About</Link>
        </li>
        <li>
          <Link href="http://localhost:3000/articles">Articles</Link>
        </li>
         <li>
          <Link href="http://localhost:3000/kanye">Kanye</Link>
        </li>
      </ul>
    </nav>
  )
}

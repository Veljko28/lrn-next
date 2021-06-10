import Head from 'next/head';
import Article from '../components/Article';
import styles from '../styles/Articles.module.css';


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}


export default function article({articles}) {
  return (
    <div>
      <Head>
        <title>Articles</title>
      </Head>
      <h1 className={styles.header}>Articles</h1>
      <main className={styles.main}>
        <div className={styles.grid}>
          {articles.map(x => {
            return (<Article article={x} />)
          })}
        </div>
      </main>
    </div>
  )
}

// import {useRouter} from 'next/router';
import Link from 'next/Link';
import Head from 'next/head';
import styles from '../../../styles/Articles.module.css';


export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map(x => x.id);
  const paths = ids.map(id => ({params: {
    id: id.toString()
  }
}))  


  return {
    paths,
    fallback: false
  }
} 



const index = ({article}) => {
//  const router = useRouter();
//  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Article {article.id}</title>
      </Head>
      <h1 className={styles.header}>Article {article.id}</h1>
      <div  style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
          <div className={styles.paragraph}>
            <h2>Title: {article.title}</h2>
            <p>{article.body}</p>
            <Link href="http://localhost:3000/articles"><div className={styles.button}>Go Back</div></Link>
          </div>
      </div>
    </div>
  )
}

export default index;

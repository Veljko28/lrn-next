import styles from '../styles/Articles.module.css';
import Link from 'next/Link';


const Article = ({article}) => {
  return (
       <Link href={`http://localhost:3000/article/${article.id}`} key={article.id}>
         <div className={styles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
          </div>
        </Link>

  )
}

export default Article;

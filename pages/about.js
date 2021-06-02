import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function about() {
  return (
    <>
      <Head>
        <title>About page</title> 
      </Head>
      <h1 className={styles.header}>About</h1>
      <div className={styles.main}>
        <p className={styles.paragraph}>
        <h3 style={{textAlign: 'center'}}>About the site</h3>  
        This is a test website that fetches articles from an api 
        <a href="https://jsonplaceholder.typicode.com/" style={{color: '#00f'}}> JsonPlaceholder</a> and displays the articles using
        react and next.js which generates the routes for all the articles. It uses javascript and css for the majority of content
        on the website.Checkout the articles page to see how it works in action.</p>


        <p className={styles.paragraph}>
        <h3 style={{textAlign: 'center'}}>About Next.js</h3>  
        Next.js is an open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and generating static websites for React based applications. It's a production-ready framework that allows developers to create static and dynamic websites.</p>
      </div>
    </>
  )
}

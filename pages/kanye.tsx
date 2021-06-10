import Head from 'next/head';
import axios from 'axios';
import React from 'react';
import styles from '../styles/Kanye.module.css';



export default function Kanye() {
  const [quote,changeQuote] = React.useState();

  const getQuote = async () => {
  const res = await axios.get('http://api.kanye.rest/');
   changeQuote(res.data.quote);
  }

  return (
    <>
       <Head>
        <title>Kanye Rest</title>
        <meta name="description" content="Getting Kanye quotes" />
      </Head>

      <h1 className={styles.header}>Quote</h1>
      <h1 className={styles.quote}>{quote}</h1>
      <div className={styles.cnt}>
        <button className={styles.button} onClick={async () => await getQuote()}>Get Quote</button>
      </div>

    </>
  )
}

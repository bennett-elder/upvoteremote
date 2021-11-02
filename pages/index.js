import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, Link } from "react"

export default function Home2() {
  const [query, setQuery] = useState("remote developer relations")
  const [searchEngine, setSearchEngine] = useState("https://duckduckgo.com/?q=")

  const links = [
    {
      "title": "Breezy",
      "querySlug": "site%3Abreezy.hr"
    },
    {
      "title": "Lever",
      "querySlug": "site%3Alever.co"
    },
    {
      "title": "Applicant Pro",
      "querySlug": "site%3Aapplicantpro.com"
    },
    {
      "title": "Jobvite",
      "querySlug": "site%3Ajobvite.com"
    },
    {
      "title": "Applicant Stack",
      "querySlug": "site%3Aapplicantstack.com"
    },
    {
      "title": "Greenhouse",
      "querySlug": "site%3Agreenhouse.io"
    },
    {
      "title": "iCIMS",
      "querySlug": "site%3Aicims.com"
    },
    {
      "title": "Workday",
      "querySlug": "site%3Amyworkdayjobs.com"
    },
    {
      "title": "SmartRecruiters",
      "querySlug": "site%3Ajobs.smartrecruiters.com"
    },
    {
      "title": "Taleo",
      "querySlug": "site%3Ataleo.net"
    },
    {
      "title": "Careers URL",
      "querySlug": "inurl%3Acareers"
    }
  ];

  // https://duckduckgo.com/?q=
  // https://www.google.com/search?q=
  // https://www.bing.com/search?q=

  const updateQuery = (event) => {
    setQuery(event.target.value);
  };

  const setToDuck = (event) => {
    setSearchEngine("https://duckduckgo.com/?q=")
  }
  
  const setToBing = (event) => {
    setSearchEngine("https://www.bing.com/search?q=")
  }

  const setFilterValue = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Upvote Remote - Get started searching for remote jobs using search dorks</title>
        <meta name="description" content="Get started searching for remote jobs using search dorks." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" /> 
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Upvote Remote
        </h1>

        <p className={styles.description}>
          Get started searching for remote jobs using search dorks
        </p>

        <p>
          <label className={styles.searchFilter} htmlFor="searchFilter">Search filter:</label>&nbsp;
          <input className={styles.searchFilter} id="searchFilter" size="30"
            onChange={ updateQuery } value={query} placeholder="remote developer relations" />
        </p>

        <p>
          <button className={styles.searchFilterTitle} onClick={ setFilterValue } value='remote developer relations'>remote developer relations</button>
          <button className={styles.searchFilterTitle} onClick={ setFilterValue } value='remote devops engineer'>remote devops engineer</button>
          <button className={styles.searchFilterTitle} onClick={ setFilterValue } value='remote product manager'>remote product manager</button>
        </p>

        <p>
          <button className={styles.searchEngine} onClick={ setToDuck }>Use Duck</button>
          <button className={styles.searchEngine} onClick={ setToBing }>Use Bing</button>
        </p>

        <div className={styles.grid}>
          {
            links.map((item) => (
              <a key={item.title} className={styles.card} target="_blank"  rel="noreferrer" 
                href={`${searchEngine}${item.querySlug} ${query}`}>
                <h2>{item.title} &rarr;</h2>
                <p>{`${searchEngine}${item.querySlug} ${query}`}</p>
              </a>    
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/BennettElder/status/1332233991995469824?s=20"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by this Twitter thread.
        </a>
      </footer>
    </div>
  )
}

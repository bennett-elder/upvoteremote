import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, Link } from "react"

export default function Home2() {
  const [query, setQuery] = useState("product manager")
  const [searchEngine, setSearchEngine] = useState("https://duckduckgo.com/?q=remote+")

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
      "title": "Workable",
      "querySlug": "site%3Aworkable.com"
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
      "title": "Ultipro",
      "querySlug": "site%3Arecruiting.ultipro.com"
    },
    {
      "title": "BambooHR",
      "querySlug": "site%3Abamboohr.com"
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
    setSearchEngine("https://duckduckgo.com/?q=remote+")
  }
  
  const setToBing = (event) => {
    setSearchEngine("https://www.bing.com/search?q=remote+")
  }

  const setToGoogle = (event) => {
    setSearchEngine("https://www.google.com/search?q=remote+")
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
          Work remotely.<br />Get paid.
        </h1>

        <p className={styles.description}>
          Throw away mainstream job boards that make you just another number.<br /><br />Find the long tail of remote jobs and apply directly with hidden gems using this one neat trick.
        </p>

        <p className={styles.searchFilterSection}>
          <label className={styles.searchFilter} htmlFor="searchFilter">What do you want to do?</label>&nbsp;
          <input className={styles.searchFilter} id="searchFilter" size="30"
            onChange={ updateQuery } value={query} placeholder="something something cloud" />
        </p>

        <p className={styles.someIdeas}>
          Some ideas to tap:<br />
          <button className={styles.searchFilterTitle} onClick={ setFilterValue } value='developer relations'>developer relations</button>
          <button className={styles.searchFilterTitle} onClick={ setFilterValue } value='devops engineer'>devops engineer</button>
          <button className={styles.searchFilterTitle} onClick={ setFilterValue } value='software developer'>software developer</button>
          <button className={styles.searchFilterTitle} onClick={ setFilterValue } value='cloud engineer'>cloud engineer</button>
          <button className={styles.searchFilterTitle} onClick={ setFilterValue } value='product manager'>product manager</button>
          <button className={styles.searchFilterTitle} onClick={ setFilterValue } value='project manager'>project manager</button>
        </p>

        <p className={styles.boardPossibilities}>
          Follow these links to find matching jobs:
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

        <p className={styles.preferredSearchEngine}>
          Have a search engine preference?<br />
          <button className={styles.searchEngine} onClick={ setToDuck }>Use Duck</button>
          <button className={styles.searchEngine} onClick={ setToBing }>Use Bing</button>
          <button className={styles.searchEngine} onClick={ setToGoogle }>Use Google</button>
        </p>        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/BennettElder/status/1332233991995469824?s=20"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by this Twitter thread.
        </a>
        <a
          href="https://github.com/bennett-elder/upvoteremote/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ideas and contributions welcome.
        </a>
        <a
          href="https://ko-fi.com/upvoteremote"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coffee welcome.
        </a>
      </footer>
    </div>
  )
}

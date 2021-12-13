import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Regional Configuration Orchestrator</title>
        <meta
          property="og:title"
          content="Regional Configuration Orchestrator"
        />
      </Helmet>
    </div>
  )
}

export default Home

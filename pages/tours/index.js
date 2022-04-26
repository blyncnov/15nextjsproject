import React from 'react'
import Head from 'next/head'

import Tour from "../../components/Tours/App"

const Tours = () => {
  return (
    <>
      <Head>
        <title>Tours Reminder App</title>
        <meta name="Reminder App" content="Tours Reminder Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tour/>
    </>
  )
}

export default Tours
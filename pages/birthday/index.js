import React from 'react'
import Head from 'next/head'
import App from '../../components/BirthdayReminder/App'


const BirthdayReminder = () => {
  return (
    <>
      <Head>
        <title>Birthday Reminder App</title>
        <meta name="Reminder App" content="Birthday Reminder Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <App/>
      
    </>
  )
}

export default BirthdayReminder
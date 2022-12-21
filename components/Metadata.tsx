import React from 'react'
import Head from "next/head"
import { appendSiteTitle } from '../utils/misc'

const Metadata = ({title = 'Welcome'}) => {
  return (
    <Head>
      <title>{title}{appendSiteTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Richard Pasquiou, développeur web front-end" />
    </Head>
  )
}

export default Metadata
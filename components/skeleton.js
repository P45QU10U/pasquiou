import Head from 'next/head'

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import Header from './Header'
import Footer from './Footer'

export const appendSiteTitle = ' - Richard Pasquiou'

export default function Skeleton({ children }) {
  return (
    <>
      <SkipNavLink>passer au contenu</SkipNavLink>
      <div className="relative carbon font-mono">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Richard Pasquiou, développeur web front-end" />
        </Head>
        <Header />
        <SkipNavContent style={{ scrollMarginTop: '12rem' }}>
          <main>{children}</main>
        </SkipNavContent>
        <Footer />
      </div>
    </>
  )
}

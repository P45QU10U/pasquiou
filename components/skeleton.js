import Head from 'next/head'

import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import Header from './Header'
import Footer from './Footer'

export const appendSiteTitle = ' - Richard Pasquiou'

const Skeleton = function ({ children }) {
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
          <main role="main">{children}</main>
        </SkipNavContent>
        <Footer />
      </div>
    </>
  )
}

export default Skeleton

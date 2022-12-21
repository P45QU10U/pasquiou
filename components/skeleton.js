import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import Header from './Header'
import Footer from './Footer'

export const appendSiteTitle = ' - Richard Pasquiou'

const Skeleton = function ({ children }) {
  return (
    <>
      <SkipNavLink>passer au contenu</SkipNavLink>
      <div className="relative bg-gradient-to-b from-cyan-100 to-blue-300 font-mono">
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

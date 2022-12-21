import React from 'react'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'


export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <title>Next.js</title>
      </head>
      <body>
      
      <SkipNavLink>passer au contenu</SkipNavLink>
      <div className="relative carbon font-mono">
        <Header />
        <SkipNavContent style={{ scrollMarginTop: '12rem' }}>
          <main role="main">{children}</main>
        </SkipNavContent>
        <Footer />
      </div>
    
      </body>
    </html>
  );
}


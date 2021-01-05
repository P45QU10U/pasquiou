import Head from 'next/head'
import { MdDeveloperMode } from 'react-icons/md'
import Link from 'next/link'

const name = 'Richard Pasquiou'
export const siteTitle = 'Développeur web front-end'

export default function Layout({ children, home }) {
  return (
    <div className="bg-orange-300 grid">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Richard Pasquiou, développeur web front-end" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="max-w-4xl mx-auto flex ">
        {home ? (
          <>
            <MdDeveloperMode size="4em" />
            <h1 className="text-6xl">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img src="/images/profile.jpg" className="" alt={name} />
              </a>
            </Link>
            <h2 className="">
              <Link href="/">
                <a className="">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

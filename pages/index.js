// @ts-check

import Head from 'next/head'
import Skeleton, { appendSiteTitle } from '../components/skeleton'

import { getSortedPostsData } from '../lib/posts'
import { Container, Section } from '../components/designSystem/layout'
import Base from '../components/index/Base'
import Backend from '../components/index/Backend'
import NoOrder from '../components/index/NoOrder'
import Quality from '../components/index/Quality'
import Frameworks from '../components/index/Frameworks'
import ContactFormWhook from '../components/ContactFormWhook'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Skeleton>
      <Head>
        <title>{`Accueil ${appendSiteTitle}`}</title>
      </Head>
      <Container>
        <Section className="grid grid-cols-1 gap-2 grid-rows-3 grid-flow-col">
          <h2 className="text-transparent bg-gradient-to-r bg-clip-text from-orange-500 to-green-500">
            Développeur web <span className="inline-block">front-end</span>
          </h2>
          <h3>
            <span role="img" aria-label="Salut">
              👋🏼
            </span>{' '}
            Je m'appelle Richard Pasquiou
          </h3>
          <p>développeur web front-end depuis 2010</p>
        </Section>

        <Base />
        <Backend />
        <Quality />
        <Frameworks />
        <NoOrder />

        <Section>
          <h3 className="mb-4">Contactez-moi</h3>
          <ContactFormWhook />
        </Section>
      </Container>
    </Skeleton>
  )
}

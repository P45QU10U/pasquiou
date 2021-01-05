// @ts-check

import Head from 'next/head'
import Link from 'next/link'
import Skeleton, { appendSiteTitle } from '../components/skeleton'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'
import { Container, Section } from '../components/designSystem/layout'
import Base from '../components/index/Base'
import Backend from '../components/index/Backend'
import Quality from '../components/index/Quality'
import Frameworks from '../components/index/Frameworks'

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
      <Container className=" min-h-screen">
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
      </Container>
      <Container>
        <Section className="relative z-10 grid grid-cols-1">
          <div className="col-start-2 col-end-3 lg:col-start-1 lg:col-end-5 row-start-2 row-end-4 lg:row-end-5 lg:py-10 xl:py-16 flex -mr-8 pl-4 sm:mr-0 sm:pl-0" />
          <div className="w-full -ml-full rounded-3xl transform shadow-lg bg-gradient-to-br from-orange-400 to-pink-500 -rotate-1 sm:-rotate-2">
            <div className="p-5">
              <h4>En vrac</h4>
              <p>J'ai fait peu de tests, mais je sais utiliser Jest, avec pour complément la React Testing Library.</p>
              <p>
                Côté législation, j'ai tout lu le{' '}
                <abbr title="Réglement Général pour la Protection des Données">RGPD</abbr>.
              </p>
              <p>Enfin, je suis très intéressé par tout ce qui est création de sites statiques. NextJS est génial.</p>
              <p>Prochainement, je compte me former à TypeScript. Je n'en connais que les rudiments.</p>
              <code>// @ts-check</code>
            </div>
          </div>
        </Section>
      </Container>
      <Container>
        <Section>
          <blockquote>
            Je ne suis pas le mouton à 5 pattes, mais je pense à la transplantation. je suis investi, et m'efforce de
            délivrer un code concis. Pour moi, ou les suivants… Si vous souhaitez m'embaucher, contactez-moi
          </blockquote>
        </Section>
      </Container>
    </Skeleton>
  )
}

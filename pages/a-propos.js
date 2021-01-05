import Head from 'next/head'
import Skeleton, { appendSiteTitle } from '../components/skeleton'

import { Container, Section } from '../components/designSystem/layout'

export default function Home() {
  return (
    <Skeleton>
      <Head>
        <title>{`&agrave; propos ${appendSiteTitle}`}</title>
      </Head>
      <Container className="min-h-screen bg-gradient-to-b from-transparent to-orange-200">
        <Section className="">
          <h2 className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">A propos</h2>

          <p>
            En dehors du développement, je m'intéresse à la cuisine. J'arrive à faire de meilleures pizzas, et je fais
            une brioche extra. J'aime aussi apprendre à faire pousser des choses dans mon jardin. 1<sup>Kg</sup> de
            fraises, et 5 kilos de raisin l'été 2020. Et pour partager quelques moments, je m'adonne aux jeux de
            société.
          </p>

          <p>Si vous avez un texte à faire relire pour correction, je me dévoue.</p>
        </Section>
      </Container>
    </Skeleton>
  )
}

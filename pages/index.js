import React from 'react'
import Skeleton, { appendSiteTitle } from '../components/skeleton'

import { Container, Section } from '../components/designSystem/layout'
import Base from '../components/index/Base'
import Backend from '../components/index/Backend'
import NoOrder from '../components/index/NoOrder'
import Quality from '../components/index/Quality'
import Frameworks from '../components/index/Frameworks'
import ContactFormWhook from '../components/ContactFormWhook'
import Metadata from '../components/Metadata'

const Home = function () {
  return (
    <>
      <Metadata title={`Accueil`} />
      <Container>
        <Section className="grid grid-cols-1 gap-2 grid-rows-3 grid-flow-col">
          <h2 className="text-transparent bg-gradient-to-br bg-clip-text from-black to-orange-500">
            Développeur web <span className="inline-block">front-end</span>
          </h2>
          <h3>
            <span role="img" aria-label="Salut">
              👋🏼
            </span>{' '}
            Je m'appelle Richard Pasquiou
          </h3>
          <p>développeur web depuis 2010</p>
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
    </>
  )
}

export default Home

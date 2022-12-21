import React from 'react'

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
        <Section className="grid">
          <h1 className='text-4xl mb-6'>
            {/* <span role="img" aria-label="Salut">
              👋🏼
            </span>{' '} */}
            Richard <span className='text-orange-700'>P</span>asquiou
          </h1>
          <h2 className="text-2xl mb-6">
            Développeur web <span className="inline-block text-transparent bg-gradient-to-br bg-clip-text from-orange-800 to-orange-500">front-end</span> <span className='text-sm'>depuis 2010</span>
          </h2>
          
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

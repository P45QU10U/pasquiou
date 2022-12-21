import Image from 'next/image'
import { Container, Section, Article } from '../components/designSystem/layout'
import Metadata from '../components/Metadata'

const Apropos = function () {
  return (
    <>
      <Metadata title={`À propos`} />
      <Container >
        <Article>
          <Section>
            <h2>A propos</h2>

            <div className='bg-red-100 p-8 flex gap-4 flex-col md:flex-row items-center mb-4'>
            <p className='flex-1'>
              En dehors du développement web, j'aime faire à manger. Avec une préférence pour ce qui se fait avec de la farine&nbsp;:
              Pizzas, pâtes, brioches, tartes.
            </p>
            <picture className='flex-1 grid justify-center'>
            <Image width={'300'} height={'200'} src='/images/pizza_reine_maison.jpg' />
              <figcaption className='text-xs text-center'>pizza reine maison</figcaption>
            </picture>

            </div>
           
            <p className='bg-white p-8 mb-4'>
              Pour partager quelques moments en famille, je m'adonne aux jeux de société, tels que Takenoko,
              Agricola, Dixit, Unlock…
            </p>

            <div className='bg-emerald-100 p-8 flex gap-4 flex-col md:flex-row-reverse items-center mb-4'>
            <p className='flex-1'>
            Enfin, j'aime aussi apprendre à faire pousser des choses dans mon jardin. Les conseils de{' '}
              <a href="https://josephchauffrey.fr">Joseph Chauffrey</a> pour l'entretenir sont précieux.</p>
            <picture className="flex-1 grid justify-center">
              <Image width={'250'} height={'300'} src='/images/raisin_normand.jpg' />
              <figcaption className='text-xs text-center'>raisin normand</figcaption>
            </picture>
            </div>
            
          </Section>
        </Article>
      </Container>
    </>
  )
}

export default Apropos

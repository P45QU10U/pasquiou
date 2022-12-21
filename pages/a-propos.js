import Image from 'next/image'
import { Container, Section, Article } from '../components/designSystem/layout'
import Metadata from '../components/Metadata'

const Apropos = function () {
  return (
    <>
      <Metadata title={`À propos`} />
      <Container >
        <Article>
          <Section className='grid'>
            <h1>A propos</h1>

            <h2 className='w-min justify-self-end bg-gradient-to-b from-red-200 to-red-100 rounded-tl-xl rounded-tr-xl pt-2 px-5'>Cuisine</h2>
            <div className='bg-gradient-to-tr from-red-200 to-red-100 p-8 flex gap-4 flex-col md:flex-row items-center mb-6'>
            <p className='text-lg flex-1'>
              En dehors du développement web, j'aime faire à manger. Avec une préférence pour ce qui se fait avec de la farine&nbsp;:
              Pizzas, pâtes, brioches, tartes.
            </p>
            <picture className='flex-1 grid justify-center'>
            <Image alt='pizza reine maison' width={'300'} height={'200'} src='/images/pizza_reine_maison.jpg' />
              <figcaption className='mt-1 text-xs text-center'>pizza reine maison</figcaption>
            </picture>

            </div>

            <h2 className="w-min justify-self-end bg-gradient-to-b from-gray-100 to-white  rounded-tl-xl rounded-tr-xl pt-2 px-5">Jeux</h2>
            <p className='text-lg bg-white p-8 mb-6'>
              Pour partager quelques moments en famille 👨‍👩‍👧‍👧, je m'adonne aux jeux de société, tels que Takenoko,
              Agricola, Dixit, Unlock…
            </p>

            <h2 className="w-min justify-self-end bg-gradient-to-b from-emerald-200 to-emerald-100 rounded-tl-xl rounded-tr-xl pt-2 px-5">Jardin</h2>
            <div className='bg-emerald-100 p-8 flex gap-4 flex-col md:flex-row-reverse items-center mb-6'>
            <p className='text-lg flex-1'>
            Enfin, j'aime aussi apprendre à faire pousser des choses dans mon jardin. Les conseils de{' '}
              <a href="https://josephchauffrey.fr">Joseph Chauffrey</a> pour l'entretenir sont précieux.</p>
            <picture className="flex-1 grid justify-center">
              <Image alt='grappe de raisin baignée de lumière' width={'250'} height={'300'} src='/images/raisin_normand.jpg' />
              <figcaption className='mt-1 text-xs text-center'>raisin normand</figcaption>
            </picture>
            </div>
            
          </Section>
        </Article>
      </Container>
    </>
  )
}

export default Apropos

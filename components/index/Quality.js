import Img from 'next/image'

import { Section } from '../designSystem/layout'

const Quality = function () {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 place-items-center bg-indigo-300 bg-opacity-60  border-t-4 border-indigo-400 rounded-sm p-8">
        <div>
          <h4>Qualité web</h4>
          <p>
            J'ai trouvé des règles de base simples à appliquer dans la <a className='no-underline' href="https://www.opquast.com/certification/">certification Opquast, Maîtrise de la qualité en projet Web</a> ; si vous ne l'avez pas encore passée, allez-y… Vraiment.
          </p>
          <p>Autant que je le peux, j'essaie de développer pour que ce soit lisible par tous. La formation <a className='no-underline' href='https://formations.access42.net/formations/developper-et-coder-des-sites-accessibles/' >Développer des sites web accessibles</a> d'Access42 m'a aidé à travailler dans ce sens. Certification obtenue avec
            une réussite de 72,5 %.
            <br />
            <small>
              Code de certificat 58e2d5c0-6d7d-11ec-a841-8fc39e2777f1 vérifiable sur{' '}
              <a href="https://certification.access42.pro">certification.access42.pro</a>
            </small>
          </p>
        </div>
        <a
              href="https://directory.opquast.com/fr/certificat/CFMXPT/"
              title="Certification Opquast Pasquiou Richard"
            >
        <Img width="200" height="200" alt="badge Opquast avancé" src="/images/OpquastBadge.svg" />
        </a>
      </div>
    </Section>
  )
}

export default Quality

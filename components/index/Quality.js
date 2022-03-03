import Img from 'next/image'

import { Section } from '../designSystem/layout'

const Quality = function () {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 place-items-center bg-indigo-300 bg-opacity-60  border-t-4 border-indigo-400 rounded-sm p-8">
        <div>
          <h4>Qualité web</h4>
          <p>
            Tout développeur web devrait se pencher sur la certification Opquast, Maîtrise de la qualité en projet Web ;
            En juillet 2020,{' '}
            <a
              href="https://directory.opquast.com/fr/certificat/CFMXPT/"
              title="Certification Opquast Pasquiou Richard"
            >
              j'ai obtenu le niveau avancé
            </a>
            . Si vous ne l'avez pas encore passée, allez-y… Vraiment.
          </p>
          <p>Tant qu'à développer, autant que ce soit valable pour tous en rendant accessible les sites.</p>
          <p>
            J'ai donc passé la formation "Développer des sites web accessibles" d'Access42. Certification obtenue avec
            une réussite de 72,5 %.
            <br />
            <small>
              Code de certificat 58e2d5c0-6d7d-11ec-a841-8fc39e2777f1 vérifiable sur{' '}
              <a href="https://certification.access42.pro">certification.access42.pro</a>
            </small>
          </p>
        </div>
        <Img width="200" height="200" alt="badge Opquast avancé" src="/images/OpquastBadge.svg" />
      </div>
    </Section>
  )
}

export default Quality

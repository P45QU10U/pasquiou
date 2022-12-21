import { Section } from '../designSystem/layout'

const Frameworks = function () {
  return (
    <Section className="relative z-10 grid grid-cols-1">
      <div className="w-full -ml-full rounded-3xl shadow-lg bg-gradient-to-br from-orange-400 to-pink-500 transform -rotate-1 sm:-rotate-2 mb-4">
        <div className="p-6">
          <h4>En vrac</h4>
          <p>J'ai fait peu de tests, mais je sais utiliser Jest, avec pour complément la React Testing Library.</p>
          <p>
            Côté législation, j'ai décortiqué le{' '}
            <abbr title="Réglement Général pour la Protection des Données">RGPD</abbr>.
          </p>
          <p>Enfin, je suis très intéressé par tout ce qui est création de sites statiques ; NextJS est génial.</p>
          <p>TypeScript, je pratique, mais une bonne formation ne serait pas de refus.</p>
          <code>// @ts-check</code>
          <blockquote>
            Je ne suis pas le mouton à 5 pattes. Je suis investi, et m'efforce de délivrer un code concis. Pour moi, ou
            ceux qui me reliront…
          </blockquote>
        </div>
      </div>
    </Section>
  )
}

export default Frameworks

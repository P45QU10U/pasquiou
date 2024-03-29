import { Container, Article } from '../components/designSystem/layout'
import Metadata from '../components/Metadata'

const Mentionslegales = function () {
  return (
    <>
      <Metadata title={`Mentions légales`} />
      <Container>
        <Article>
          <h2>Editeur</h2>
          <ul>
            <li>Responsable de la publication : Richard Pasquiou</li>
            <li>1 impasse des érables, 27350 Routot, France</li>
            <li>
              <abbr title="Numéro de téléphone">Tél. :</abbr> <a href="tel:0676946381">06 76 94 63 81</a>
            </li>
          </ul>
          <h2>Hébergement</h2>
          <address>
            Vercel Inc. <br />
            340 S Lemon Ave #4133 Walnut, <br />
            CA 91789, <br />
            États-unis
          </address>
        </Article>
      </Container>
    </>
  )
}

export default Mentionslegales

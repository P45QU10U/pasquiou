import { SiReact, SiGit, SiTailwindcss } from 'react-icons/si'
import Bubble from '../designSystem/Bubble'
import { Section } from '../designSystem/layout'

const Frameworks = function () {
  return (
    <Section>
      <div className="bg-red-200 bg-opacity-60 border-t-4 border-red-300 rounded-sm p-8 mb-8">
        <div className=" flex gap-3 mb-4">
          <Bubble bgColor="bg-black" textColor="text-cyan-400">
            <SiReact size="32" title="React" />
          </Bubble>
          <Bubble bgColor="bg-white" textColor="text-red-400">
            <SiGit size="32" title="Git" />
          </Bubble>
          <Bubble bgColor="bg-white" textColor="text-cyan-400">
            <SiTailwindcss size="32" title="Tailwind CSS" />
          </Bubble>
        </div>
        <h4>Mes coups de c&oelig;ur</h4>
        <p>
          J'apprécie particulièrement <strong>React</strong> 💗, <strong>Git</strong>, et enfin <strong>TailwindCSS</strong> qui est diablement efficace (si, si, essayez même si ça a l'air sale mais que comme tout code ça peut le devenir !). Comme vous pouvez le constater, je ne suis pas designer ; cependant, je prends beaucoup de plaisir à transformer des maquettes en sites web.
        </p>
      </div>
    </Section>
  )
}

export default Frameworks

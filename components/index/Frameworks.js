import { SiReact, SiGit, SiTailwindcss } from 'react-icons/si'
import Bubble from '../designSystem/Bubble'
import { Section } from '../designSystem/layout'

const Frameworks = function () {
  return (
    <Section>
      <div className="bg-red-200 bg-opacity-60 border-t-4 border-red-300 rounded-sm p-8">
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
          J'apprécie particulièrement <strong>React</strong> 💗 et son écosystème, <strong>Git</strong>, et enfin <strong>TailwindCSS</strong> qui est diablement efficace (ça peut être sale, mais comme tout code). Je ne suis pas designer ; je prends beaucoup de plaisir à transformer les maquettes pour honorer le travail de ceux qui le sont.
        </p>
      </div>
    </Section>
  )
}

export default Frameworks

import { Section } from './designSystem/layout'

export default function Article({ children }) {
  return (
    <Section>
      <article className="bg-gray-100 p-8 mb-8">{children}</article>
    </Section>
  )
}

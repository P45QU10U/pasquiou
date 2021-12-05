import classnames from 'classnames'
import { maxWidthSections } from './theme'

const Container = function ({ className = '', children }) {
  return <div className={classnames(`${className}`)}>{children}</div>
}

const Section = function ({ className = '', children }) {
  return <section className={classnames(maxWidthSections, `p-4`, className)}>{children}</section>
}

const Article = function ({ children }) {
  return (
    <Section>
      <article className="bg-gray-100 p-8 mb-8">{children}</article>
    </Section>
  )
}

export { Container, Section, Article }

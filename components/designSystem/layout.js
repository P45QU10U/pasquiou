import classnames from 'classnames'
import { maxWidthSections } from './theme'

function Container({ className = '', children }) {
  return <div className={classnames(`${className}`)}>{children}</div>
}

function Section({ className = '', children }) {
  return <section className={classnames(maxWidthSections, `p-4`, className)}>{children}</section>
}

export { Container, Section }

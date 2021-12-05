import React from 'react'
import classnames from 'classnames'
import Menu from './menu/menu'
import { Container } from './designSystem/layout'
import { maxWidthSections } from './designSystem/theme'

const Header = function () {
  return (
    <Container className="shadow-md mb-4">
      <header className={classnames(maxWidthSections, `flex align-items justify-between`)}>
        <Menu />
      </header>
    </Container>
  )
}

export default Header

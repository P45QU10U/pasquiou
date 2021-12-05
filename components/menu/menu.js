import React from 'react'
import Link from 'next/link'
import MenuLi from './MenuLi'
import SvgMenuIcon from './SvgMenuIcon'

export const menuItems = [
  {
    title: 'Accueil',
    slug: '/',
  },
  // {
  //   title: 'Blog',
  //   slug: '/blog',
  // },
  {
    title: 'A propos',
    slug: '/a-propos',
  },
]

const Menu = function () {
  const [toggle, setToggle] = React.useState(false)
  const displayedMenu = !toggle ? 'hidden ' : ''

  function toggleMenu(e) {
    e.preventDefault()
    setToggle(!toggle)
  }

  return (
    <nav className="w-full">
      <div className="grid grid-cols-6 grid-rows-1 p-4">
        <h1 className="flex col-span-5 md:col-span-1 text-left text-4xl">
          <Link href="/">R.P.</Link>
        </h1>
        <button
          className="col-end-auto grid justify-items-end items-center md:hidden text-orange-600"
          type="button"
          onClick={(e) => toggleMenu(e)}
          aria-expanded={toggle}
          aria-controls="menu"
        >
          <SvgMenuIcon />
        </button>
        <ul
          id="menu"
          className={`${displayedMenu} mt-4 col-start-2 text-center col-span-4 md:col-span-5 md:flex md:flex-wrap md:flex-row md:justify-end md:items-end md:mr-4 `}
        >
          {menuItems.map((entr, index) => (
            <MenuLi key={`menu-${index}`}>
              <Link href={entr.slug}>{entr.title}</Link>
            </MenuLi>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Menu

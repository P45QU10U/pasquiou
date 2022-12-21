// import { render, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

// import Menu from '../menu'

// test('Menu opened when clicked and closed after an another click ', () => {
//   Object.defineProperty(window, 'innerWidth', {
//     writable: true,
//     configurable: true,
//     value: 500,
//   })
//   window.dispatchEvent(new Event('resize'))

//   const { container } = render(<Menu />)

//   expect(window.innerWidth).toBe(500)

//   const menuButton = container.querySelector('[aria-controls="menu"]')
//   const menu = container.querySelector('#menu')

//   fireEvent.click(menuButton)

//   expect(menu).not.toHaveClass('hidden')

//   fireEvent.click(menuButton)
//   expect(menu).toHaveClass('hidden')
// })

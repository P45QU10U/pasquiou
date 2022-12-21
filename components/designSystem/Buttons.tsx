import React from 'react'
import { buttonpurposes, buttonsizes } from './theme'

const Button = function (
  { 
    size, 
    type = 'button', 
    purpose, children, 
    onClick = null, 
    ...props 
  } : {
  size: string
  type: string,
  purpose: string
  children: React.ReactNode,
  onClick: any
}) {
  const classNames = `${buttonpurposes[purpose]} ${buttonsizes[size]}`

  return (

    onClick ? 
      // @ts-ignore
      <button type={type} onClick={onClick} className={classNames} {...props}>
        {children}
      </button>
      : 
      // @ts-ignore
      <button type={type} className={classNames} {...props}>
        {children}
      </button>
  )
}


export { Button }

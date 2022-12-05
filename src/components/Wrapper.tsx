import React, { Children } from 'react'
import { IPropsWrapper } from '../interfaces'
import '../styles/Wrapper.css'

export default function Wrapper({ children }: IPropsWrapper): JSX.Element {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}
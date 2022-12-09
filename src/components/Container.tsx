import React from 'react';
import { PropsContainer } from '../interfaces';
import '../styles/Container.css'

export default function Container({ children }: PropsContainer) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}
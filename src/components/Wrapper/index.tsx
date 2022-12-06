import React from 'react';
import { PropsWrapper } from '../../interfaces';
import './wrapper.css'

export default function Wrapper({ children }: PropsWrapper) {
  return (
    <section className='wrapper'>
      {children}
    </section>
  )
}
import React from 'react'
import './styles.css'

function App() {
  return (
    <div className='app'>
      <section className='gift'>
        <h1 className='gift-title'>Lista de regalos</h1>
        <ul className='gift-list'>
          <li className='gift-list__item'>Computadora</li>
          <li className='gift-list__item'>Teclado rgb 60%</li>
          <li className='gift-list__item'>Microfono profesional</li>
        </ul>
      </section>
    </div>
  )
}

export default App
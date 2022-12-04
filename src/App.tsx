import React from 'react'
import './styles.css'

function App() {
  const [list, setList] = React.useState([
    {
      id: 1,
      element: 'Computadora'
    },
    {
      id: 2,
      element: 'Teclado'
    },
    {
      id: 3,
      element: 'Mouse'
    }
  ]);
  const [item, setItem] = React.useState({
    id: new Date().getTime() + 10,
    element: ''
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    setList([...list, item])
  }

  function handleChange(e: any) {
    const { name, value } = e.currentTarget
    setItem({ ...item, [name]: value })
  }

  return (
    <div className='app'>
      <section className='gift'>
        <h1 className='gift-title'>Lista de regalos</h1>
        <form className='gift-form' onSubmit={handleSubmit}>
          <label className='gift-label' htmlFor="element">Agregar regalo:</label>
          <input className='gift-input' value={item.element} name='element' id='element' onChange={handleChange} type="text" placeholder='Escribe tu regalo' />
          <button className='gift-button' type="submit">Agregar</button>
        </form>
        <ul className='gift-list'>
          {list?.map((item) => (
            <li key={item.id} className='gift-list__item'>{item.element}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
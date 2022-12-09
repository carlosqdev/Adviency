import React, { useState } from 'react'
import { IGift } from '../interfaces'
import Container from './Container'
import Form from './Form'
import Lists from './Lists'
import '../styles/App.css'

function App() {
  const [gifts, setGifts] = useState<IGift[]>([])

  // add new gift
  const newGift = (gift: IGift) => {
    const giftDuplicated = gifts.filter(item => item.description === gift.description)

    if (giftDuplicated.length > 0) {
      alert(`Gift is duplicated`)
    } else {
      setGifts([...gifts, gift])
    }
  }
  // remove one gift
  const removeGift = (gift: IGift) => {
    const newList = gifts.filter((item) => item.idGift !== gift.idGift)
    setGifts(newList)
  }
  // remove all gifts
  const removeAll = () => {
    setGifts([])
  }

  return (
    <div className='app'>
      <Container>
        <Form newGift={newGift} />
        <Lists gifts={gifts} removeGift={removeGift} />
        <button className='app_button' onClick={removeAll} >Delete all</button>
      </Container>
    </div>
  )
}

export default App
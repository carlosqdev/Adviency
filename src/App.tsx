import React from 'react'

import Wrapper from './components/Wrapper'
import FormAddGift from './components/FormAddGift'
import ListGift from './components/ListGift'
import { IGift } from './interfaces'
import './styles.css'

function App() {
  const [listOfGift, setListOfGift] = React.useState<IGift[]>([])

  const addGift = (gift: IGift): void => {
    setListOfGift([...listOfGift, gift])
  }

  const removeGift = (idToFilter: string): void => {
    const newListOfGift = listOfGift.filter((gift) => gift.id !== idToFilter)
    setListOfGift(newListOfGift)
  }

  return (
    <div className='app'>
      <Wrapper>
        <FormAddGift addGift={addGift} />
        <ListGift listOfGift={listOfGift} removeGift={removeGift} />
      </Wrapper>
    </div>
  )
}

export default App
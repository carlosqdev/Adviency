import React from 'react'
import Form from '../Form';
import List from '../List';
import { IGift } from '../../interfaces';
import './app.css'
import Wrapper from '../Wrapper';

function App() {
  const [gifts, setGifts] = React.useState<IGift[]>([]);

  // Add new gift
  const newGift = (gift: IGift) => {
    setGifts([...gifts, gift]);
  }

  // Remove one gift
  const deleteGift = (gift: IGift) => {
    const newList = gifts.filter((item) => item.idGift !== gift.idGift);
    setGifts(newList);
  }

  // Remove all gifts
  const deleteAll = () => {
    setGifts([]);
  }

  return (
    <div className='app'>
      <Wrapper>
        <Form newGift={newGift} />
        <List gifts={gifts} deleteGift={deleteGift} />
        <button
          className='app_button'
          type='button'
          onClick={() => deleteAll()}>Delete all</button>
      </Wrapper>
    </div>
  )
}

export default App
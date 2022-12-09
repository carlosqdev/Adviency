import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import uuid from 'react-uuid'
import { IGift, PropsForm } from '../interfaces';
import '../styles/Form.css'

const INITIAL_STATE = { idGift: '', description: '', qty: 1 }

export default function Form({ newGift }: PropsForm) {
  const [gift, setGift] = useState<IGift>(INITIAL_STATE)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setGift({ ...gift, [name]: value, idGift: uuid() })
  }

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (gift.description.trim().length > 0) {
      newGift(gift)
      setGift(INITIAL_STATE)
    }
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form_div'>
        <label className='form_label' htmlFor="description">Description:</label>
        <input
          className='form_input'
          value={gift.description}
          onChange={handleOnChange}
          type="text"
          name="description"
          id='description'
          placeholder='Type your gift'
          required />
      </div>

      <div className='form_div'>
        <label className='form_label' htmlFor="qty">Quantity:</label>
        <input
          className='form_input'
          value={gift.qty}
          onChange={handleOnChange}
          type="number"
          name="qty"
          id='qty'
          placeholder='0'
          required />
      </div>
      <button className='form_button' type="submit">Add to list</button>
    </form>
  )
}
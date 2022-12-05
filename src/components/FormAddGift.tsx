import React, { ChangeEvent, SyntheticEvent } from 'react'
import uuid from 'react-uuid';
import "../styles/FormAddGift.css"
import { IGift, IPropsFormAddGift } from '../interfaces'


export default function FormAddGift({ addGift }: IPropsFormAddGift) {
  const initialState = {
    id: '',
    description: ''
  }

  const [gift, setGift] = React.useState<IGift>(initialState);

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault()
    addGift({ ...gift, id: uuid() })
    setGift(initialState)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setGift({ ...gift, description: e.target.value })
  }

  return (
    <form className='form-gift' onSubmit={handleSubmit}>
      <label className='form-label' htmlFor="description">Gift</label>
      <input
        className='form-control'
        value={gift.description}
        onChange={handleChange}
        type="text"
        name='description'
        id='description'
        placeholder='Type your gift'
        required />
      <button className='form-btn' type='submit'>Add</button>
    </form>
  )
}
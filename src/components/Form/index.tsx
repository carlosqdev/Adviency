import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import uuid from 'react-uuid';
import { IGift, PropsForm } from "../../interfaces";
import './form.css'

const initialState = {
  idGift: '',
  description: ''
}

export default function Form({ newGift }: PropsForm) {
  const [gift, setGift] = useState<IGift>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    setGift({ ...gift, [name]: value, idGift: uuid() });
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (gift.description.trim().length > 0) {
      newGift(gift);
      setGift(initialState);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form_label" htmlFor="description">Describe gift:</label>
      <input
        className="form_input"
        value={gift.description}
        onChange={handleChange}
        name="description"
        id="description"
        type="text"
        placeholder="Type your gift"
        required />
      <button className="form_button" type="submit">Add to list</button>
    </form>
  )
}
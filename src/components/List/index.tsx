import React from 'react';
import { PropsList } from '../../interfaces';
import "./list.css"

export default function List({ gifts, deleteGift }: PropsList) {
  return (
    <ul className='list'>
      {gifts.map((gift) => (
        <li className='list_item' key={gift.idGift}>
          <p className='list_text'>🎄 {gift.description}</p>
          <button className='list_button' type='button' onClick={() => deleteGift(gift)} >Delete</button>
        </li>
      ))}
    </ul >
  )
}
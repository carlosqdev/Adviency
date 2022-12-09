import React from 'react';
import { PropsLists } from '../interfaces';
import '../styles/Lists.css'

export default function Lists({ gifts, removeGift }: PropsLists) {
  return (
    <ul className='lists'>
      {gifts?.map((gift) => (
        <li className='lists_item' key={gift.idGift}>
          <p className='lists_text'>🎁 {gift.description}</p>
          <span className='list_text'>{gift.qty}</span>
          <button className='lists_button' onClick={() => removeGift(gift)} >❌ Delete</button>
        </li>
      ))}

      {!gifts.length && (
        <p className='lists_text text_center'>Your not have gifts, but you can add</p>
      )}
    </ul>
  )
}
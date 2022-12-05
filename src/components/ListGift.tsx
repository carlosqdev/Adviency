import React from "react"
import { IPropsListGift } from "../interfaces"
import '../styles/ListGift.css'

export default function ListGift({ listOfGift, removeGift }: IPropsListGift) {
  return (
    <ul className="list-gift">
      {listOfGift?.map((gift) => (
        <li className="gift" key={gift.id}>
          <p>{gift.description}</p>
          <button className="btn-remove" type="button" onClick={() => removeGift(gift.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}
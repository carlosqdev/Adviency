import React from 'react'

export interface IGift {
  id: string
  description: string
}

export interface IPropsListGift {
  listOfGift: IGift[]
  removeGift: (id: string) => void
}

export interface IPropsFormAddGift {
  addGift: (gift: IGift) => void
}

export interface IPropsWrapper {
  children: React.ReactNode
}
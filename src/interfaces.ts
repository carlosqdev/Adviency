import React from 'react';

export interface IGift {
  idGift: string;
  description: string;
  qty: number;
}

export interface PropsForm {
  newGift: (gift: IGift) => void
}

export interface PropsLists {
  gifts: IGift[]
  removeGift: (gift: IGift) => void
}

export interface PropsContainer {
  children: React.ReactNode
}
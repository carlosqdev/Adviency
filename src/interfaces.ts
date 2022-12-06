import React from "react";

export interface IGift {
  idGift: string;
  description: string;
}

export interface PropsForm {
  newGift: (gift: IGift) => void;
}

export interface PropsList {
  gifts: IGift[];
  deleteGift: (gift: IGift) => void;
}

export interface PropsWrapper {
  children: React.ReactNode
}
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardDictionary } from '../../interface/interfaces';

const initialState: CardDictionary = {
  ownerDict: {},
  cardDictList: [],
};

export const cardSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updateCardList: (state: CardDictionary, action: PayloadAction<CardDictionary>) => {
      state.ownerDict = action.payload.ownerDict;
      state.cardDictList = action.payload.cardDictList;
    },
  },
});

export const { updateCardList } = cardSlice.actions;

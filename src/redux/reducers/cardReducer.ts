import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UnclassifiedCardDictionary, ClassifiedCardDictionary, UpdateCardDict, PlayerHand, MinorAttr, OccupationAttr, CardType } from '../../interface/interfaces';

const initialState: ClassifiedCardDictionary = {
  majorDict: [],
  minorDict: [],
  occupationDict: [],
  ownerDict: [],
  playerHand: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    updateCardList: (state: ClassifiedCardDictionary, action: PayloadAction<UpdateCardDict>) => {
      state.ownerDict = action.payload.dict.ownerDict;
      state.majorDict = action.payload.dict.cardDict.filter((card) => card.cardType === 'MAJOR');
      state.minorDict = action.payload.dict.cardDict.filter((card) => card.cardType === 'MINOR');
      state.occupationDict = action.payload.dict.cardDict.filter((card) => card.cardType === 'OCCUPATION');
      state.playerHand = action.payload.dict.playerHand;
    },
  },
});

export const { updateCardList } = cardSlice.actions;

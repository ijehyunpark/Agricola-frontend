import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  roomMakeModal: boolean;
  roomJoinModal: boolean;
  majorCardModal: boolean;
  subCardModal: boolean;
  jobCardModal: boolean;
  gameStatusModal: boolean;
  resourceExchangeModal: boolean;
  foodSelectionModal: boolean;
  finalScoreModal: boolean;
}

interface ModalAction {
  type: string;
  payload: keyof ModalState;
}

const initialState: ModalState = {
  roomMakeModal: false,
  roomJoinModal: false,
  majorCardModal: false,
  subCardModal: false,
  jobCardModal: false,
  gameStatusModal: false,
  resourceExchangeModal: false,
  foodSelectionModal: false,
  finalScoreModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state: ModalState, action: ModalAction) {
      console.log(action.payload);
      state[action.payload] = true;
    },
    closeModal(state: ModalState, action: ModalAction) {
      state[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

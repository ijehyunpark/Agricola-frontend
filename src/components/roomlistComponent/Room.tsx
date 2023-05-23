import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/reducers/modalReducer';
import { RootState } from '../../redux/store';
import styled from 'styled-components';
import * as R from '../roomlistComponent/RoomComponent';
import RoomJoinModal from '../modalComponent/RoomJoinModal';

type Roomprops = {
  roomTitle: string;
  capacity: number;
  participantNumber: number;
  timeset: number;
};

function Room({ roomTitle, capacity, participantNumber, timeset = 60 }: Roomprops) {
  const isOpen = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  return (
    <>
      <R.Info onClick={() => dispatch(openModal('roomJoinModal'))}>
        <R.Roominfo>
          <R.Roomtitle>{roomTitle}</R.Roomtitle>
          <R.Joinplayer>{participantNumber}/4</R.Joinplayer>
        </R.Roominfo>
        <R.Timer>시간제한 : {timeset}초</R.Timer>
      </R.Info>
      {isOpen['roomJoinModal'] ? <RoomJoinModal roomTitle={roomTitle} timeset={timeset} /> : null}
    </>
  );
}
export default Room;

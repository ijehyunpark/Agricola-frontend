import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { openModal } from '../../redux/reducers/modalReducer';
import { incrementParticipant } from '../../redux/reducers/roomReducer';
import styled from 'styled-components';
import * as R from '../roomlistComponent/RoomComponent';
import * as M from './ModalComponent';

type Roomprops = {
  roomId: number;
  roomTitle: string;
  // capacity: number;
  timeset: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedRoomName: React.Dispatch<React.SetStateAction<string>>;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
};

function RoomJoinModal({ roomId, roomTitle, timeset, setIsOpen, setSelectedRoomName, setNickname }: Roomprops) {
  const dispatch = useDispatch();
  return (
    <M.ModalContainer>
      <M.ModalBg>
        <M.ModalCloseIcon
          src='img/etc/close1.svg'
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <M.RoomModalFrame>
          <R.MainContent>
            <div>
              <span>방 이름 : {roomTitle}</span>
            </div>
            <R.RoomNickname>
              <span>닉네임</span>
              <input
                id='username'
                type='text'
                placeholder='닉네임을 입력해주세요'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setNickname(e.target.value);
                }}
              />
            </R.RoomNickname>
            <R.JoinDiv>
              <button
                className='joinroom'
                onClick={() => {
                  setIsOpen(false);
                  setSelectedRoomName(roomTitle);
                  dispatch(openModal('waitingModal'));
                }}>
                입장하기
              </button>
            </R.JoinDiv>
          </R.MainContent>
        </M.RoomModalFrame>
      </M.ModalBg>
    </M.ModalContainer>
  );
}

export default RoomJoinModal;

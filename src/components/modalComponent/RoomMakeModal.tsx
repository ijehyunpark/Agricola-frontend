import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { openModal, closeModal } from '../../redux/reducers/modalReducer';
import { incrementParticipant, saveRoomInfo } from '../../redux/reducers/roomReducer';
import axios from 'axios';
import styled from 'styled-components';
import * as R from '../roomlistComponent/RoomComponent';
import * as M from './ModalComponent';

import URL from '../../socket/url';

interface RoomMakeModalProps {
  setSelectedRoomName: React.Dispatch<React.SetStateAction<string>>;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

function RoomMakeModal({ setSelectedRoomName, setNickname }: RoomMakeModalProps) {
  const [roomName, setRoomName] = useState<string>('');
  // const [actionTime, setActionTime] = useState<number>(60);

  const dispatch = useDispatch();

  const makeRoom = () => {
    try {
      const submit = async () => {
        await axios
          .post(
            `http://${URL}/rooms`,
            {
              name: roomName,
              capacity: 4,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            setSelectedRoomName(roomName);
          });
      };
      submit();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <M.Modal modalType='roomMakeModal'>
      <M.RoomModalFrame>
        <R.MainContent>
          <R.RoomName>
            <span>방 이름</span>
            <input
              id='name'
              type='text'
              placeholder='방 이름을 입력해주세요'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setRoomName(e.target.value);
              }}
            />
          </R.RoomName>
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
          <R.MakerDiv>
            <button
              onClick={() => {
                makeRoom();
                dispatch(closeModal('roomMakeModal'));
                dispatch(openModal('waitingModal'));
              }}>
              방 만들기
            </button>
          </R.MakerDiv>
        </R.MainContent>
      </M.RoomModalFrame>
    </M.Modal>
  );
}

export default RoomMakeModal;

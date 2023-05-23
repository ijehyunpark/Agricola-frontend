import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as R from '../roomlistComponent/RoomComponent';
import * as M from './ModalComponent';

function RoomMakeModal() {
  const [roomName, setRoomName] = useState<string>('');
  // const [actionTime, setActionTime] = useState<number>(60);
  // const [userName, setUserName] = useState<number>('Player');

  // axios.defaults.withCredentials = true;
  const makeRoom = () => {
    try {
      const submit = async () => {
        await axios.post(
          'http://20.214.216.185:8080/rooms',
          {
            name: roomName,
            capacity: 4,
          },
          {
            withCredentials: true,
          }
        );
      };
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <M.Modal modalType='roomMakeModal'>
      <M.RoomModalFrame>
        <R.Head>
          <h2>방 만들기</h2>
        </R.Head>
        <R.MainContent>
          <R.RoomName>
            <a>방 이름</a>
            <input
              id='name'
              type='text'
              placeholder='방 이름을 입력해주세요'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(roomName);
                setRoomName(e.target.value);
              }}></input>
          </R.RoomName>
          <R.RoomTimer>
            <a>행동 선택 가능시간</a>
            <select id='time' name='time'>
              <option value=''>골라</option>
              <option value='30초'>30초</option>
              <option value='60초'>60초</option>
              <option value='90초'>90초</option>
              <option value='120초'>120초</option>
            </select>
          </R.RoomTimer>
          <R.RoomNickname>
            <a>닉네임</a>
            <input id='username' type='text' placeholder='닉네임을 입력해주세요'></input>
          </R.RoomNickname>
          <R.MakerDiv>
            <button onClick={makeRoom}>방 만들기</button>
          </R.MakerDiv>
        </R.MainContent>
      </M.RoomModalFrame>
    </M.Modal>
  );
}

export default RoomMakeModal;

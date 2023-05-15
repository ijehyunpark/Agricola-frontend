import React, { useState } from 'react';
import RoomMake from './RoomMake';
import RoomJoin from './RoomJoin';
import Room from './Room';
import styled from 'styled-components';

export const Background = styled.div`
  width: 60vh;
  height: 100vh;
  border: 30px;
  margin: 0 auto;
  background-color: #eeeeee;
`;
export const MainHeader = styled.div`
  height: 100px;
  background-color: red;
`;
export const MainTitle = styled.h1`
  margin: 0;
  height: 50px;
  text-align: center;
  font-size: 50pt;
`;
export const MakeButton = styled.button`
  align-items: right;
`;

export const Roomlist = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200vh;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  justify-content: center;
  align-items: center;
`;

const RoomList = () => {
  const [roomMakeVisible, setRoomMakeVisible] = useState<boolean>(false);
  const [roomJoinVisible, setRoomJoinVisible] = useState<boolean>(false);

  const openRoomMake = () => {
    setRoomMakeVisible(true);
  };

  const openRoomJoin = () => {
    setRoomJoinVisible(true);
  };
  return (
    <Background>
      <MainHeader>
        <MainTitle>아그리콜라</MainTitle>
        <MakeButton onClick={openRoomMake}>방만들기</MakeButton>
      </MainHeader>
      <Roomlist>
        {/* 반복문 처리로 해야함*/}
        <Room roomTitle='방제목1' player={1} timeset={30} onClick={openRoomJoin}></Room>
      </Roomlist>
      {/* RoomMake 모달창 */}
      {roomMakeVisible && <RoomMake onClose={() => setRoomMakeVisible(false)} />}

      {/* RoomJoin 모달창 */}
      {roomJoinVisible && <RoomJoin onClose={() => setRoomJoinVisible(false)} />}
    </Background>
  );
};

export default RoomList;

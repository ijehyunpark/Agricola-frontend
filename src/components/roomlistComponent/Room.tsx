import React, { useState } from 'react';
import RoomJoin from './RoomJoin';
import styled from 'styled-components';

export const Info = styled.div`
  padding: 0px;
  margin: 2.5%;
  border: none;
  border-radius: 5px;
  height: 90px;
  width: 95%;
  background-color: #d9d9d9;
  &:hover {
    background: #a4a4a4;
  }
  &:active {
    background: #848484;
  }
`;
const Roominfo = styled.div`
  display: grid;
  border-bottom: 1px solid black;
  width: 100%;
  height: 60px;
  grid-template-columns: 80% 20%;
`;
const Roomtitle = styled.h2`
  padding: 1 15%;
  margin: auto 20px;
  font-size: 24px;
  text-align: left;
`;
const Joinplayer = styled.p`
  margin: auto 10%;
  font-size: 24px;
  text-align: center;
`;
const Timer = styled.p`
  margin: auto 20px;
  height: 30px;
  font-size: 15px;
  text-align: left;
  line-height: 180%;
`;
type Roomprops = {
  roomTitle: string;
  player: number;
  timeset: number;
  onClick: () => void;
};

function Room({ roomTitle, player, timeset, onClick }: Roomprops) {
  return (
    <>
      <Info>
        <Roominfo onClick={onClick}>
          <Roomtitle>{roomTitle}</Roomtitle>
          <Joinplayer>{player}/4</Joinplayer>
        </Roominfo>
        <Timer>시간제한 : {timeset}초</Timer>
      </Info>
    </>
  );
}
export default Room;

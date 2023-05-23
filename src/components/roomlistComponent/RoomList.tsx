import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { openModal } from '../../redux/reducers/modalReducer';

import styled from 'styled-components';
import axios from 'axios';

import RoomMakeModal from '../modalComponent/RoomMakeModal';
import Room from './Room';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 100vh;
  margin: 0 auto;
`;

const ListFrame = styled.div`
  width: 100%;
  height: 520px;
  border-radius: 5px;
  background-color: #eeeeee;
`;

const ListFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
`;

const MainHeader = styled.div`
  height: 160px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  background-color: #f99c35;
  background-image: url('img/etc/logo.svg');
  background-position: center;
  background-size: cover;
`;

const MakeRoomButton = styled.button`
  font-size: ${(props) => props.theme.fontSize.base};
  height: 40px;
`;

const Roomlist = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  place-items: center;
  padding: 10px;
`;
const ModalContainer = styled.div`
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

interface RoomListProps {
  greetingPublish: (gameRoomId: number, name: string) => void;
}

// function RoomList({ greetingPublish }: RoomListProps) {
function RoomList() {
  const isOpen = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  interface RoomList {
    id: number;
    name: string;
    capacity: number;
    participantNumber: number;
  }

  const [roomList, setRoomList] = useState<RoomList[]>([]);
  useEffect(() => {
    const getRoomList = () => {
      try {
        const fetchData = async () => {
          await axios
            .get('http://20.214.216.185:8080/rooms', {
              withCredentials: true,
            })
            .then((res) => {
              setRoomList(res.data);
            });
        };
        fetchData();
      } catch (err) {
        console.log(err);
      }
    };
    getRoomList();
  }, []);

  return (
    <Background>
      <ListFrame>
        <MainHeader
          onClick={() => {
            console.log(roomList);
          }}
        />

        <Roomlist>
          {/* 반복문 처리로 해야함*/}
          {roomList.length > 0 ? roomList.map((data, i) => <Room roomTitle={data.name} capacity={4} participantNumber={data.participantNumber} timeset={60} key={i} />) : null}
        </Roomlist>

        <ListFooter>
          <MakeRoomButton onClick={() => dispatch(openModal('roomMakeModal'))}>방만들기</MakeRoomButton>
        </ListFooter>
      </ListFrame>

      {isOpen['roomMakeModal'] ? <RoomMakeModal /> : null}
    </Background>
  );
}

export default RoomList;

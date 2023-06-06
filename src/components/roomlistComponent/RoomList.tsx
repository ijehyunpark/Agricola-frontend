import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { openModal } from '../../redux/reducers/modalReducer';
import * as R from '../roomlistComponent/RoomComponent';

import styled from 'styled-components';
import axios from 'axios';

import RoomMakeModal from '../modalComponent/RoomMakeModal';
import Room from './Room';
import RoomLoading from './RoomLoading';
import WaitingModal from '../modalComponent/WaitingModal';

interface RoomListProps {
  greetingPublish: (gameRoomId: number, name: string) => void;
  setIsFull: React.Dispatch<React.SetStateAction<boolean>>;
}

function RoomList({ greetingPublish, setIsFull }: RoomListProps) {
  const [roomList, setRoomList] = useState<RoomList[]>([]);
  const [selectedRoomName, setSelectedRoomName] = useState<string>('');
  const [nickName, setNickname] = useState<string>('player');
  const isOpen = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  interface RoomList {
    id: number;
    name: string;
    capacity: number;
    participantNumber: number;
  }

  useEffect(() => {
    const getRoomList = () => {
      try {
        const fetchData = async () => {
          await axios
            .get('http://20.214.76.230:8080/rooms', {
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
    const refresh = setInterval(getRoomList, 2000);
    return () => {
      clearInterval(refresh);
    };
  }, []);

  return (
    <R.Background>
      <R.ListFrame>
        <R.MainHeader />
        <R.ListBody>
          {roomList.length > 0 ? (
            <>
              <R.Roomlist>
                {roomList.map((data, i) => (
                  <Room roomId={data.id} roomTitle={data.name} capacity={4} participantNumber={data.participantNumber} timeset={60} setSelectedRoomName={setSelectedRoomName} setNickname={setNickname} key={i} />
                ))}
              </R.Roomlist>
            </>
          ) : (
            <RoomLoading />
          )}
          <R.ListFooter>
            <R.MakeRoomButton onClick={() => dispatch(openModal('roomMakeModal'))}>방만들기</R.MakeRoomButton>
          </R.ListFooter>
        </R.ListBody>
      </R.ListFrame>

      {isOpen['roomMakeModal'] ? <RoomMakeModal setSelectedRoomName={setSelectedRoomName} setNickname={setNickname} /> : null}
      {isOpen['waitingModal'] ? <WaitingModal greetingPublish={greetingPublish} selectedRoomName={selectedRoomName} nickName={nickName} setIsFull={setIsFull} /> : null}
    </R.Background>
  );
}

export default RoomList;

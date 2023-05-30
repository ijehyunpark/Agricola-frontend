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

interface RoomListProps {
  greetingPublish: (gameRoomId: number, name: string) => void;
}

function RoomList({ greetingPublish }: RoomListProps) {
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
            .get('http://20.214.69.254:8080/rooms', {
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
    const refresh = setInterval(getRoomList, 3000);
    return () => {
      clearInterval(refresh);
    };
  }, []);

  return (
    <R.Background>
      <R.ListFrame>
        <R.MainHeader />
        {roomList.length > 0 ? (
          <>
            <R.Roomlist>
              {roomList.map((data, i) => (
                <Room roomTitle={data.name} capacity={4} participantNumber={data.participantNumber} timeset={60} key={i} />
              ))}
            </R.Roomlist>

            <R.ListFooter>
              <R.MakeRoomButton onClick={() => dispatch(openModal('roomMakeModal'))}>방만들기</R.MakeRoomButton>
            </R.ListFooter>
          </>
        ) : (
          <RoomLoading />
        )}
      </R.ListFrame>

      {isOpen['roomMakeModal'] ? <RoomMakeModal /> : null}
    </R.Background>
  );
}

export default RoomList;

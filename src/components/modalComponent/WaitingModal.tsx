import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as M from './ModalComponent';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/reducers/modalReducer';
import { incrementParticipant, decrementParticipant, saveRoomInfo } from '../../redux/reducers/roomReducer';
import { RootState } from '../../redux/store';

import URL from '../../socket/url';

interface WaitingModalProps {
  greetingPublish: (gameRoomId: number, name: string) => void;
  selectedRoomName: string;
  nickName: string;
  setIsFull: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RoomData {
  id: number;
  name: string;
  capacity: number;
  participantNumber: number;
}

function WaitingModal({ greetingPublish, selectedRoomName, nickName, setIsFull }: WaitingModalProps) {
  // const [roomData, setRoomData] = useState<RoomData | undefined>(undefined);
  const dispatch = useDispatch();
  const roomInfo = useSelector((state: RootState) => state.room);

  useEffect(() => {
    if (roomInfo.id !== 0) {
      greetingPublish(roomInfo.id, nickName);
    }

    const getRoomList = () => {
      try {
        const fetchData = async () => {
          await axios
            .get(`http://${URL}/rooms`, {
              withCredentials: true,
            })
            .then((res) => {
              let filterdRoom = res.data.filter((e: RoomData) => e.name === selectedRoomName);
              dispatch(saveRoomInfo(filterdRoom[filterdRoom.length - 1]));
              if (roomInfo?.participantNumber === roomInfo?.capacity) {
                clearInterval(refresh);
                dispatch(closeModal('waitingModal'));
                setIsFull(true);
              }
            });
        };
        fetchData();
      } catch (err) {
        console.log(err);
      }
    };
    const refresh = setInterval(getRoomList, 1000);
    return () => {
      clearInterval(refresh);
    };
  }, [roomInfo, selectedRoomName, nickName, dispatch, setIsFull, greetingPublish]);
  return (
    <M.Modal modalType='waitingModal'>
      <M.RoomModalFrame>
        <M.AlignColumn>
          <span
            onClick={() => {
              console.log(roomInfo);
            }}>
            플레이어 모집중...
          </span>
          <img src='img/etc/matchingWaiting.svg' alt='' style={{ width: '100px', height: '100px' }} />
          {roomInfo.id !== 0 ? (
            <M.CountText>
              {roomInfo.participantNumber}/{roomInfo.capacity}
            </M.CountText>
          ) : (
            <img src='img/etc/spinner.svg' alt='' style={{ width: '25px', height: '25px' }} />
          )}
        </M.AlignColumn>
      </M.RoomModalFrame>
    </M.Modal>
  );
}

export default WaitingModal;

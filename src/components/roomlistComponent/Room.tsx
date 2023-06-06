import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { openModal } from '../../redux/reducers/modalReducer';
// import { RootState } from '../../redux/store';
import * as R from '../roomlistComponent/RoomComponent';
import RoomJoinModal from '../modalComponent/RoomJoinModal';

type Roomprops = {
  roomId: number;
  roomTitle: string;
  capacity: number;
  participantNumber: number;
  timeset: number;
  setSelectedRoomName: React.Dispatch<React.SetStateAction<string>>;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
};

function Room({ roomId, roomTitle, capacity, participantNumber, timeset = 60, setSelectedRoomName, setNickname }: Roomprops) {
  // const isOpen = useSelector((state: RootState) => state.modal);
  // const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <R.Info onClick={() => dispatch(openModal('roomJoinModal'))}> */}
      <R.Info onClick={() => setIsOpen(true)}>
        <R.Roominfo>
          <R.Roomtitle>{roomTitle}</R.Roomtitle>
          <R.Joinplayer>
            {participantNumber}/{capacity}
          </R.Joinplayer>
        </R.Roominfo>
        <R.Timer>시간제한 : {timeset}초</R.Timer>
      </R.Info>
      {/* {isOpen['roomJoinModal'] ? <RoomJoinModal roomTitle={roomTitle} timeset={timeset} /> : null} */}
      {isOpen ? <RoomJoinModal roomId={roomId} roomTitle={roomTitle} timeset={timeset} setIsOpen={setIsOpen} setSelectedRoomName={setSelectedRoomName} setNickname={setNickname} /> : null}
    </>
  );
}
export default Room;

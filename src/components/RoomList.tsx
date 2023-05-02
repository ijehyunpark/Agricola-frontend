import React from 'react';
import * as RoomInfo from './roomComponent/roomComponent';
function RoomList() {
  return(
    <RoomInfo.Background>
      <div className='title'>
      </div>
      <div className='roomList'> 
        <RoomInfo.Info>
          <div className='roomInfo'>
            <p className='title'>방제목</p>
            <p className='pp'>?/4</p>
          </div>
          <p className='timer'>시간제한 : ?초</p>
        </RoomInfo.Info>  

      </div>           
    </RoomInfo.Background>
  )
}

export default RoomList;

import React, { useEffect, useState } from 'react';
import './MainRoom.css'
import axios from 'axios';
function MainRoom() {

    const [roomList, setRoomList] = useState([]); // 현재 존재하는 gameRoom 리스트

    useEffect(() => {
        // 페이지가 로드될 때 한번 현재 gameRoom 리스트를 받습니다.
        getRoomList();
      },[]);

    const createRoomRequest = async() => {
        // 새로운 gameRoom 생성 요청을 보냅니다.
        try{
            await axios.post("/rooms", {"name" : "firstRooms~", "capacity" : 4});
        } catch (error) {
            console.log(error);
        } finally {
            console.log("createRoomRequest Execution");
            getRoomList(); // 생성 한 후 현재 gameRoom 리스트 state를 갱신합니다.
        }
    }

    const getRoomList = async() => {
        // 현재 존재하는 모든 gameRoom 리스트를 받는 요청을 보내고 이를 state에 저장합니다.
        let roomList = null;
        try{
            roomList = await axios.get("/rooms");
            console.log(roomList);
        } catch (error) {
            console.log(error);
        } finally {
            console.log("getRoomList Execution");
        }
        setRoomList(roomList['data']);
    }


    const Room = (idx, name, capacity) => {
        // name, capacity로 이루어진 Romm DOM 객체를 생성합니다.
        return (
            <div key={"Room" + idx} id={'Room'}>
                    <p id={'RoomName'}>{name}</p>
                    <div id={'CapacityContainer'}>
                        <p id={'Capacity'}>{capacity}</p>
                    </div>
            </div>
        );
    };

    return (
        <div id={`MainRoom`}>
            <div id={`MainFrame`}>
                <div id={`TitleAndDetail`}>
                    <p id={`Title`}>AGRICOLA</p>
                    <p id={`Detail`}>Select or Create Your Game Room~</p>
                </div>
                <div id={`RoomController`}>
                    <div id={`CreateRoomButton`} onClick={() => createRoomRequest()}>
                        <p id={`CreateRoom`}>Create Room</p>
                    </div>
                </div>

                <div id={`RoomList`}>
                    {roomList.map((comp) => (Room(comp['id'], comp['name'], comp['capacity'])))}
                </div>
            </div>
        </div>
    )
};

export default MainRoom;
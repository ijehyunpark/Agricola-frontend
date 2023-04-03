import React, { useEffect, useState } from 'react';
import './MainRoom.css'
import axios from 'axios';

import Modal from '../Utils/Modal';

function MainRoom({setMainPage, username, setUsername, setRoomNumber}) {

    const [roomList, setRoomList] = useState([]); // 현재 존재하는 gameRoom 리스트
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenCR, setIsModalOpenCR] = useState(false);

    useEffect(() => {
        // 페이지가 로드될 때 한번 현재 gameRoom 리스트를 받습니다.
        getRoomList();
      },[]);

    useEffect(() =>{
        if(username){
            setMainPage(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username])

    const createRoomRequest = async(roomName) => {
        // 새로운 gameRoom 생성 요청을 보냅니다.

        try{
            await axios.post("/rooms", {"name" : roomName, "capacity" : 4});
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

    const handleSubmit = (e) => {
        // 사용할 게스트 이름을 입력 받는다.
        e.preventDefault();
        setUsername(document.getElementById('username').value);
    };

    const handleSubmitCR = (e) => {
        // 사용할 방 이름을 입력 받는다.
        e.preventDefault();
        createRoomRequest(document.getElementById('roomName').value);
        setIsModalOpenCR(false);
    };

    const Room = (idx, name, capacity, participantNumber) => {
        // name, capacity로 이루어진 Romm DOM 객체를 생성합니다.
        return (
            <div>
                <div key={"Room" + idx} id={'Room'} onClick={() => {setIsModalOpen(true); setRoomNumber(idx);}}>
                        <p id={'RoomName'}>{name}</p>
                        <div id={'CapacityContainer'}>
                            <p id={'Capacity'}>{participantNumber + "/" + capacity}</p>
                        </div>
                </div>
            </div>
        );
    };

    return (
        <div id={`MainRoom`}>

            <Modal isOpen={isModalOpen}>
                <form onSubmit={handleSubmit}>
                    <h2>Enter the username to use.</h2>
                    <input type="text" id='username' />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={() =>  setIsModalOpen(false)}>Close Modal</button>
            </Modal>

            <Modal isOpen={isModalOpenCR}>
                <form onSubmit={handleSubmitCR}>
                    <h2>Enter Room Name.</h2>
                    <input type="text" id='roomName' />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={() =>  setIsModalOpenCR(false)}>Close Modal</button>
            </Modal>

            <div id={`MainFrame`}>
                <div id={`TitleAndDetail`}>
                    <p id={`Title`}>AGRICOLA</p>
                    <p id={`Detail`}>Select or Create Your Game Room~</p>
                </div>
                <div id={`RoomController`}>
                    <div id={`CreateRoomButton`} onClick={() => setIsModalOpenCR(true)}>
                        <p id={`CreateRoom`}>Create Room</p>
                    </div>
                </div>

                <div id={`RoomList`}>
                    {roomList.map((comp) => (Room(comp['id'], comp['name'], comp['capacity'], comp['participantNumber'])))}
                </div>
            </div>
        </div>
    )
};

export default MainRoom;
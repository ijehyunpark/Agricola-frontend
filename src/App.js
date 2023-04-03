import './App.css';
import ChatRoom from './components/ChatRoom/ChatRoom'
import { useState, useEffect } from 'react';
import MainRoom from './components/MainRoom/MainRoom';

function App() {
    const [isConnect, setConnect] = useState(false);
    const [username, setUsername] = useState(null);
    const [roomNumber, setRoomNumber] = useState(null);


    useEffect(() => {
        if (isConnect === false){
            setUsername(null);
            setRoomNumber(null);
        }
    },[isConnect])

    return (
        isConnect ? 
            <ChatRoom setConnect={setConnect} username={username} roomNumber={roomNumber}/> : 
            <MainRoom setConnect={setConnect} setUsername={setUsername} setRoomNumber={setRoomNumber} />
    )   
}

export default App;

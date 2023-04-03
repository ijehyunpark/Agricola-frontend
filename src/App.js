import './App.css';
import ChatRoom from './components/ChatRoom/ChatRoom'
import { useState, useRef } from 'react';
import MainRoom from './components/MainRoom/MainRoom';

function App() {
  const [isMainPage, setMainPage] = useState(true);
  const [username, setUsername] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const client = useRef(null);

  return (
      isMainPage ? 
          <MainRoom setMainPage={setMainPage} username ={username} setUsername={setUsername} setRoomNumber={setRoomNumber} /> : 
          <ChatRoom client={client} setMainPage={setMainPage} username={username} setUsername={setUsername} roomNumber={roomNumber}/>
  )   
}

export default App;

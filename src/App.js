import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatRoom from './ChatRoom/ChatRoom'
import { useState } from 'react';
import MainRoom from './MainRoom/MainRoom';

function App() {
  const [isMainPage, setMainPage] = useState(true);
  const [username, setUsername] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  return (
      isMainPage ? 
          <MainRoom setMainPage={setMainPage} username ={username} setUsername={setUsername} setRoomNumber={setRoomNumber}/> : 
          <ChatRoom setMainPage={setMainPage} username={username} setUsername={setUsername} roomNumber={roomNumber}/>
  )   
}

export default App;

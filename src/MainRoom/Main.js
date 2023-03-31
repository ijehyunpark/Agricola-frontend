import React, { useState } from 'react';
import MainRoom from './MainRoom';
import ChatRoom from '../ChatRoom/ChatRoom';

function Main() {
    const [isMainPage, setMainPage] = useState(true);
    const [username, setUsername] = useState("");

    return (
        isMainPage ? 
            <MainRoom setMainPage={setMainPage} username ={ username} setUsername={setUsername}/> : 
            <ChatRoom setMainPage={setMainPage} username={username} setUsername={setUsername}/>
    )   
};

export default Main;
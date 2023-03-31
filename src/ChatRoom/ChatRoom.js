import React from 'react';
import './ChatRoom.css'
function ChatRoom() {

    const Chatting = (idx, username, chat) => {
        // name, capacity로 이루어진 Romm DOM 객체를 생성합니다.
        return (
            <div id={`Chatting`}>
                <div id={`UserChatting`}>
                    <p>{chat}</p>
                </div>
                <div id={`UserProfile`}>
                    <p>{username}</p>
                </div>
            </div>
        );
    };

    return (
        <div id={`ChatRoom`}>
            <div id={`ChatRoomFrame`}>
                <div id={`LeftFrame`}>
                    <div id={`RoomContainer`}>
                        <div id={`BackButton`}>
                            <p id={`BackText`}>Back</p>
                        </div>
                        <div id={`RoomNameContainer`}>
                            <p id={`GameRoomName`}>Rooms</p>
                        </div>
                    </div>
                    <div id={`ChatFrame`}>
                        <div id={`ChatList`}>
                            {Chatting()}
                        </div>
                        <div id={`ChatContainer`}>
                            <div id={`ChatContent`}>
                            </div>
                            <div id={`SendButton`}>
                                <p id={`SendText`}>Send</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={`RightFrame`}>
                    <div id={`GameStartButton`}>
                        <p id={`GameStartText`}>Game Start</p>
                    </div>
                    <div id={`GameController`}>
                        <p id={`hello-world`}>hello world!</p>
                        <p id={`hello-world`}>hello world!</p>
                        <p id={`hello-world`}>hello world!</p>
                        <p id={`hello-world`}>hello world!</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ChatRoom;
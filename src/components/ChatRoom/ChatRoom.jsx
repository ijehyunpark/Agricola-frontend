import React, {useEffect, useRef, useState} from 'react';
import './ChatRoom.css'
import * as StompJS from '@stomp/stompjs';

function ChatRoom({username, setMainPage, setUsername, roomNumber}) {

    const client = useRef(null);
    const [messages, setMessages] = useState([]);
    const [lastMessage, setLastMessage] = useState(null);

    useEffect(() => {
        client.current = new StompJS.Client({
            brokerURL: 'ws://localhost:8080/agricola',
            debug: function (str) {
                console.log(str);
            },
            onConnect : () => {
                console.log("연결.....");
                greetings();
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });
        client.current.activate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const greetings = () => {
        if (!client.current.connected){
            console.log("연결 실패");
        }

        client.current.publish({
            destination: '/pub/greetings/' + roomNumber,
            body: username
        })

        client.current.subscribe('/sub/channel/' + roomNumber, (message) => {
            const messageId = JSON.parse(message.body).id;
            const type = JSON.parse(message.body).type;
            let content = "";
            
            if(type === "GREETING")
                content = "입장";
            else if (type === "LEAVE")
                content = "퇴장";
            else if (type === "DENIED"){
                setUsername("");
                setMainPage(true);
                return;
            } else{
                content = JSON.parse(message.body).content;
            }
            const sender = JSON.parse(message.body).sender;
                
            if (lastMessage === null || lastMessage !== messageId){
                setLastMessage(messageId);
                setMessages((messages) => [...messages, [messageId, sender, content]]);
            }
        }, { ack: 'client.individualAck' });
    };


    useEffect(() => {
        console.log(messages)
    }, [messages])

    const sendMessage = (message) => {
        if (!client.current.connected){
            console.log("연결 실패")
        }
    
        client.current.publish({
            destination: '/pub/send',
            body: message
        })
    }

    const backconnect = () => {
        client.current.deactivate();
        setMainPage(true);
        setUsername("");
    }

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
                            <p id={`BackText`} onClick={() => backconnect()}>Back</p>
                        </div>
                        <div id={`RoomNameContainer`}>
                            <p id={`GameRoomName`}>Rooms</p>
                        </div>
                    </div>
                    <div id={`ChatFrame`}>
                        <div id={`ChatList`}>
                            {messages.map((comp) => (Chatting(comp[0], comp[1], comp[2])))}
                        </div>
                        <div id={`ChatContainer`}>
                            <div id={`ChatContent`}>
                                <input type={"text"} id='NewChat'></input>
                            </div>
                            <div id={`SendButton`}>
                                <p id={`SendText`} onClick={() => sendMessage(document.getElementById('NewChat').value)}>Send</p>
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
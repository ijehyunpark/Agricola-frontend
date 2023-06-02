// StompWebsocket.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Client, IMessage, Stomp } from '@stomp/stompjs';
import RoomList from '../components/roomlistComponent/RoomList';
import GameScreen from '../components/gameScreen/GameScreen';

const SOCKET_URL = 'ws://20.214.220.69:8080/agricola';

export interface ActionProps {
  eventId: number;
  acts: {
    use: boolean;
    acts: number | null;
  }[];
}

export interface ExchangeProps {
  eventId: number;
  exchange: {
    improvementId: number;
    resource: {
      resource: number;
      count: number;
    };
    count: number;
  }[];
}

const Websocket = () => {
  const stompClientRef = useRef<Client | null>(null);
  const [messages, setMessages] = useState<string[] | null>([]);
  const [lastMessage, setLastMessage] = useState<string | null>(null);
  const [isFull, setIsFull] = useState<boolean>(false);

  useEffect(() => {
    stompClientRef.current = new Client({
      brokerURL: SOCKET_URL,
      debug: (str) => {
        console.log(str);
      },

      onConnect: () => {
        console.log('Connected to Stomp Websocket server');

        // stompClientRef.current?.subscribe('/topic/messages', (message: IMessage) => {
        //   console.log('Received message:', message);
        // });
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
    stompClientRef.current.activate();

    return () => {
      stompClientRef.current?.deactivate();
    };
  }, []);

  const greetingPublish = (gameRoomId: number, name: string) => {
    if (!stompClientRef.current || !stompClientRef.current.connected) {
      console.log('Stomp client not connected, cannot publish message');
      return;
    }

    // Publish a message
    stompClientRef.current.publish({
      destination: `/pub/greetings/${gameRoomId}`,
      body: name,
    });

    stompClientRef.current.subscribe(
      `/sub/channel/${gameRoomId}`,
      (message) => {
        // 여기서 게임 상태 받아서 redux쪽으로 넘겨줘서 업데이트 하면될듯
        const messageId = JSON.parse(message.body).id;
        const type = JSON.parse(message.body).type;
        let content = '';
        console.log('greetingpublish입니다.');
        console.log(JSON.parse(message.body));

        if (type === 'GREETING') content = '입장';
        else if (type === 'LEAVE') content = '퇴장';
        else if (type === 'DENIED') {
          // setConnect(false);
          return;
        } else {
          content = JSON.parse(message.body).content;
        }
        const sender = JSON.parse(message.body).sender;

        if (lastMessage === null || lastMessage !== messageId) {
          setLastMessage(messageId);
          setMessages((messages) => [messageId, sender, content]);
        }
      },
      { ack: 'client.individualAck' }
    );
  };

  const startGamePublish = (gameRoomId: number) => {
    if (!stompClientRef.current || !stompClientRef.current.connected) {
      console.log('Stomp client not connected, cannot publish message');
      return;
    }

    // Publish a message
    stompClientRef.current.publish({
      destination: `/pub/start-game/${gameRoomId}`,
    });
  };

  const actionPublish = (gameRoomId: number, ActionObj: ActionProps) => {
    if (!stompClientRef.current || !stompClientRef.current.connected) {
      console.log('Stomp client not connected, cannot publish message');
      return;
    }

    // Publish a message
    stompClientRef.current.publish({
      destination: `/pub/play-action/${gameRoomId}`,
      body: JSON.stringify({
        eventId: ActionObj.eventId,
        acts: [
          {
            use: ActionObj.acts[0].use,
            acts: ActionObj.acts[0].acts,
          },
        ],
      }),
    });
  };

  const exchangePublish = (gameRoomId: number, exchangeObj: ExchangeProps) => {
    if (!stompClientRef.current || !stompClientRef.current.connected) {
      console.log('Stomp client not connected, cannot publish message');
      return;
    }

    stompClientRef.current.publish({
      destination: `/pub/play-exchange/${gameRoomId}`,
      body: JSON.stringify({
        eventId: exchangeObj.eventId,
        exchange: {
          improvementId: exchangeObj.exchange[0].improvementId,
          resource: {
            resource: exchangeObj.exchange[0].resource.resource,
            count: exchangeObj.exchange[0].resource.count,
          },
          count: exchangeObj.exchange[0].count,
        },
      }),
    });
  };

  return <>{isFull ? <GameScreen startGamePublish={startGamePublish} actionPublish={actionPublish} exchangePublish={exchangePublish} /> : <RoomList greetingPublish={greetingPublish} setIsFull={setIsFull} />}</>;
};

export default Websocket;

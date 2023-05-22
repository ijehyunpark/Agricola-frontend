// StompWebsocket.tsx
import React, { useEffect, useRef } from 'react';
import { Client, IMessage, Stomp } from '@stomp/stompjs';

const SOCKET_URL = 'ws://20.196.241.203:8080/agricola';

interface SocketProps {
  gameRoomId: number;
}

const StompWebsocket = ({ gameRoomId }: SocketProps) => {
  const stompClientRef = useRef<Client | null>(null);

  useEffect(() => {
    stompClientRef.current = new Client({
      brokerURL: SOCKET_URL,
      debug: (str) => {
        console.log(str);
      },
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connected to Stomp Websocket server');

        stompClientRef.current?.subscribe('/topic/messages', (message: IMessage) => {
          console.log('Received message:', message);
        });
      },
    });
    stompClientRef.current.activate();

    return () => {
      stompClientRef.current?.deactivate();
    };
  }, []);

  const GreetingPublish = (name: string) => {
    if (!stompClientRef.current || !stompClientRef.current.connected) {
      console.log('Stomp client not connected, cannot publish message');
      return;
    }

    // Publish a message
    stompClientRef.current.publish({
      destination: `/pub/greetings/${gameRoomId}`,
      body: JSON.stringify({ username: name }),
    });
  };

  const StartGamePublish = () => {
    if (!stompClientRef.current || !stompClientRef.current.connected) {
      console.log('Stomp client not connected, cannot publish message');
      return;
    }

    // Publish a message
    stompClientRef.current.publish({
      destination: `/pub/start-game/${gameRoomId}`,
      //   body: JSON.stringify({ username: name }),
    });
  };

  interface ActionProps {
    eventId: number;
    acts: {
      use: boolean;
      acts: number | null;
    }[];
  }

  const ActionPublish = (ActionObj: ActionProps) => {
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

  interface ExchangeProps {
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

  const ExchangePublish = (exchangeObj: ExchangeProps) => {
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

  return (
    <div>
      <h2>React & TypeScript with StompJS Example</h2>
      {/* <button onClick={handlePublish}>Publish Message</button> */}
    </div>
  );
};

export default StompWebsocket;

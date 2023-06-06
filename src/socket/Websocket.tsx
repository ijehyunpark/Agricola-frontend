// StompWebsocket.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updatePlayersInfo } from '../redux/reducers/playerReducer';
import { updateGameState } from '../redux/reducers/gameStateReducer';
import { updateEventTile } from '../redux/reducers/eventTileReducer';
import { updateCardList } from '../redux/reducers/cardReducer';

import { Client, IMessage, Stomp } from '@stomp/stompjs';
import RoomList from '../components/roomlistComponent/RoomList';
import GameScreen from '../components/gameScreen/GameScreen';

import { ActionMessageProps, ExchangeMessageProps, GameMessage, Participant, GameState, Event, CardDictionary } from '../interface/interfaces';

const SOCKET_URL = 'ws://20.214.76.230:8080/agricola';

const Websocket = () => {
  const stompClientRef = useRef<Client | null>(null);
  const [userInfo, setUserInfo] = useState<Participant>({
    username: 'player',
    id: 0,
  });
  // const [messages, setMessages] = useState<string[] | null>([]);
  // const [lastMessage, setLastMessage] = useState<string | null>(null);
  const [isFull, setIsFull] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    stompClientRef.current = new Client({
      brokerURL: SOCKET_URL,
      debug: (str) => {
        console.log('debug: ' + str);
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
      console.log('stomp socket deactivate');
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

    stompClientRef.current.subscribe('/user/queue/message', (message) => {
      const response: Participant = JSON.parse(message.body);
      console.log('---------response---------');
      setUserInfo({ ...userInfo, ...response });
    });

    stompClientRef.current.subscribe(
      `/sub/channel/${gameRoomId}`,
      (message) => {
        // 여기서 게임 상태 받아서 redux쪽으로 넘겨줘서 업데이트 하면될듯
        const gameMessage: GameMessage = JSON.parse(message.body);
        const gameParticipant = gameMessage.participants;
        const gamePlayersInfo = gameMessage.game.players;
        const gameState = gameMessage.game.gameState;
        const events = gameMessage.game.events;
        const cardDict = gameMessage.game.cardDictionary;
        console.log(gameParticipant);
        console.log(gamePlayersInfo);
        console.log(gameState);
        console.log(events);
        console.log(cardDict);
        dispatch(
          updatePlayersInfo({
            myInfo: userInfo,
            participants: gameParticipant,
            players: gamePlayersInfo,
          })
        );
        dispatch(updateGameState(gameState));
        dispatch(updateEventTile(events));
        dispatch(updateCardList(cardDict));
      },
      { ack: 'client.individualAck' }
    );

    stompClientRef.current.subscribe('/sub/errors', (err) => {
      console.log(err.body);
    });
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

  const actionPublish = (gameRoomId: number, ActionObj: ActionMessageProps) => {
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

  const exchangePublish = (gameRoomId: number, exchangeObj: ExchangeMessageProps) => {
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

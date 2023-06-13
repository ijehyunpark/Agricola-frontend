import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import * as B from '../../BoardComponent';
import StackTile from '../StackTile';
import { RoundTileProps } from '../../../../interface/interfaces';
import { useSpring, a } from '@react-spring/web';

function SheepTile({ roomId, tileImgSrc, iconWidth, iconHeight, actionPublish, event, quantity, openRound }: RoundTileProps) {
  const playerId = useSelector((state: RootState) => state.player.myInfo.id);
  const gameState = useSelector((state: RootState) => state.gameState);
  const [flipped, setFlip] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(300px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 300, friction: 80 },
  });

  useEffect(() => {
    if (openRound === gameState.round) {
      setFlip(true);
    }
  }, [gameState.round, openRound]);

  const getResource = () => {
    if (playerId !== gameState.playerId) {
      return;
    }
    const message = {
      eventId: event?.id,
      acts: [
        {
          use: true,
          acts: null,
        },
      ],
    };
    actionPublish(roomId, message);
  };
  return (
    <>
      <B.FlipTile onClick={getResource}>
        <a.div
          style={{
            opacity,
            transform,
            rotateY: '180deg',
          }}>
          <B.TileContentWrapper>
            <B.TileName>{event?.name}</B.TileName>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>{quantity}</span>
              <B.Icon src={`img/${tileImgSrc}.svg`} width={iconWidth} height={iconHeight} />
            </div>
            <B.StackPlace>
              {Array(event?.stacks[0]?.count)
                .fill(null)
                .map((_, i) => (
                  <B.StackResource src={`img/${tileImgSrc}.svg`} left={i} key={i} />
                ))}
              <B.StackCount>{event?.stacks[0]?.count}</B.StackCount>
            </B.StackPlace>
          </B.TileContentWrapper>
        </a.div>
      </B.FlipTile>
      <B.FlipTile>
        <a.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
          <B.TileBack>라운드 {openRound}</B.TileBack>
        </a.div>
      </B.FlipTile>
    </>
  );
}

export default React.memo(SheepTile);

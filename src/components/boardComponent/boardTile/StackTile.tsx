import React, { useState } from 'react';
import { TileProps } from '../../../interface/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import * as B from '../BoardComponent';

function StackTile({ roomId, tileImgSrc, iconWidth, iconHeight, actionPublish, event, quantity }: TileProps) {
  const playerId = useSelector((state: RootState) => state.player.myInfo.id);
  const currentTurnId = useSelector((state: RootState) => state.gameState.playerId);

  const getResource = () => {
    if (playerId !== currentTurnId) {
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
    <B.Tile onClick={getResource}>
      <B.TileContentWrapper>
        <B.TileName>{event?.name}</B.TileName>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>{quantity}</span>
          <B.Icon src={`img/${tileImgSrc}.svg`} width={iconWidth} height={iconHeight} />
        </div>
        <B.StackPlace>
          {event?.stacks[0]?.count !== undefined && event.stacks[0].count > 0
            ? Array(event?.stacks[0]?.count)
                .fill(null)
                .map((_, i) => <B.StackResource src={`img/${tileImgSrc}.svg`} left={i} key={i} />)
            : null}
          <B.StackCount>{event?.stacks[0]?.count}</B.StackCount>
        </B.StackPlace>
      </B.TileContentWrapper>
    </B.Tile>
  );
}

export default StackTile;

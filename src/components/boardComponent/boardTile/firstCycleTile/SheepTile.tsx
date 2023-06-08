import React from 'react';
import StackTile from '../StackTile';
import { TileProps } from '../../../../interface/interfaces';

function SheepTile({ roomId, tileImgSrc, iconWidth, iconHeight, actionPublish, event, quantity }: TileProps) {
  return <StackTile roomId={roomId} tileImgSrc={tileImgSrc} iconWidth={iconWidth} iconHeight={iconHeight} actionPublish={actionPublish} event={event} quantity={quantity} />;
}

export default SheepTile;

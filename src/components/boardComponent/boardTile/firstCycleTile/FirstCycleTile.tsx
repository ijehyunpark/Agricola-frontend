import React from 'react';
import { RoundTileProps } from '../../../../interface/interfaces';
import SheepTile from './SheepTile';
import FenceMakingTile from './FenceMakingTile';
import EquipmentTile from './EquipmentTile';
import GrainUseTile from './GrainUseTile';

function FirstCycleTile({ roomId, actionPublish, event, openRound }: RoundTileProps) {
  switch (event?.actions[0].actionType) {
    case 'STACK':
      return <SheepTile roomId={roomId} tileImgSrc={'animal/sheep'} iconWidth={'36px'} iconHeight={'36px'} actionPublish={actionPublish} event={event} quantity={'1'} />;
    case 'BUILD_FENCE':
      return {};
    case 'PLACE':
      return {};
    case 'CULTIVATION':
      return {};
    default:
      return null;
  }
}

export default FirstCycleTile;

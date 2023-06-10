import React from 'react';
import * as B from '../../BoardComponent';
import { RoundTileProps, CycleTileProps } from '../../../../interface/interfaces';
import SheepTile from './SheepTile';
import FenceMakingTile from './FenceMakingTile';
import EquipmentTile from './EquipmentTile';
import GrainUseTile from './GrainUseTile';

import DummyTile from '../DummyTile';

function FirstCycleTile({ roomId, actionPublish, event, openRound }: CycleTileProps) {
  switch (event?.name) {
    case '양 시장':
      return <SheepTile roomId={roomId} tileImgSrc={'animal/sheep'} iconWidth={'36px'} iconHeight={'36px'} actionPublish={actionPublish} event={event} quantity={'1'} openRound={openRound} />;
    case '울타리':
      return <DummyTile name={'울타리'} src={'tile/makeFence'} iconWidth={'96px'} iconHeight={'60px'} />;
    case '설비':
      return <EquipmentTile openRound={openRound} />;
    case '곡식 활용':
      return <DummyTile name={'곡식 활용'} src={'tile/grain_bread'} iconWidth={'120px'} iconHeight={'132px'} />;
    default:
      return <B.TileBack>라운드 {openRound}</B.TileBack>;
  }
}

export default FirstCycleTile;

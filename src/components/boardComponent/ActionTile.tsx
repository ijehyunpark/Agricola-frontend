import React, { useState } from 'react';
import * as B from './BoardComponent';
import { useSpring, a } from '@react-spring/web';

// 추후 변경 예정
interface InitialTileProps {
  actionName: string;
  actionType: string;
  iconWidth?: string;
  iconHeight?: string;
}

interface RoundTileProps {
  actionName: string;
  actionType: string;
  round?: number | string;
}

export function InitialActionTile({ actionName, actionType, iconWidth, iconHeight }: InitialTileProps) {
  return (
    <B.Tile>
      <B.TileContentWrapper>
        <B.TileName>{actionName}</B.TileName>
        {/* <B.ResourceText>{actionType}</B.ResourceText> */}
        <B.Icon src={`img/${actionType}.svg`} width={iconWidth} height={iconHeight} />
      </B.TileContentWrapper>
    </B.Tile>
  );
}

export function RoundActionTile({ actionName, actionType }: RoundTileProps) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <B.Tile onClick={() => set((state) => !state)}>
      <a.div style={{ opacity: opacity.to((value) => 1 - value), transform }}>
        <B.Tile>
          <B.TileName></B.TileName>
        </B.Tile>
      </a.div>
      <a.div style={{ opacity, transform, rotateY: '180deg' }}>
        <div>spring test</div>
      </a.div>
    </B.Tile>
  );
}

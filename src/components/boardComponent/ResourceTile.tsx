import React, { useState } from 'react';
import * as B from './BoardComponent';
import { useSpring, a } from '@react-spring/web';

// 추후 변경 예정
interface Props {
  resourceName: string;
  resourceType: string;
  numOfResource: number | string;
}

export function InitialResourceTile({ ...props }: Props) {
  return (
    <B.Tile>
      <B.TileContentWrapper>
        <B.TileName>{props.resourceName}</B.TileName>
        {/* <B.ResourceText>{props.resourceType}</B.ResourceText> */}
        <span>{props.numOfResource}</span>
        <B.Icon src={`img/${props.resourceType}.svg`} />
      </B.TileContentWrapper>
    </B.Tile>
  );
}

export function RoundResourceTile({ ...props }: Props) {
  const [flipped, setFlip] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(300px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 300, friction: 80 },
  });
  return (
    <>
      <B.FlipTile onClick={() => setFlip((state) => !state)}>
        <a.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
          <B.TileContentWrapper>
            <B.TileName>{props.resourceName}</B.TileName>
            {/* <B.ResourceText>{props.resourceType}</B.ResourceText> */}
            <span>{props.numOfResource}</span>
            <B.Icon src={`img/${props.resourceType}.svg`} />
          </B.TileContentWrapper>
        </a.div>
      </B.FlipTile>
      <B.FlipTile onClick={() => setFlip((state) => !state)}>
        <a.div
          style={{
            opacity,
            transform,
            rotateY: '180deg',
          }}>
          <B.TileBack>
            {/* <B.TileName>라운드 1</B.TileName> */}
            라운드 1
          </B.TileBack>
        </a.div>
      </B.FlipTile>
    </>
  );
}

import React from 'react';
import * as B from './BoardComponent';

// 추후 변경 예정
interface Props {
  resourceName: string;
  resourceType: string;
  numOfResource: number | string;
}

export function InitialResourceTile({ ...props }: Props) {
  return (
    <B.HalfTile>
      <B.TileContentWrapper>
        <B.TileName>{props.resourceName}</B.TileName>
        {/* <B.ResourceText>{props.resourceType}</B.ResourceText> */}
        <span>{props.numOfResource}</span>
        <B.Icon src={`img/${props.resourceType}.svg`} />
      </B.TileContentWrapper>
    </B.HalfTile>
  );
}

export function RoundResourceTile({ ...props }: Props) {
  return (
    <B.FullTile>
      {/* <B.TileName>{props.resourceName}</B.TileName> */}
      {/* <B.ResourceText>{props.resourceType}</B.ResourceText> */}
    </B.FullTile>
  );
}

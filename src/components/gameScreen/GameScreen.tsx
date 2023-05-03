import React from 'react';
import * as B from '../boardComponent/BoardComponent';
import GridLayout from 'react-grid-layout';
import { grid } from './Grid';

function GameScreen() {
  const marginTuple: [number, number] = [0, 0];
  const GridLayoutProps = {
    cols: 11,
    rowHeight: 72,
    width: 1500,
    isDraggable: false,
    isResizable: false,
    autoSize: true,
    margin: marginTuple,
  };

  return (
    <B.Background>
      <GridLayout className='layout' layout={grid} {...GridLayoutProps}>
        {grid.map((_, n) => (
          <B.Tile key={n}>{n}</B.Tile>
        ))}
        {/* <B.Tile key='1'>1</B.Tile>
        <B.Tile key='2'>2</B.Tile>
        <B.Tile key='3'>3</B.Tile>
        <B.Tile key='4'>4</B.Tile>
        <B.Tile key='5'>5</B.Tile>
        <B.Tile key='6'>6</B.Tile>
        <B.Tile key='7'>7</B.Tile>
        <B.Tile key='8'>8</B.Tile>
        <B.Tile key='9'>9</B.Tile>
        <B.Tile key='10'>10</B.Tile> */}
      </GridLayout>
    </B.Background>
  );
}

export default GameScreen;

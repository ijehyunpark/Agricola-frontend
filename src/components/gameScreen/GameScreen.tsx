import React, { useState } from 'react';
import * as B from '../boardComponent/BoardComponent';
import * as M from '../modalComponent/ModalComponent';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import { gridXLg, gridLg } from './Grid';

import { InitialResourceTile, RoundResourceTile } from '../boardComponent/ResourceTile';
import { InitialActionTile, RoundActionTile } from '../boardComponent/ActionTile';
import CardBtns from '../boardComponent/CardBtns';
import StartBtns from '../boardComponent/Startbtns';
import PlayerStatus from '../sideComponent/PlayerStatus';

import ModalController from '../modalComponent/ModalController';

import { HomeArea } from '../boardComponent/HomeTile';
import { JobArea } from '../boardComponent/JobTile';

function GameScreen() {
  const marginTuple: [number, number] = [0, 0];
  // const ResponsiveGridLayoutProps = {
  //   cols: { xlg: 11, lg: 11, md: 11, sm: 11, xs: 11, xxs: 11 },
  //   breakpoints: { xlg: 1600, lg: 1200, md: 992, sm: 768, xs: 480, xxs: 0 },
  //   rowHeight: 72,
  //   isDraggable: false,
  //   isResizable: false,
  //   autoSize: true,
  //   margin: marginTuple,
  // };

  const GridLayoutProps = {
    cols: 11,
    rowHeight: 72,
    width: 1500,
    isDraggable: false,
    isResizable: false,
    autoSize: true,
    margin: marginTuple,
  };

  // const ResponsiveGridLayout = WidthProvider(Responsive);

  return (
    <B.Background>
      <B.BoardFrame>
        {/* <StartBtns /> */}
        <GridLayout className='layout' layout={gridLg} {...GridLayoutProps}>
          {/* row1 */}
          <B.TileFrame key='bush_forest'>
            <InitialResourceTile resourceName={'덤불'} resourceType={'resource/wood'} numOfResource={1} />
            <InitialResourceTile resourceName={'수풀'} resourceType={'resource/wood'} numOfResource={2} />
          </B.TileFrame>
          <B.TileFrame key='roomExtend_meeting'>
            <InitialActionTile actionName={'농장확장'} actionType={'농장확장'} />
            <InitialActionTile actionName={'회합장소'} actionType={'회합장소'} />
          </B.TileFrame>
          <B.TileFrame key='round1'>
            <RoundResourceTile resourceName={'양'} resourceType={'animal/sheep'} numOfResource={1} />
          </B.TileFrame>
          <B.TileFrame key='round2'>3</B.TileFrame>
          <B.TileFrame key='round5'>4</B.TileFrame>
          <B.TileFrame key='round8'>5</B.TileFrame>
          <B.TileFrame key='round10'>6</B.TileFrame>
          <B.TileFrame key='round12'>7</B.TileFrame>
          <B.TileFrame key='round14'>8</B.TileFrame>

          {/* profile & timer & scoreboard */}
          <B.TileFrame key='rightSide'>
            <PlayerStatus />
          </B.TileFrame>

          {/* row2 */}
          <B.TileFrame key='resource_clay'>
            <InitialResourceTile resourceName={'자원시장'} resourceType={'resource/wood'} numOfResource={1} />
            <InitialResourceTile resourceName={'점토 채굴장'} resourceType={'resource/clay'} numOfResource={2} />
          </B.TileFrame>
          <B.TileFrame key='seed_farm'>
            <InitialResourceTile resourceName={'곡식종자'} resourceType={'resource/cropSeed'} numOfResource={1} />
            <InitialActionTile actionName={'농지'} actionType={'tile/farm'} />
          </B.TileFrame>
          <B.TileFrame key='forest2_soil'>
            <InitialResourceTile resourceName={'숲'} resourceType={'resource/wood'} numOfResource={3} />
            <InitialResourceTile resourceName={'흙 채굴장'} resourceType={'resource/clay'} numOfResource={1} />
          </B.TileFrame>
          <B.TileFrame key='round3'>13</B.TileFrame>
          <B.TileFrame key='round6'>14</B.TileFrame>
          <B.TileFrame key='round9'>15</B.TileFrame>
          <B.TileFrame key='round11'>16</B.TileFrame>
          <B.TileFrame key='round13'>17</B.TileFrame>
          <B.TileFrame key='cardBtns'>
            <CardBtns />
          </B.TileFrame>

          {/* row3 */}
          <B.TileFrame key='train2_theater'>
            <InitialResourceTile resourceName={'유랑극단'} resourceType={'resource/food'} numOfResource={1} />
            <InitialActionTile actionName={'교습2'} actionType={'card/jobCard'} />
          </B.TileFrame>
          <B.TileFrame key='work_train1'>
            <InitialResourceTile resourceName={'날품팔이'} resourceType={'resource/food'} numOfResource={2} />
            <InitialActionTile actionName={'교습1'} actionType={'card/jobCard'} />
          </B.TileFrame>
          <B.TileFrame key='reed_fishing'>
            <InitialResourceTile resourceName={'갈대'} resourceType={'resource/reed'} numOfResource={1} />
            <InitialResourceTile resourceName={'낚시'} resourceType={'resource/food'} numOfResource={1} />
          </B.TileFrame>
          <B.TileFrame key='round4'>22</B.TileFrame>
          <B.TileFrame key='round7'>23</B.TileFrame>

          {/* playerBoard */}
          <B.TileFrame key='playerBoard'>
            <HomeArea></HomeArea>
          </B.TileFrame>

          {/* active card list */}
          <B.TileFrame key='activeCardList'>
            <JobArea></JobArea>
          </B.TileFrame>
        </GridLayout>
      </B.BoardFrame>
      <ModalController />
    </B.Background>
  );
}

export default GameScreen;

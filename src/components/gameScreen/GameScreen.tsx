import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveRoomInfo } from '../../redux/reducers/roomReducer';
import { RootState } from '../../redux/store';
import * as B from '../boardComponent/BoardComponent';
import * as M from '../modalComponent/ModalComponent';
import BasicTile from '../boardComponent/boardTile/BasicTile';
import StackTile from '../boardComponent/boardTile/StackTile';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import { gridXLg, gridLg } from './Grid';

import { InitialResourceTile, RoundResourceTile } from '../boardComponent/ResourceTile';
import { InitialActionTile, RoundActionTile } from '../boardComponent/ActionTile';
import CardBtns from '../boardComponent/CardBtns';
import PlayerStatus from '../sideComponent/PlayerStatus';

import InGameModalController from '../modalComponent/InGameModalController';

import { HomeArea } from '../boardComponent/HomeTile';
import { JobArea } from '../boardComponent/JobTile';

import { GameScreenProps, Event, FindEventWithId } from '../../interface/interfaces';

function GameScreen({ startGamePublish, actionPublish, exchangePublish }: GameScreenProps) {
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

  const dispatch = useDispatch();
  const roomInfo = useSelector((state: RootState) => state.room);
  const players = useSelector((state: RootState) => state.player);
  const gameState = useSelector((state: RootState) => state.gameState);
  const events = useSelector((state: RootState) => state.event);
  const cardDict = useSelector((state: RootState) => state.card);

  // 디버깅용 함수
  const printReducerState = () => {
    console.log('-----roomInfo-----');
    console.log(roomInfo);
    console.log('------players----');
    console.log(players);
    console.log('------gameState----');
    console.log(gameState);
    console.log('-----events-----');
    console.log(events);
    console.log('-----cardDict-----');
    console.log(cardDict);
  };
  useEffect(() => {
    startGamePublish(roomInfo.id);
  }, []);

  const findEventWithId: FindEventWithId = (events, targetId) => {
    return events.events.find((event) => event.id === targetId);
  };

  return (
    <B.Background>
      <B.BoardFrame>
        {/* <StartBtns /> */}
        <GridLayout className='layout' layout={gridLg} {...GridLayoutProps}>
          {/* row1 */}
          <B.TileFrame key='bush_forest'>
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/wood'} actionPublish={actionPublish} event={findEventWithId(events, 25)} quantity={'1'} />
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/wood'} actionPublish={actionPublish} event={findEventWithId(events, 26)} quantity={'2'} />
          </B.TileFrame>
          <B.TileFrame key='roomExtend_meeting'>
            <InitialActionTile actionName={'농장확장'} actionType={'tile/extend'} iconWidth={'120px'} iconHeight={'60px'} />
            <InitialActionTile actionName={'회합장소'} actionType={'tile/groupPlace'} iconWidth={'96px'} iconHeight={'40px'} />
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

          {/* row2 */}
          <B.TileFrame key='resource_clay'>
            <BasicTile roomId={roomInfo.id} tileImgSrc={'tile/resourceMart'} actionPublish={actionPublish} event={findEventWithId(events, 27)} iconWidth={'72px'} iconHeight={'48px'} />
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/clay'} actionPublish={actionPublish} event={findEventWithId(events, 28)} quantity={'2'} />
          </B.TileFrame>
          <B.TileFrame key='seed_farm'>
            <BasicTile roomId={roomInfo.id} tileImgSrc={'resource/grain'} actionPublish={actionPublish} event={findEventWithId(events, 3)} quantity={'+1'} />
            <InitialActionTile actionName={'농지'} actionType={'tile/farm'} />
          </B.TileFrame>
          <B.TileFrame key='forest2_soil'>
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/wood'} actionPublish={actionPublish} event={findEventWithId(events, 7)} quantity={'3'} />
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/clay'} actionPublish={actionPublish} event={findEventWithId(events, 8)} quantity={'1'} />
          </B.TileFrame>
          <B.TileFrame key='round3'>13</B.TileFrame>
          <B.TileFrame key='round6'>14</B.TileFrame>
          <B.TileFrame key='round9'>15</B.TileFrame>
          <B.TileFrame key='round11'>16</B.TileFrame>
          <B.TileFrame key='round13'>17</B.TileFrame>
          <B.TileFrame key='cardBtns'>
            <CardBtns />
            <button onClick={printReducerState}>디버깅</button>
          </B.TileFrame>

          {/* row3 */}
          <B.TileFrame key='train2_theater'>
            <InitialActionTile actionName={'교습2'} actionType={'tile/teaching2'} iconWidth={'80px'} iconHeight={'54px'} />
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/food'} actionPublish={actionPublish} event={findEventWithId(events, 30)} quantity={'1'} />
          </B.TileFrame>
          <B.TileFrame key='work_train1'>
            <InitialActionTile actionName={'교습1'} actionType={'tile/teaching1'} iconWidth={'80px'} iconHeight={'54px'} />
            <BasicTile roomId={roomInfo.id} tileImgSrc={'resource/food'} actionPublish={actionPublish} event={findEventWithId(events, 6)} quantity={'+2'} />
          </B.TileFrame>
          <B.TileFrame key='reed_fishing'>
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/reed'} actionPublish={actionPublish} event={findEventWithId(events, 9)} quantity={'1'} />
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/food'} actionPublish={actionPublish} event={findEventWithId(events, 10)} quantity={'1'} />
          </B.TileFrame>
          <B.TileFrame key='round4'>22</B.TileFrame>
          <B.TileFrame key='round7'>23</B.TileFrame>

          {/* playerBoard */}
          <B.TileFrame key='playerBoard'>
            <HomeArea />
          </B.TileFrame>

          {/* active card list */}
          <B.TileFrame key='activeCardList'>
            <JobArea />
          </B.TileFrame>

          {/* profile & timer & scoreboard */}
          <B.TileFrame key='rightSide'>
            <PlayerStatus />
          </B.TileFrame>
        </GridLayout>
      </B.BoardFrame>
      <InGameModalController />
    </B.Background>
  );
}

export default GameScreen;

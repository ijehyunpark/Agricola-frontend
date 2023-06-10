import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { saveRoomInfo } from '../../redux/reducers/roomReducer';
import * as B from '../boardComponent/BoardComponent';
import * as M from '../modalComponent/ModalComponent';
import BasicTile from '../boardComponent/boardTile/BasicTile';
import StackTile from '../boardComponent/boardTile/StackTile';
import PlaceTile from '../boardComponent/boardTile/PlaceTile';

import FirstCycleTile from '../boardComponent/boardTile/firstCycleTile/FirstCycleTile';

import DummyTile from '../boardComponent/boardTile/DummyTile';
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout';
import { gridXLg, gridLg } from './Grid';

import CardBtns from '../boardComponent/CardBtns';
import PlayerStatus from '../sideComponent/PlayerStatus';

import InGameModalController from '../modalComponent/InGameModalController';

import { HomeArea } from '../boardComponent/HomeTile';
import JobArea from '../boardComponent/JobArea';

import { GameScreenProps, Event, FindEventWithId, FindEventWithRound } from '../../interface/interfaces';

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

  const findEventWithRound: FindEventWithRound = (events, targetRound) => {
    return events.events.find((event) => event.round === targetRound);
  };

  return (
    <B.Background>
      <B.BoardFrame>
        <GridLayout className='layout' layout={gridLg} {...GridLayoutProps}>
          {/* row1 */}
          <B.TileFrame key='bush_forest'>
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/wood'} actionPublish={actionPublish} event={findEventWithId(events, 25)} quantity={'1'} />
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/wood'} actionPublish={actionPublish} event={findEventWithId(events, 26)} quantity={'2'} />
          </B.TileFrame>
          <B.TileFrame key='roomExtend_meeting'>
            <DummyTile name={'농장확장'} src={'tile/extend'} iconWidth={'48px'} iconHeight={'48px'} />
            <DummyTile name={'회합장소'} src={'tile/groupPlace'} iconWidth={'96px'} iconHeight={'40px'} />
          </B.TileFrame>
          <B.TileFrame key='round1'>
            <FirstCycleTile roomId={roomInfo.id} actionPublish={actionPublish} event={findEventWithRound(events, 1)} openRound={1} />
          </B.TileFrame>
          <B.TileFrame key='round2'>
            <FirstCycleTile roomId={roomInfo.id} actionPublish={actionPublish} event={findEventWithRound(events, 2)} openRound={2} />
          </B.TileFrame>
          <B.TileFrame key='round5'>
            {/* <DummyTile name={'집 개조'} src={'tile/houseRemodeling'} iconWidth={'96px'} iconHeight={'144px'} /> */}
            <B.TileBack>라운드 5</B.TileBack>
          </B.TileFrame>
          <B.TileFrame key='round8'>
            {/* <DummyTile name={'돼지 시장'} src={'animal/wildboar'} iconWidth={'24px'} iconHeight={'24px'} /> */}
            <B.TileBack>라운드 8</B.TileBack>
          </B.TileFrame>
          <B.TileFrame key='round10'>
            {/* <DummyTile name={'동부 채석장'} src={'resource/stone'} iconWidth={'24px'} iconHeight={'24px'} /> */}
            <B.TileBack>라운드 10</B.TileBack>
          </B.TileFrame>
          <B.TileFrame key='round12'>
            {/* <DummyTile name={'급한 가족 늘리기'} src={'tile/fastFamilyMaking_t'} iconWidth={'120px'} iconHeight={'72px'} /> */}
            <B.TileBack>라운드 12</B.TileBack>
          </B.TileFrame>
          <B.TileFrame key='round14'>
            {/* <DummyTile name={'농장 개조'} src={'tile/farmRemodeling'} iconWidth={'96px'} iconHeight={'132px'} /> */}
            <B.TileBack>라운드 14</B.TileBack>
            <B.HarvestIcon src='img/resource/harvest.svg' />
          </B.TileFrame>

          {/* row2 */}
          <B.TileFrame key='resource_clay'>
            <BasicTile roomId={roomInfo.id} tileImgSrc={'tile/resourceMart'} actionPublish={actionPublish} event={findEventWithId(events, 27)} iconWidth={'72px'} iconHeight={'48px'} />
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/clay'} actionPublish={actionPublish} event={findEventWithId(events, 28)} quantity={'2'} />
          </B.TileFrame>
          <B.TileFrame key='seed_farm'>
            <BasicTile roomId={roomInfo.id} tileImgSrc={'resource/grain'} actionPublish={actionPublish} event={findEventWithId(events, 3)} quantity={'+1'} />
            <DummyTile name={'농지'} src={'tile/farm'} iconWidth={'24px'} iconHeight={'24px'} />
          </B.TileFrame>
          <B.TileFrame key='forest2_soil'>
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/wood'} actionPublish={actionPublish} event={findEventWithId(events, 7)} quantity={'3'} />
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/clay'} actionPublish={actionPublish} event={findEventWithId(events, 8)} quantity={'1'} />
          </B.TileFrame>
          <B.TileFrame key='round3'>
            <FirstCycleTile roomId={roomInfo.id} actionPublish={actionPublish} event={findEventWithRound(events, 3)} openRound={3} />
          </B.TileFrame>
          <B.TileFrame key='round6'>
            {/* <DummyTile name={'급하지 않은 가족 늘리기'} src={'tile/slowFamilyMaking_t'} iconWidth={'120px'} iconHeight={'72px'} /> */}
            <B.TileBack>라운드 6</B.TileBack>
          </B.TileFrame>
          <B.TileFrame key='round9'>
            {/* <DummyTile name={'채소 종자'} src={'resource/vegetable'} iconWidth={'24px'} iconHeight={'24px'} /> */}
            <B.TileBack>라운드 9</B.TileBack>
            <B.HarvestIcon src='img/resource/harvest.svg' />
          </B.TileFrame>
          <B.TileFrame key='round11'>
            {/* <DummyTile name={'소'} src={'animal/cow'} iconWidth={'24px'} iconHeight={'24px'} /> */}
            <B.TileBack>라운드 11</B.TileBack>
            <B.HarvestIcon src='img/resource/harvest.svg' />
          </B.TileFrame>
          <B.TileFrame key='round13'>
            {/* <DummyTile name={'밭농사'} src={'tile/farming'} iconWidth={'120px'} iconHeight={'132px'} /> */}
            <B.TileBack>라운드 13</B.TileBack>
            <B.HarvestIcon src='img/resource/harvest.svg' />
          </B.TileFrame>
          <B.TileFrame key='cardBtns'>
            <CardBtns />
            <button onClick={printReducerState}>디버깅</button>
          </B.TileFrame>

          {/* row3 */}
          <B.TileFrame key='train2_theater'>
            {/* <DummyTile name={'교습2'} src={'tile/teaching2'} iconWidth={'80px'} iconHeight={'54px'} /> */}
            <PlaceTile roomId={roomInfo.id} tileImgSrc={'tile/teaching2'} iconWidth={'80px'} iconHeight={'54px'} actionPublish={actionPublish} event={findEventWithId(events, 29)} />
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/food'} actionPublish={actionPublish} event={findEventWithId(events, 30)} quantity={'1'} />
          </B.TileFrame>
          <B.TileFrame key='work_train1'>
            {/* <DummyTile name={'교습1'} src={'tile/teaching1'} iconWidth={'80px'} iconHeight={'54px'} /> */}
            <PlaceTile roomId={roomInfo.id} tileImgSrc={'tile/teaching1'} iconWidth={'80px'} iconHeight={'54px'} actionPublish={actionPublish} event={findEventWithId(events, 4)} />
            <BasicTile roomId={roomInfo.id} tileImgSrc={'resource/food'} actionPublish={actionPublish} event={findEventWithId(events, 6)} quantity={'+2'} />
          </B.TileFrame>
          <B.TileFrame key='reed_fishing'>
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/reed'} actionPublish={actionPublish} event={findEventWithId(events, 9)} quantity={'1'} />
            <StackTile roomId={roomInfo.id} tileImgSrc={'resource/food'} actionPublish={actionPublish} event={findEventWithId(events, 10)} quantity={'1'} />
          </B.TileFrame>
          <B.TileFrame key='round4'>
            <FirstCycleTile roomId={roomInfo.id} actionPublish={actionPublish} event={findEventWithRound(events, 4)} openRound={4} />
            <B.HarvestIcon src='img/resource/harvest.svg' />
          </B.TileFrame>
          <B.TileFrame key='round7'>
            {/* <DummyTile name={'서부 채석장'} src={'resource/stone'} iconWidth={'24px'} iconHeight={'24px'} /> */}
            <B.TileBack>라운드 7</B.TileBack>
            <B.HarvestIcon src='img/resource/harvest.svg' />
          </B.TileFrame>

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
      <InGameModalController actionPublish={actionPublish} exchangePublish={exchangePublish} />
    </B.Background>
  );
}

export default GameScreen;

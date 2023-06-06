import React, { useState } from 'react';
import * as S from './SideComponent';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../redux/reducers/modalReducer';
import { RootState } from '../../redux/store';
import { Player, AnimalType, PlayerBoardTile, Residents } from '../../interface/interfaces';

function PlayerStatus() {
  const [resident, setResident] = useState<Residents>({
    p1: 2,
    p2: 2,
    p3: 2,
    p4: 2,
  });

  const dispatch = useDispatch();
  const playersObj = useSelector((state: RootState) => state.player);

  // 다시 작성하기
  const countAnimal = (animalType: AnimalType, fields: PlayerBoardTile[][]): number => {
    let count = 0;
    fields.forEach((row) => {
      row.forEach((element) => {
        if (element !== null) {
          if (element.petRoom !== null && element.petRoom.animal.name === animalType) {
            count += element.petRoom.animal.count;
          }
        }
      });
    });
    return count;
  };

  const countResident = (fields: PlayerBoardTile[][]): number => {
    let count = 0;
    fields.forEach((row) => {
      row.forEach((element) => {
        if (element !== null) {
          count += element.residentNumber;
        }
      });
    });
    return count;
  };

  const countFence = (rowFence: boolean[][], colFence: boolean[][]): number => {
    let count = 0;
    rowFence.forEach((row) => {
      row.forEach((element) => {
        if (element) {
          count += 1;
        }
      });
    });
    colFence.forEach((row) => {
      row.forEach((element) => {
        if (element) {
          count += 1;
        }
      });
    });
    return count;
  };

  return (
    <S.StatusColumn>
      <S.SideTop>
        <S.TimerFrame>
          <S.ContentIconLg src='img/etc/timer.svg' />
          <S.TimerText>00:00</S.TimerText>
        </S.TimerFrame>
        {/* <S.ContentIconLg src='img/etc/scoreBoard.svg' role='button'  /> */}
        <S.ScoreBoardBtn onClick={() => dispatch(openModal('gameStatusModal'))} />
        {/* <button style={{width: '32px', height:'32px' bopr}}/> */}
      </S.SideTop>
      {playersObj.players.map((player: Player, i) => {
        return (
          <S.StatusFrame key={i}>
            <S.StatusHeader>
              <S.PlayerProfile nickname={playersObj.participants[i].username} imgSrc={'img/etc/profile.svg'} />
              {/* <S.playerSequence>1</S.playerSequence> */}
            </S.StatusHeader>
            <S.StatusContent>
              <S.StatusResource resourceSrc={'resource/wood'} resourceCount={player.resources.WOOD} />
              <S.StatusResource resourceSrc={'resource/clay'} resourceCount={player.resources.CLAY} />
              <S.StatusResource resourceSrc={'resource/stone'} resourceCount={player.resources.STONE} />
              <S.StatusResource resourceSrc={'resource/reed'} resourceCount={player.resources.REED} />
              <S.StatusResource resourceSrc={'resource/grain'} resourceCount={player.resources.GRAIN} />
              <S.StatusResource resourceSrc={'resource/vegetable'} resourceCount={player.resources.VEGETABLE} />
              <S.StatusResourceLimited resourceSrc={'resource/food'} resourceCount={player.resources.FOOD} resourceMaximumCount={6} />
              <S.StatusResource resourceSrc={'resource/hungerToken'} resourceCount={player.resources.BEGGING} />

              <S.StatusResource resourceSrc={'animal/sheep'} resourceCount={countAnimal('SHEEP', player.playerBoard.fields)} />
              <S.StatusResource resourceSrc={'animal/wildboar'} resourceCount={countAnimal('WILE_BOAR', player.playerBoard.fields)} />
              <S.StatusResource resourceSrc={'animal/cow'} resourceCount={countAnimal('CATTLE', player.playerBoard.fields)} />
              <div />
              <S.StatusResourceLimited resourceSrc={'etc/human_green'} resourceCount={countResident(player.playerBoard.fields)} resourceMaximumCount={5} />
              <S.StatusResourceLimited resourceSrc={'resource/fence'} resourceCount={countFence(player.playerBoard.rowFence, player.playerBoard.colFence)} resourceMaximumCount={15} />
              <S.StatusResourceLimited resourceSrc={'resource/barn'} resourceCount={1} resourceMaximumCount={4} />
            </S.StatusContent>
            <S.StatusContent></S.StatusContent>
          </S.StatusFrame>
        );
      })}
    </S.StatusColumn>
  );
}

export default PlayerStatus;

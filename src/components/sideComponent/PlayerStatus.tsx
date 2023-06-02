import React from 'react';
import * as S from './SideComponent';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../redux/reducers/modalReducer';

function PlayerStatus() {
  const dispatch = useDispatch();
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
      <S.StatusFrame>
        <S.StatusHeader>
          <S.PlayerProfile nickname={'player1'} imgSrc={'img/etc/profile.svg'} />
          <S.playerSequence>1</S.playerSequence>
        </S.StatusHeader>
        <S.StatusContent>
          <S.StatusResource resourceSrc={'resource/wood'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/clay'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/stone'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/reed'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/grain'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/vegetable'} resourceCount={1} />
          <S.StatusResourceLimited resourceSrc={'resource/food'} resourceCount={1} resourceMaximumCount={6} />
          <S.StatusResource resourceSrc={'resource/hungerToken'} resourceCount={1} />

          <S.StatusResource resourceSrc={'animal/sheep'} resourceCount={1} />
          <S.StatusResource resourceSrc={'animal/wildboar'} resourceCount={1} />
          <S.StatusResource resourceSrc={'animal/cow'} resourceCount={1} />
          <div />
          <S.StatusResourceLimited resourceSrc={'etc/human_green'} resourceCount={1} resourceMaximumCount={5} />
          <S.StatusResourceLimited resourceSrc={'resource/fence'} resourceCount={1} resourceMaximumCount={15} />
          <S.StatusResourceLimited resourceSrc={'resource/barn'} resourceCount={1} resourceMaximumCount={4} />
        </S.StatusContent>
        <S.StatusContent></S.StatusContent>
      </S.StatusFrame>
      <S.StatusFrame>
        <S.StatusHeader>
          <S.PlayerProfile nickname={'player2'} imgSrc={'img/etc/profile.svg'} />
          <S.playerSequence>3</S.playerSequence>
        </S.StatusHeader>
        <S.StatusContent>
          <S.StatusResource resourceSrc={'resource/wood'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/clay'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/stone'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/reed'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/grain'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/vegetable'} resourceCount={1} />
          <S.StatusResourceLimited resourceSrc={'resource/food'} resourceCount={1} resourceMaximumCount={6} />
          <S.StatusResource resourceSrc={'resource/hungerToken'} resourceCount={1} />

          <S.StatusResource resourceSrc={'animal/sheep'} resourceCount={1} />
          <S.StatusResource resourceSrc={'animal/wildboar'} resourceCount={1} />
          <S.StatusResource resourceSrc={'animal/cow'} resourceCount={1} />
          <div />
          <S.StatusResourceLimited resourceSrc={'etc/human_green'} resourceCount={1} resourceMaximumCount={5} />
          <S.StatusResourceLimited resourceSrc={'resource/fence'} resourceCount={1} resourceMaximumCount={15} />
          <S.StatusResourceLimited resourceSrc={'resource/barn'} resourceCount={1} resourceMaximumCount={4} />
        </S.StatusContent>
      </S.StatusFrame>
      <S.StatusFrame>
        <S.StatusHeader>
          <S.PlayerProfile nickname={'player3'} imgSrc={'img/etc/profile.svg'} />
          <S.playerSequence>2</S.playerSequence>
        </S.StatusHeader>
        <S.StatusContent>
          <S.StatusResource resourceSrc={'resource/wood'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/clay'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/stone'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/reed'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/grain'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/vegetable'} resourceCount={1} />
          <S.StatusResourceLimited resourceSrc={'resource/food'} resourceCount={1} resourceMaximumCount={6} />
          <S.StatusResource resourceSrc={'resource/hungerToken'} resourceCount={1} />

          <S.StatusResource resourceSrc={'animal/sheep'} resourceCount={1} />
          <S.StatusResource resourceSrc={'animal/wildboar'} resourceCount={1} />
          <S.StatusResource resourceSrc={'animal/cow'} resourceCount={1} />
          <div />
          <S.StatusResourceLimited resourceSrc={'etc/human_green'} resourceCount={1} resourceMaximumCount={5} />
          <S.StatusResourceLimited resourceSrc={'resource/fence'} resourceCount={1} resourceMaximumCount={15} />
          <S.StatusResourceLimited resourceSrc={'resource/barn'} resourceCount={1} resourceMaximumCount={4} />
        </S.StatusContent>
      </S.StatusFrame>
      <S.StatusFrame>
        <S.StatusHeader>
          <S.PlayerProfile nickname={'player4'} imgSrc={'img/etc/profile.svg'} />
          <S.playerSequence>4</S.playerSequence>
        </S.StatusHeader>
        <S.StatusContent>
          <S.StatusResource resourceSrc={'resource/wood'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/clay'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/stone'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/reed'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/grain'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/vegetable'} resourceCount={1} />
          <S.StatusResourceLimited resourceSrc={'resource/food'} resourceCount={1} resourceMaximumCount={6} />
          <S.StatusResource resourceSrc={'resource/hungerToken'} resourceCount={1} />

          <S.StatusResource resourceSrc={'animal/sheep'} resourceCount={1} />
          <S.StatusResource resourceSrc={'animal/wildboar'} resourceCount={1} />
          <S.StatusResource resourceSrc={'animal/cow'} resourceCount={1} />
          <div />
          <S.StatusResourceLimited resourceSrc={'etc/human_green'} resourceCount={1} resourceMaximumCount={5} />
          <S.StatusResourceLimited resourceSrc={'resource/fence'} resourceCount={1} resourceMaximumCount={15} />
          <S.StatusResourceLimited resourceSrc={'resource/barn'} resourceCount={1} resourceMaximumCount={4} />
        </S.StatusContent>
      </S.StatusFrame>
    </S.StatusColumn>
  );
}

export default PlayerStatus;

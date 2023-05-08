import React from 'react';
import * as S from './SideComponent';

function PlayerStatus() {
  return (
    <S.StatusColumn>
      <S.SideTop />
      <S.StatusFrame>
        <S.StatusHeader>
          <S.playerSequence>1</S.playerSequence>

          <S.PlayerName>Player</S.PlayerName>
          <S.PlayerImg src='img/etc/player.png' />
        </S.StatusHeader>
        <S.StatusContent>
          <S.StatusResource resourceSrc={'resource/wood'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/clay'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/stone'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/reed'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/cropSeed'} resourceCount={1} />
          <S.StatusResource resourceSrc={'resource/vegetableSeed'} resourceCount={1} />
          <S.StatusResourceLimited resourceSrc={'resource/food'} resourceCount={1} resourceMaximumCount={6} />
          <S.StatusResource resourceSrc={'resource/hungerToken'} resourceCount={1} />

          <S.StatusResource resourceSrc={'animal/sheep'} resourceCount={1} />
          <S.StatusResource resourceSrc={'animal/pig'} resourceCount={1} />
          <S.StatusResource resourceSrc={'animal/cow'} resourceCount={1} />
        </S.StatusContent>
        <S.StatusContent>
          <S.StatusResourceLimited resourceSrc={'resource/cropSeed'} resourceCount={1} resourceMaximumCount={5} />
          <S.StatusResourceLimited resourceSrc={'resource/fence'} resourceCount={1} resourceMaximumCount={15} />
          <S.StatusResourceLimited resourceSrc={'resource/food'} resourceCount={1} resourceMaximumCount={4} />
        </S.StatusContent>
      </S.StatusFrame>

      <S.StatusFrame></S.StatusFrame>
      <S.StatusFrame></S.StatusFrame>
      <S.StatusFrame></S.StatusFrame>
    </S.StatusColumn>
  );
}

export default PlayerStatus;

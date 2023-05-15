import React from 'react';
import * as M from './ModalComponent';

function FinalScoreModal() {
  return (
    <M.Modal modalType='finalScoreModal'>
      <M.FinalScoreModalFrame>
        <M.FinalScoreGrid>
          <M.GridTile w={'150px'} borderR={'1px solid black'} />
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/tile/farm.svg'} />
          </M.GridTile>
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/tile/fenceTile.svg'} />
          </M.GridTile>
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/resource/cropSeed.svg'} />
          </M.GridTile>
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/resource/vegetableSeed.svg'} />
          </M.GridTile>
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/animal/sheep.svg'} />
          </M.GridTile>
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/animal/pig.svg'} />
          </M.GridTile>
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/animal/cow.svg'} />
          </M.GridTile>
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/tile/emptyTile.svg'} />
          </M.GridTile>
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/tile/fenceWithBarnTile.svg'} />
          </M.GridTile>
          <M.GridTile>흙집</M.GridTile>
          <M.GridTile>돌집</M.GridTile>
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/etc/human_black.svg'} />
          </M.GridTile>
          <M.GridTile>
            <M.IconBox width={'32px'} height={'32px'} src={'img/resource/hungerToken.svg'} />
          </M.GridTile>
          <M.GridTile>
            <span style={{ textAlign: 'center' }}>카드 점수</span>
          </M.GridTile>
          <M.GridTile borderR={'1px solid black'}>
            <span style={{ textAlign: 'center' }}>추가 점수</span>
          </M.GridTile>
          <M.GridTile borderR={'none'}>합계</M.GridTile>
        </M.FinalScoreGrid>
        <M.FinalScoreGrid>
          <M.GridTile w={'150px'} h={'fit-content'} borderR={'1px solid black'}>
            <M.AlignRow justify={'center'}>
              <M.Icons src='img/etc/profile.svg' />
              <M.CountText>Player1</M.CountText>
            </M.AlignRow>
          </M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile borderR={'1px solid black'}></M.GridTile>
          <M.GridTile borderR={'none'}></M.GridTile>
        </M.FinalScoreGrid>
        <M.FinalScoreGrid>
          <M.GridTile w={'150px'} h={'fit-content'} borderR={'1px solid black'}>
            <M.AlignRow justify={'center'}>
              <M.Icons src='img/etc/profile.svg' />
              <M.CountText>Player2</M.CountText>
            </M.AlignRow>
          </M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile borderR={'1px solid black'}></M.GridTile>
          <M.GridTile borderR={'none'}></M.GridTile>
        </M.FinalScoreGrid>
        <M.FinalScoreGrid>
          <M.GridTile w={'150px'} h={'fit-content'} borderR={'1px solid black'}>
            <M.AlignRow justify={'center'}>
              <M.Icons src='img/etc/profile.svg' />
              <M.CountText>Player3</M.CountText>
            </M.AlignRow>
          </M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile borderR={'1px solid black'}></M.GridTile>
          <M.GridTile borderR={'none'}></M.GridTile>
        </M.FinalScoreGrid>
        <M.FinalScoreGrid>
          <M.GridTile w={'150px'} h={'fit-content'} borderR={'1px solid black'}>
            <M.AlignRow justify={'center'}>
              <M.Icons src='img/etc/profile.svg' />
              <M.CountText>Player4</M.CountText>
            </M.AlignRow>
          </M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile></M.GridTile>
          <M.GridTile borderR={'1px solid black'}></M.GridTile>
          <M.GridTile borderR={'none'}></M.GridTile>
        </M.FinalScoreGrid>
      </M.FinalScoreModalFrame>
    </M.Modal>
  );
}

export default FinalScoreModal;

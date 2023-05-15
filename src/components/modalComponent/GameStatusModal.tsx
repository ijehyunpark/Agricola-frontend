import React from 'react';
import * as M from './ModalComponent';

function GameStatusModal() {
  return (
    <M.Modal modalType='gameStatusModal'>
      <M.GameStatusModalFrame>
        <M.AlignRow justify={'center'} style={{ marginTop: '60px' }}>
          <M.AlignColumn>
            <M.AlignRow justify={'center'}>
              <M.AlignColumn>
                <M.scoreText top={0} left={0}>
                  -1
                </M.scoreText>
                <M.AlignColumn backgroundColor={'rgba(255, 255, 255, 0.5)'}>
                  <M.ColummItem>
                    <M.Icons src='img/tile/farm.svg' />
                    <M.CountText>0~1</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/tile/fenceTile.svg' />
                    <M.CountText>0</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/cropSeed.svg' />
                    <M.CountText>0</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/vegetableSeed.svg' />
                    <M.CountText>0</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/sheep.svg' />
                    <M.CountText>0</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/pig.svg' />
                    <M.CountText>0</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/cow.svg' />
                    <M.CountText>0</M.CountText>
                  </M.ColummItem>
                </M.AlignColumn>
              </M.AlignColumn>
              <M.AlignColumn>
                <M.scoreText top={0} left={0}>
                  +1
                </M.scoreText>
                <M.AlignColumn backgroundColor={'rgba(255, 255, 255, 0.452)'}>
                  <M.ColummItem>
                    <M.Icons src='img/tile/farm.svg' />
                    <M.CountText>2</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/tile/fenceTile.svg' />
                    <M.CountText>1</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/cropSeed.svg' />
                    <M.CountText>1~3</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/vegetableSeed.svg' />
                    <M.CountText>1</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/sheep.svg' />
                    <M.CountText>1~3</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/pig.svg' />
                    <M.CountText>1~2</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/cow.svg' />
                    <M.CountText>1</M.CountText>
                  </M.ColummItem>
                </M.AlignColumn>
              </M.AlignColumn>
              <M.AlignColumn>
                <M.scoreText top={0} left={0}>
                  +2
                </M.scoreText>
                <M.AlignColumn backgroundColor={'rgba(255, 255, 255, 0.452)'}>
                  <M.ColummItem>
                    <M.Icons src='img/tile/farm.svg' />
                    <M.CountText>3</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/tile/fenceTile.svg' />
                    <M.CountText>2</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/cropSeed.svg' />
                    <M.CountText>4~5</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/vegetableSeed.svg' />
                    <M.CountText>2</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/sheep.svg' />
                    <M.CountText>4~5</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/pig.svg' />
                    <M.CountText>3~4</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/cow.svg' />
                    <M.CountText>2~3</M.CountText>
                  </M.ColummItem>
                </M.AlignColumn>
              </M.AlignColumn>
              <M.AlignColumn>
                <M.scoreText top={0} left={0}>
                  +3
                </M.scoreText>
                <M.AlignColumn backgroundColor={'rgba(255, 255, 255, 0.452)'}>
                  <M.ColummItem>
                    <M.Icons src='img/tile/farm.svg' />
                    <M.CountText>4</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/tile/fenceTile.svg' />
                    <M.CountText>3</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/cropSeed.svg' />
                    <M.CountText>6~7</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/vegetableSeed.svg' />
                    <M.CountText>3</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/sheep.svg' />
                    <M.CountText>6~7</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/pig.svg' />
                    <M.CountText>5~6</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/cow.svg' />
                    <M.CountText>4~5</M.CountText>
                  </M.ColummItem>
                </M.AlignColumn>
              </M.AlignColumn>
              <M.AlignColumn>
                <M.scoreText top={0} left={0}>
                  +4
                </M.scoreText>
                <M.AlignColumn backgroundColor={'rgba(255, 255, 255, 0.5)'}>
                  <M.ColummItem>
                    <M.Icons src='img/tile/farm.svg' />
                    <M.CountText>5+</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/tile/fenceTile.svg' />
                    <M.CountText>4+</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/cropSeed.svg' />
                    <M.CountText>8+</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/vegetableSeed.svg' />
                    <M.CountText>4+</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/sheep.svg' />
                    <M.CountText>8+</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/pig.svg' />
                    <M.CountText>7+</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/animal/cow.svg' />
                    <M.CountText>6+</M.CountText>
                  </M.ColummItem>
                </M.AlignColumn>
              </M.AlignColumn>
            </M.AlignRow>
            <M.AlignRow justify={'center'}>
              <M.IconBox width={'48px'} height={'48px'} src={'img/tile/emptyTile.svg'} />
              <M.IconBox width={'48px'} height={'48px'} src={'img/tile/fenceWithBarnTile.svg'} />
              <M.IconBox width={'48px'} height={'48px'}>
                흙집
              </M.IconBox>
              <M.IconBox width={'48px'} height={'48px'}>
                돌집
              </M.IconBox>

              <M.IconBox width={'48px'} height={'48px'} src={'img/etc/familyScore.svg'} />
              <M.IconBox width={'48px'} height={'48px'}>
                카드점수
              </M.IconBox>
            </M.AlignRow>
          </M.AlignColumn>
          <M.AlignColumn>
            <M.AlignRow justify={'space-around'}>
              <M.IconBox width={'54px'} height={'54px'} src={'img/etc/profile.svg'} />
              <M.IconBox width={'54px'} height={'54px'} src={'img/etc/profile.svg'} />
              <M.IconBox width={'54px'} height={'54px'} src={'img/etc/profile.svg'} />
            </M.AlignRow>
            <div style={{ width: '535px', height: '320px', border: '1px solid red' }}>123123</div>
          </M.AlignColumn>
        </M.AlignRow>
      </M.GameStatusModalFrame>
    </M.Modal>
  );
}

export default GameStatusModal;

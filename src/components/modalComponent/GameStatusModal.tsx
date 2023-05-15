import React from 'react';
import * as M from './ModalComponent';

function GameStatusModal() {
  return (
    <M.Modal modalType='gameStatusModal'>
      <M.GameStatusModalFrame>
        <M.AlignRow>
          <M.AlignColumn>
            <M.AlignRow>
              <M.AlignColumn>
                <M.scoreText top={0} left={0}>
                  -1
                </M.scoreText>
                <M.AlignColumn>
                  <M.ColummItem>
                    <M.Icons src='img/resource/wood.svg' />
                    <M.CountText>0~1</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/wood.svg' />
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
                <M.AlignColumn>
                  <M.ColummItem>
                    <M.Icons src='img/resource/wood.svg' />
                    <M.CountText>2</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/wood.svg' />
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
                <M.AlignColumn>
                  <M.ColummItem>
                    <M.Icons src='img/resource/wood.svg' />
                    <M.CountText>3</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/wood.svg' />
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
                <M.AlignColumn>
                  <M.ColummItem>
                    <M.Icons src='img/resource/wood.svg' />
                    <M.CountText>4</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/wood.svg' />
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
                <M.AlignColumn>
                  <M.ColummItem>
                    <M.Icons src='img/resource/wood.svg' />
                    <M.CountText>5+</M.CountText>
                  </M.ColummItem>
                  <M.ColummItem>
                    <M.Icons src='img/resource/wood.svg' />
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
            <M.AlignRow>
              <M.IconBox width={'54px'} height={'54px'}>
                <M.scoreText top={'9px'} left={'40px'}>
                  -1
                </M.scoreText>
              </M.IconBox>
              <M.IconBox width={'54px'} height={'54px'}>
                <M.scoreText top={'9px'} left={'40px'}>
                  +1
                </M.scoreText>
              </M.IconBox>
              <M.IconBox width={'54px'} height={'54px'}>
                <M.scoreText top={'9px'} left={'40px'}>
                  +1
                </M.scoreText>
              </M.IconBox>
              <M.IconBox width={'54px'} height={'54px'}>
                <M.scoreText top={'9px'} left={'40px'}>
                  +2
                </M.scoreText>
              </M.IconBox>
              <M.AlignColumn>
                <M.IconBox width={'54px'} height={'20px'}>
                  <M.scoreText top={'-6px'} left={'40px'}>
                    +2
                  </M.scoreText>
                </M.IconBox>
                <M.IconBox width={'54px'} height={'20px'}></M.IconBox>
              </M.AlignColumn>
            </M.AlignRow>
          </M.AlignColumn>
          <div style={{ width: '500px', height: '300px', border: '1px solid red' }}>123123</div>
        </M.AlignRow>
      </M.GameStatusModalFrame>
    </M.Modal>
  );
}

export default GameStatusModal;

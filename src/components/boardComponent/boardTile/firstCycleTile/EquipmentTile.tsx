import { useState, useEffect } from 'react';
import { TileProps } from '../../../../interface/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../../redux/reducers/modalReducer';
import { setLastEventId } from '../../../../redux/reducers/eventTileReducer';
import { RootState } from '../../../../redux/store';
import * as B from '../../BoardComponent';
import { RoundTileProps } from '../../../../interface/interfaces';
import { useSpring, a } from '@react-spring/web';

function EquipmentTile({ openRound }: { openRound: number }) {
  const dispatch = useDispatch();
  const playerId = useSelector((state: RootState) => state.player.myInfo.id);
  const gameState = useSelector((state: RootState) => state.gameState);
  const [flipped, setFlip] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(300px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 300, friction: 80 },
  });

  useEffect(() => {
    if (openRound === gameState.round) {
      setFlip(true);
    }
  }, [gameState.round, openRound]);

  const clickEvnet = () => {
    if (playerId !== gameState.playerId) {
      return;
    }
    dispatch(openModal('equipmentModal'));
  };

  return (
    <>
      <B.FlipTile onClick={clickEvnet}>
        <a.div
          style={{
            opacity,
            transform,
            rotateY: '180deg',
          }}>
          <B.TileContentWrapper>
            <B.TileName>설비</B.TileName>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <B.Icon src={`img/tile/equipment.svg`} width={'120px'} height={'60px'} />
            </div>
          </B.TileContentWrapper>
        </a.div>
      </B.FlipTile>
      <B.FlipTile>
        <a.div style={{ opacity: opacity.to((o) => 1 - o), transform }}>
          <B.TileBack>라운드 {openRound}</B.TileBack>
        </a.div>
      </B.FlipTile>
    </>
  );
}

export default EquipmentTile;

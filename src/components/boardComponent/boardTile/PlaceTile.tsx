import { TileProps } from '../../../interface/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../redux/reducers/modalReducer';
import { setLastEventId } from '../../../redux/reducers/eventTileReducer';
import { RootState } from '../../../redux/store';
import * as B from '../BoardComponent';

function PlaceTile({ roomId, tileImgSrc, iconWidth, iconHeight, actionPublish, event }: TileProps) {
  const dispatch = useDispatch();
  const playerId = useSelector((state: RootState) => state.player.myInfo.id);
  const currentTurnId = useSelector((state: RootState) => state.gameState.playerId);
  const clickEvent = () => {
    if (playerId !== currentTurnId) {
      return;
    }
    if (event !== undefined) {
      dispatch(setLastEventId(event?.id));
      dispatch(openModal('occupationCardModal'));
    }
  };

  return (
    <B.Tile onClick={clickEvent}>
      <B.TileContentWrapper>
        <B.TileName>{event?.name}</B.TileName>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <B.Icon src={`img/${tileImgSrc}.svg`} width={iconWidth} height={iconHeight} />
        </div>
      </B.TileContentWrapper>
    </B.Tile>
  );
}

export default PlaceTile;

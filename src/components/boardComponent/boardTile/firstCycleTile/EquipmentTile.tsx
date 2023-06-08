import { TileProps } from '../../../../interface/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../../../redux/reducers/modalReducer';
import { RootState } from '../../../../redux/store';
import * as B from '../../BoardComponent';

function EquipmentTile() {
  const dispatch = useDispatch();
  return (
    <B.Tile onClick={() => dispatch(openModal('equipmentModal'))}>
      <B.TileContentWrapper>
        <B.TileName>설비</B.TileName>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <B.Icon src={`img/tile/equipment.svg`} width={'120px'} height={'60px'} />
        </div>
      </B.TileContentWrapper>
    </B.Tile>
  );
}

export default EquipmentTile;

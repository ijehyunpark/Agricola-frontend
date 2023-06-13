import * as B from '../BoardComponent';
import { Dummy } from '../../../interface/interfaces';

function DummyTile({ name, src, iconWidth, iconHeight }: Dummy) {
  return (
    <B.Tile>
      <B.TileContentWrapper>
        <B.TileName>{name}</B.TileName>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <B.Icon src={`img/${src}.svg`} width={iconWidth} height={iconHeight} />
        </div>
      </B.TileContentWrapper>
    </B.Tile>
  );
}

export default DummyTile;

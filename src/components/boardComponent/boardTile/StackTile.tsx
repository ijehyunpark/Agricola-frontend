import { TileProps } from '../../../interface/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import * as B from '../BoardComponent';

function StackTile({ roomId, tileImgSrc, iconWidth, iconHeight, actionPublish, event, quantity }: TileProps) {
  const getResource = () => {
    const message = {
      eventId: event?.id,
      acts: [
        {
          use: true,
          acts: null,
        },
      ],
    };
    actionPublish(roomId, message);
  };
  return (
    <B.Tile onClick={getResource}>
      <B.TileContentWrapper>
        <B.TileName>{event?.name}</B.TileName>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>{quantity}</span>
          <B.Icon src={`img/${tileImgSrc}.svg`} width={iconWidth} height={iconHeight} />
        </div>
        <B.StackPlace>
          {Array(event?.stacks[0]?.count)
            .fill(null)
            .map((_, i) => (
              <B.StackResource src={`img/${tileImgSrc}.svg`} left={i} key={i} />
            ))}
          <B.StackCount>{event?.stacks[0]?.count}</B.StackCount>
        </B.StackPlace>
      </B.TileContentWrapper>
    </B.Tile>
  );
}

export default StackTile;

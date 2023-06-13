import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MajorAttr, MinorAttr, APModalProps } from '../../interface/interfaces';
import { playerMinorCard } from '../cardComponent/findCard';
import * as M from './ModalComponent';
import * as C from '../cardComponent/CardComponent';
import { SelectableMajorCard } from '../cardComponent/MajorCard';
import { SelectableMinorCard } from '../cardComponent/MinorCard';

function EquipmentModal({ actionPublish }: APModalProps) {
  const roomInfo = useSelector((state: RootState) => state.room);
  const playerId = useSelector((state: RootState) => state.player.myInfo.id);
  const eventId = useSelector((state: RootState) => state.event.lastEventId);
  const cardDictionary = useSelector((state: RootState) => state.card);

  return (
    <M.ModalContainer>
      <M.ModalBg>
        <C.CardGrid n={10}>
          {cardDictionary.majorDict.map((card: MajorAttr, i) => (
            <SelectableMajorCard roomId={roomInfo.id} eventId={14} cardId={card.cardID} name={card.name} ingredients={card.ingredients} bonusPoint={card.bonusPoint} description={card.description} actionPublish={actionPublish} key={i} />
          ))}
          {playerMinorCard(playerId, cardDictionary.playerHand, cardDictionary.minorDict).map((card: MinorAttr, i) => (
            <SelectableMinorCard roomId={roomInfo.id} eventId={14} cardId={card.cardID} name={card.name} ingredients={card.ingredients} bonusPoint={card.bonusPoint} description={card.description} actionPublish={actionPublish} key={i} />
          ))}
        </C.CardGrid>
      </M.ModalBg>
    </M.ModalContainer>
  );
}

export default EquipmentModal;

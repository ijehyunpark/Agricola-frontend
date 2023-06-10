import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SelectableOccupationCard } from '../cardComponent/OccupationCard';
import * as M from './ModalComponent';
import * as C from '../cardComponent/CardComponent';
import { OccupationAttr, APModalProps } from '../../interface/interfaces';
import { playerOccupationCard } from '../cardComponent/findCard';

function OccupationModal({ actionPublish }: APModalProps) {
  const roomInfo = useSelector((state: RootState) => state.room);
  const playerId = useSelector((state: RootState) => state.player.myInfo.id);
  const eventId = useSelector((state: RootState) => state.event.lastEventId);
  const cards = useSelector((state: RootState) => state.card);
  return (
    <M.ModalContainer>
      <M.ModalBg>
        <C.CardGrid n={7}>
          {playerOccupationCard(playerId, cards.playerHand, cards.occupationDict).map((card, i) => (
            <SelectableOccupationCard roomId={roomInfo.id} eventId={eventId} cardId={card.cardID} name={card.name} bonusPoint={card.bonusPoint} description={card.description} actionPublish={actionPublish} key={i} />
          ))}
        </C.CardGrid>
      </M.ModalBg>
    </M.ModalContainer>
  );
}

export default OccupationModal;

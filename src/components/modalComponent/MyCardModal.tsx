import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { playerMinorCard, playerOccupationCard } from '../cardComponent/findCard';
import { UnselectableOccupationCard } from '../cardComponent/OccupationCard';
import { UnselectableMinorCard } from '../cardComponent/MinorCard';
import * as M from './ModalComponent';
import * as C from '../cardComponent/CardComponent';
import { MinorAttr, OccupationAttr } from './../../interface/interfaces';

function MyCardModal() {
  const cards = useSelector((state: RootState) => state.card);
  const playerId = useSelector((state: RootState) => state.player.myInfo.id);
  return (
    <M.Modal modalType='myCardModal'>
      <C.CardGrid n={7}>
        {playerMinorCard(playerId, cards.playerHand, cards.minorDict).map((card: MinorAttr, i) => (
          <UnselectableMinorCard name={card.name} ingredients={card.ingredients} bonusPoint={card.bonusPoint} description={card.description} key={i} />
        ))}
        {playerOccupationCard(playerId, cards.playerHand, cards.occupationDict).map((card: OccupationAttr, i) => (
          <UnselectableOccupationCard name={card.name} bonusPoint={card.bonusPoint} description={card.description} key={i} />
        ))}
      </C.CardGrid>
    </M.Modal>
  );
}

export default MyCardModal;

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { UnselectableMajorCard } from '../cardComponent/MajorCard';
import * as M from './ModalComponent';
import * as C from '../cardComponent/CardComponent';
import { MajorAttr } from './../../interface/interfaces';

function MajorCardModal() {
  const cards = useSelector((state: RootState) => state.card);
  return (
    <M.Modal modalType='majorCardModal'>
      <C.CardGrid n={5}>
        {cards.majorDict.map((card: MajorAttr, i) => (
          <UnselectableMajorCard name={card.name} ingredients={card.ingredients} bonusPoint={card.bonusPoint} description={card.description} key={i} />
        ))}
      </C.CardGrid>
    </M.Modal>
  );
}

export default MajorCardModal;

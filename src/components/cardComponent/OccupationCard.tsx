import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/reducers/modalReducer';
import * as C from './CardComponent';
import { SelectableCardProps, UnselectableCardProps } from '../../interface/interfaces';

function SelectableOccupationCard({ roomId, eventId, cardId, name, bonusPoint, description, actionPublish }: SelectableCardProps) {
  const dispatch = useDispatch();
  const occupationCardClickEvent = () => {
    actionPublish(roomId, {
      eventId: eventId,
      acts: [
        {
          use: true,
          acts: cardId,
        },
      ],
    });
    dispatch(closeModal('equipmentModal'));
  };
  return (
    <C.SelectableCard onClick={occupationCardClickEvent}>
      <C.CardName>{name}</C.CardName>
      <C.CardScore>{bonusPoint}</C.CardScore>
      <C.CardDesc>{description}</C.CardDesc>
    </C.SelectableCard>
  );
}

function UnselectableOccupationCard({ name, bonusPoint, description }: UnselectableCardProps) {
  return (
    <C.SelectableCard>
      <C.CardName>{name}</C.CardName>
      <C.CardScore>{bonusPoint}</C.CardScore>
      <C.CardDesc>{description}</C.CardDesc>
    </C.SelectableCard>
  );
}

export { SelectableOccupationCard, UnselectableOccupationCard };

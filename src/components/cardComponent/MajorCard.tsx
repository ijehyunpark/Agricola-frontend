import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/reducers/modalReducer';
import * as C from './CardComponent';
import { SelectableCardProps, UnselectableCardProps } from '../../interface/interfaces';

function SelectableMajorCard({ roomId, eventId, cardId, name, ingredients, bonusPoint, description, actionPublish }: SelectableCardProps) {
  const dispatch = useDispatch();
  const majorCardClickEvent = () => {
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
    <C.SelectableCard onClick={majorCardClickEvent}>
      <C.RequirementBox>
        {ingredients !== undefined
          ? ingredients.map((resource) => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>{resource.count}</span>
                <C.Requirement src={`img/resource/${resource.name.toLowerCase()}.svg`} />
              </div>
            ))
          : null}
      </C.RequirementBox>
      <C.CardName>{name}</C.CardName>
      <C.CardScore>{bonusPoint}</C.CardScore>
      <C.CardDesc>{description}</C.CardDesc>
    </C.SelectableCard>
  );
}

function UnselectableMajorCard({ name, ingredients, bonusPoint, description }: UnselectableCardProps) {
  return (
    <C.SelectableCard>
      <C.RequirementBox>
        {ingredients !== undefined
          ? ingredients.map((resource) => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>{resource.count}</span>
                <C.Requirement src={`img/resource/${resource.name.toLowerCase()}.svg`} />
              </div>
            ))
          : null}
      </C.RequirementBox>
      <C.CardName>{name}</C.CardName>
      <C.CardScore>{bonusPoint}</C.CardScore>
      <C.CardDesc>{description}</C.CardDesc>
    </C.SelectableCard>
  );
}

export { SelectableMajorCard, UnselectableMajorCard };

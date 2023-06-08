import React from 'react';
import * as C from './CardComponent';
import { SelectableCardProps, UnselectableCardProps } from '../../interface/interfaces';

function SelectableMinorCard({ roomId, eventId, cardId, name, ingredients, bonusPoint, description, actionPublish }: SelectableCardProps) {
  const minorCardClickEvent = () => {
    actionPublish(roomId, {
      eventId: eventId,
      acts: [
        {
          use: true,
          acts: cardId,
        },
      ],
    });
  };
  return (
    <C.SelectableCard onClick={minorCardClickEvent}>
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

function UnselectableMinorCard({ name, ingredients, bonusPoint, description }: UnselectableCardProps) {
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

export { SelectableMinorCard, UnselectableMinorCard };

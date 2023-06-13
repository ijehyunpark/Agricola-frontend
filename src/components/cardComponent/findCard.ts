import { MinorAttr, OccupationAttr, PlayerHand } from '../../interface/interfaces';

export const playerMinorCard = (playerId: number, playerHand: PlayerHand[], dict: MinorAttr[]): MinorAttr[] => {
  const myMinors = playerHand.filter((card) => card.playerId === playerId);
  let matched: MinorAttr[] = [];
  for (const minor of myMinors) {
    for (const attr of dict) {
      if (minor.cardId === attr.cardID) {
        matched.push(attr);
        break;
      }
    }
  }
  return matched;
};

export const playerOccupationCard = (playerId: number, playerHand: PlayerHand[], dict: OccupationAttr[]): OccupationAttr[] => {
  const myOccupations = playerHand.filter((card) => card.playerId === playerId);
  let matched: OccupationAttr[] = [];
  for (const occupation of myOccupations) {
    for (const attr of dict) {
      if (occupation.cardId === attr.cardID) {
        matched.push(attr);
        break;
      }
    }
  }
  return matched;
};

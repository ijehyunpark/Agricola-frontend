import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import * as B from './BoardComponent';
import * as C from '../cardComponent/CardComponent';
import { CardViewProps, PlayerHand, MajorAttr, MinorAttr, OccupationAttr } from '../../interface/interfaces';

function MyCard({ cardName }: CardViewProps) {
  return (
    <C.CardView>
      <C.CardName>{cardName}</C.CardName>
      {/* <B.JobDetails>Here are the job details.</B.JobDetails> */}
    </C.CardView>
  );
}

function JobArea() {
  const playerId = useSelector((state: RootState) => state.player.myInfo.id);
  const cards = useSelector((state: RootState) => state.card);
  const playerOwnCard = (playerId: number, ownerHand: PlayerHand[], majorDict: MajorAttr[], minorDict: MinorAttr[], occupationDict: OccupationAttr[]): (MajorAttr | MinorAttr | OccupationAttr)[] => {
    const allDict: (MajorAttr | MinorAttr | OccupationAttr)[] = [...majorDict, ...minorDict, ...occupationDict];
    const ownCards = ownerHand.filter((card) => card.playerId === playerId);

    let matched: (MajorAttr | MinorAttr | OccupationAttr)[] = [];
    for (const card of ownCards) {
      for (const attr of allDict) {
        if (card.cardId === attr.cardID) {
          matched.push(attr);
          break;
        }
      }
    }
    return matched;
  };

  return (
    <B.JobBtnWrapper>
      {playerOwnCard(playerId, cards.ownerDict, cards.majorDict, cards.minorDict, cards.occupationDict).map((own) => (
        <MyCard cardName={own.name} />
      ))}
    </B.JobBtnWrapper>
  );
}

export default JobArea;

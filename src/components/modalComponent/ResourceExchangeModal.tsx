import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import * as M from './ModalComponent';
import ExchangeItem from './ExchangeItem';

import { ResourceExchange, PlayerHand, MajorAttr, AnimalType } from '../../interface/interfaces';

function ResourceExchangeModal({ playerId, exchangePublish }: ResourceExchange) {
  const player = useSelector((state: RootState) => state.player.players.filter((player) => player.userId === playerId));
  const playerInfo = useSelector((state: RootState) => state.player.myInfo);
  const cards = useSelector((state: RootState) => state.card);

  const findResourceExMajor = (playerId: number, ownerDict: PlayerHand[], dict: MajorAttr[]): MajorAttr[] => {
    const myCards = ownerDict.filter((card) => card.playerId === playerId);
    let matched: MajorAttr[] = [];
    for (const card of myCards) {
      for (const attr of dict) {
        if (card.cardId === attr.cardID && attr.cardType === 'MAJOR' && attr.resourcesToFoodAnyTime !== undefined) {
          matched.push(attr);
          break;
        }
      }
    }
    return matched;
  };

  return (
    <M.Modal modalType='resourceExchangeModal'>
      <M.RXScreen>
        <M.Name>변환소 이름</M.Name>
        <M.ItemSet>
          {/*플레이어가 가지고 있는 자원 수*/}
          <M.Item>
            <img src='img/resource/wood.svg' alt='' /> * {player[0].resources.WOOD}
          </M.Item>
          <M.Item>
            <img src='img/resource/clay.svg' alt='' /> * {player[0].resources.CLAY}
          </M.Item>
          <M.Item>
            <img src='img/resource/stone.svg' alt='' /> * {player[0].resources.STONE}
          </M.Item>
          <M.Item>
            <img src='img/resource/reed.svg' alt='' /> * {player[0].resources.REED}
          </M.Item>
          <M.Item>
            <img src='img/resource/vegetable.svg' alt='' /> * {player[0].resources.VEGETABLE}
          </M.Item>
          <M.Item>
            <img src='img/resource/grain.svg' alt='' /> * {player[0].resources.GRAIN}
          </M.Item>
          <M.Item>
            <img src='img/animal/sheep.svg' alt='' /> * {playerInfo.SHEEP}
          </M.Item>
          <M.Item>
            <img src='img/animal/wildboar.svg' alt='' /> * {playerInfo.WILD_BOAR}
          </M.Item>
          <M.Item>
            <img src='img/animal/cow.svg' alt='' /> * {playerInfo.CATTLE}
          </M.Item>
        </M.ItemSet>
        <M.ExchangeItems>
          {/*바꿀 자원*/}
          {findResourceExMajor(playerInfo.id, cards.ownerDict, cards.majorDict).map((majorCard) => majorCard.resourcesToFoodAnyTime?.map((resource) => (resource.name === 'SHEEP' || resource.name === 'WILD_BOAR' || resource.name === 'CATTLE' ? <ExchangeItem resource={`animal/${resource.name}`} convert={2} /> : <ExchangeItem resource={`resource/${resource.count}`} convert={resource.count} />)))}
          <M.HaveFood>
            <img src='img/resource/food.svg' alt='' /> X{/*보유 음식*/} / 6
          </M.HaveFood>
          {/*얘는 마지막 그리드*/}
        </M.ExchangeItems>
        <M.BtDiv>
          {/*변환하기 누르면 ExchangeItem 컴포넌트의 있는 count값을 가져올 수 있나요?*/}
          <button>변환하기</button>
        </M.BtDiv>
      </M.RXScreen>
    </M.Modal>
  );
}

export default ResourceExchangeModal;

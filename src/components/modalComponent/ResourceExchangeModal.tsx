import * as M from './ModalComponent';
import ExchangeItem from './ExchangeItem';
import React, {useState} from 'react';

function ResourceExchangeModal(){
  return(
  <M.Modal modalType='resourceExchangeModal'>
    <M.RXScreen>
      <M.Name>변환소 이름</M.Name>
      <M.ItemSet> {/*플레이어가 가지고 있는 자원 수*/}
        <M.Item><img src='img/resource/wood.svg'/> <a> * 1</a></M.Item>
        <M.Item><img src='img/resource/clay.svg'/> <a> * 1</a></M.Item>
        <M.Item><img src='img/resource/stone.svg'/> <a> * 1</a></M.Item>
        <M.Item><img src='img/resource/reed.svg'/> <a> * {/*보유갯수*/}</a> </M.Item>
        <M.Item><img src='img/resource/vegetable.svg'/> <a> *{/*보유갯수*/}</a> </M.Item>
        <M.Item><img src='img/resource/grain.svg'/> <a> * {/*보유갯수*/}</a> </M.Item>
        <M.Item><img src='img/animal/sheep.svg'/> <a> * {/*보유갯수*/}</a> </M.Item>
        <M.Item><img src='img/animal/wildboar.svg'/> <a> * {/*보유갯수*/}</a> </M.Item>
        <M.Item><img src='img/animal/cow.svg'/> <a> * {/*보유갯수*/}</a> </M.Item>
      </M.ItemSet>
      <M.ExchangeItems> {/*바꿀 자원*/}
        <ExchangeItem resource = {'sheep'} convert = {2}></ExchangeItem>
        <ExchangeItem resource = {'wildboar'} convert = {3}></ExchangeItem>
        <M.HaveFood><img src='img/resource/food.svg'/> X{/*보유 음식*/} / 6</M.HaveFood> {/*얘는 마지막 그리드*/}
      </M.ExchangeItems>
      <M.BtDiv> {/*변환하기 누르면 ExchangeItem 컴포넌트의 있는 count값을 가져올 수 있나요?*/}
        <button>변환하기</button>
      </M.BtDiv>
    </M.RXScreen>
  </M.Modal>
  );
}

export default ResourceExchangeModal;

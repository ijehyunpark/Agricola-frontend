import React, { useState, Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../redux/reducers/modalReducer';
import * as B from '../boardComponent/BoardComponent';
import * as M from '../modalComponent/ModalComponent';
import styled from 'styled-components';

const BtnAlingColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 5px 0;
`;

function CardBtns() {
  const dispatch = useDispatch();
  return (
    <BtnAlingColumn>
      <B.CardBtn onClick={() => dispatch(openModal('majorCardModal'))}>주요 설비</B.CardBtn>
      <B.CardBtn onClick={() => dispatch(openModal('subCardModal'))}>보조 설비</B.CardBtn>
      <B.CardBtn onClick={() => dispatch(openModal('jobCardModal'))}>직업 카드</B.CardBtn>
    </BtnAlingColumn>
  );
}

export default CardBtns;

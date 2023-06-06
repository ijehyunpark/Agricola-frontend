import React from 'react';
import * as M from './ModalComponent';
import * as B from '../boardComponent/BoardComponent';

function SubCardModal() {
  return (
    <M.Modal modalType='subCardModal'>
      <M.CardModalGrid n={4}>
        <B.Card>sub1</B.Card>
        <B.Card>sub2</B.Card>
        <B.Card>sub3</B.Card>
        <B.Card>sub4</B.Card>
        <B.Card>sub5</B.Card>
        <B.Card>sub6</B.Card>
        <B.Card>sub7</B.Card>
      </M.CardModalGrid>
    </M.Modal>
  );
}

export default SubCardModal;

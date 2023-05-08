import React from 'react';
import * as M from './ModalComponent';
import * as B from '../boardComponent/BoardComponent';

function JobCardModal() {
  return (
    <M.Modal numOfColumns={4} modalType='jobCardModal'>
      <B.Card>job1</B.Card>
      <B.Card>job2</B.Card>
      <B.Card>job3</B.Card>
      <B.Card>job4</B.Card>
      <B.Card>job5</B.Card>
      <B.Card>job6</B.Card>
      <B.Card>job7</B.Card>
    </M.Modal>
  );
}

export default JobCardModal;

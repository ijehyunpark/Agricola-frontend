import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as B from '../boardComponent/BoardComponent';
import * as M from '../modalComponent/ModalComponent';
import MajorCardModal from './MajorCardModal';
import SubCardModal from './SubCardModal';
import JobCardModal from './JobCardModal';

import { RootState } from '../../redux/store';

function ModalController() {
  const isOpen = useSelector((state: RootState) => state.modal);
  const modalList = ['majorCardModal', 'subCardModal', 'jobCardModal', 'gameStatusModal', 'resourceExchangeModal', 'foodSelectionModal', 'finalScoreBoardModal'];

  useEffect(() => {
    console.log(isOpen);
  });

  return (
    <>
      {isOpen['majorCardModal'] ? <MajorCardModal /> : null}
      {isOpen['subCardModal'] ? <SubCardModal /> : null}
      {isOpen['jobCardModal'] ? <JobCardModal /> : null}
    </>
  );
}

export default ModalController;

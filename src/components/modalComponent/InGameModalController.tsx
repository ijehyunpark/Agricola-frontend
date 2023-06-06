import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MajorCardModal from './MajorCardModal';
import SubCardModal from './SubCardModal';
import JobCardModal from './JobCardModal';
import GameStatusModal from './GameStatusModal';
import FinalScoreModal from './FinalScoreModal';

import { RootState } from '../../redux/store';

function InGameModalController() {
  const isOpen = useSelector((state: RootState) => state.modal);
  // const modalList = ['majorCardModal', 'subCardModal', 'jobCardModal', 'gameStatusModal', 'resourceExchangeModal', 'foodSelectionModal', 'finalScoreBoardModal'];

  return (
    <>
      {isOpen['majorCardModal'] ? <MajorCardModal /> : null}
      {isOpen['subCardModal'] ? <SubCardModal /> : null}
      {isOpen['jobCardModal'] ? <JobCardModal /> : null}
      {isOpen['gameStatusModal'] ? <GameStatusModal /> : null}
      {isOpen['finalScoreModal'] ? <FinalScoreModal /> : null}
    </>
  );
}

export default InGameModalController;

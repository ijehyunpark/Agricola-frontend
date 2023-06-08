import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MajorCardModal from './MajorCardModal';
import MyCardModal from './MyCardModal';
import GameStatusModal from './GameStatusModal';
import FinalScoreModal from './FinalScoreModal';
import ResourceExchangeModal from './ResourceExchangeModal';
import FoodSelectionModal from './FoodSelectionModal';
import EquipmentModal from './EquipmentModal';
import { InGameModalControllerProps } from '../../interface/interfaces';

function InGameModalController({ actionPublish, exchangePublish }: InGameModalControllerProps) {
  const isOpen = useSelector((state: RootState) => state.modal);

  return (
    <>
      {isOpen['majorCardModal'] ? <MajorCardModal /> : null}
      {isOpen['myCardModal'] ? <MyCardModal /> : null}
      {isOpen['gameStatusModal'] ? <GameStatusModal /> : null}
      {isOpen['finalScoreModal'] ? <FinalScoreModal /> : null}
      {isOpen['resourceExchangeModal'] ? <ResourceExchangeModal /> : null}
      {isOpen['foodSelectionModal'] ? <FoodSelectionModal /> : null}
      {isOpen['equipmentModal'] ? <EquipmentModal actionPublish={actionPublish} /> : null}
    </>
  );
}

export default InGameModalController;

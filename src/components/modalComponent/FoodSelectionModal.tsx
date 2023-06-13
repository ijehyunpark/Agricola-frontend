import * as M from './ModalComponent';
import styled from 'styled-components';

function FoodSelectionModal() {
  return(
  <M.Modal modalType='foodSelectionModal'>
    <M.FSScreen>
      <button>
        <img src='img/resource/food.svg'/>
        <a>식량 제작하기</a>
      </button>
      <button>
        <img src='img/resource/hungerToken.svg'/>
        <a>구걸 토큰 받고 턴 넘기기</a>
      </button>
    </M.FSScreen>
  </M.Modal>);
}

export default FoodSelectionModal;

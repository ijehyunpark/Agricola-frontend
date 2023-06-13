import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/reducers/modalReducer';
import * as B from '../boardComponent/BoardComponent';
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
      <B.CardBtn onClick={() => dispatch(openModal('myCardModal'))}>나의 카드</B.CardBtn>
    </BtnAlingColumn>
  );
}

export default CardBtns;

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ModalState, openModal, closeModal } from '../../redux/reducers/modalReducer';

const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 5px;
  padding: 10px;
`;

const ModalGrid = styled.div<{ n: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.n}, 240px);
  grid-template-rows: repeat(2, 280px);
  grid-gap: 10px;
  place-items: center;
  /* & > :nth-child(6) {
    grid-column: 2 / span 2;
  } */
`;

const ModalCloseIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

type Props = {
  children: React.ReactNode;
  numOfColumns: number;
  modalType: keyof ModalState;
};

export const Modal = ({ children, numOfColumns, modalType }: Props) => {
  const dispatch = useDispatch();
  return (
    <ModalContainer>
      <ModalBg>
        <ModalCloseIcon
          src='img/etc/close1.svg'
          onClick={() => {
            dispatch(closeModal(modalType));
          }}
        />
        <ModalGrid n={numOfColumns}>{children}</ModalGrid>
      </ModalBg>
    </ModalContainer>
  );
};

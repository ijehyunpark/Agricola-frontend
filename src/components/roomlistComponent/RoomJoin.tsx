import React, { ReactNode } from "react";
import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #EEEEEE;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0px;
  animation: modalFadeIn 0.3s ease-out;
  @keyframes modalFadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -60%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`

export const ModalContent = styled.div`
  height: 50vh;
  width: 70vh;

`
export const Head = styled.div`
display: flex;
height: 45px;;
background-color: #AAAAAA;
  h2{
    padding: 5px;
    margin: 0;
    width: 100%;
  }
`
export const Close = styled.button`
  width: 5%;
`
export const MainContent = styled.div`

`


const RoomJoin = ({ onClose }: {onClose: () => void}) => {
  return (
    <Modal>
      <ModalContent>
        <Head>
          <h2>방 입장</h2>
          <Close onClick={onClose}>Close</Close>
        </Head>
        <MainContent>
          <p>방 이름 : {}</p>
          <p>행동 선택 가능시간 : {}</p>
          <p>닉네임</p>
          <input type="text" placeholder="닉네임을 입력해주세요"></input>
          <button className="joinroom">입장하기</button>
        </MainContent> 
      </ModalContent>
    </Modal>
  );
};

export default RoomJoin;
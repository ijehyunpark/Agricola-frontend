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
export const RoomName = styled.div`
`
export const RoomTimer = styled.div`
`
export const RoomNickname = styled.div`
`
export const Maker = styled.button`
`



const RoomMake= ({ onClose }: {onClose: () => void}) => {
  return (
    <Modal>
      <ModalContent>
        <Head>
            <h2>방 만들기</h2>
            <Close onClick={onClose}>Close</Close>
        </Head>
        <MainContent>
          <RoomName>
            <p>방 이름</p>
            <input type="text" placeholder="방 이름을 입력해주세요"></input>
          </RoomName>
          <RoomTimer>
            <p>행동 선택 가능시간</p>
            <select name="time">
              <option value="">골라</option>
              <option value="30초">30초</option>
              <option value="60초">60초</option>
              <option value="90초">90초</option>
              <option value="120초">120초</option>
            </select>
          </RoomTimer>
          <RoomNickname>
            <p>닉네임</p>
            <input type="text" placeholder="닉네임을 입력해주세요"></input>
          </RoomNickname>
          <Maker>방 만들기</Maker>
        </MainContent> 
      </ModalContent>
    </Modal>
  );
};

export default RoomMake;
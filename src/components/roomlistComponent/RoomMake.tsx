import React, { ReactNode } from "react";
import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: white;
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
  height: 3vh;
  padding: 10px;
  background-color: #EEEEEE;
  p{
    width: 95%;
    font-size: 20pt;
  }
`
export const Close = styled.button`
  width: 5%;
`
export const MainContent = styled.div`

`



const RoomMake= ({ onClose }: {onClose: () => void}) => {
  return (
    <Modal>
      <ModalContent>
        <Head>
          <p>방 만들기</p>
          <Close onClick={onClose}>Close</Close>
        </Head>
        <MainContent>
          <p >방 이름</p>
          <input type="text" placeholder="방 이름을 입력해주세요"></input>
          <p>행동 선택 가능시간</p>
          <select name="time">
            <option value="">골라</option>
            <option value="30초">30초</option>
            <option value="60초">60초</option>
            <option value="90초">90초</option>
            <option value="120초">120초</option>
          </select>
          <input type="text" placeholder="닉네임을 입력해주세요"></input>
          <button className="방만들기">방 만들기</button>
        </MainContent> 
      </ModalContent>
    </Modal>
  );
};

export default RoomMake;
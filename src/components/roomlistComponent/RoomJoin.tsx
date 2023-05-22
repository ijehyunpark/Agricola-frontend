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
  height: 35vh;
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
  div{
    margin: 30px;
  }
  a{
    font-size: 18pt;
  }
`
export const RoomNickname = styled.div`
margin: 30px;
  a{
      font-size: 18pt;
    }
  input{
    margin-left: 10px;
    width: 40vh;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(209, 203, 203);
  }
`
export const JoinDiv = styled.div`
  margin: 0 20px;
  float: right;
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
          <div>
            <a>방 이름 : asd{}</a>
          </div>
          <div>
            <a>행동 선택 가능시간 : asd{}</a>
          </div>
          <RoomNickname>
            <a>닉네임</a>
            <input id="username" type="text" placeholder="닉네임을 입력해주세요"></input>
          </RoomNickname>
          <JoinDiv>
            <button className="joinroom">입장하기</button>
          </JoinDiv>
        </MainContent> 
      </ModalContent>
    </Modal>
  );
};

export default RoomJoin;
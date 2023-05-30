import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #eeeeee;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0px;
  /* animation: modalFadeIn 0.3s ease-out; */
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
`;

export const ModalContent = styled.div`
  height: 35vh;
  width: 70vh;
`;

export const Head = styled.div`
  display: flex;
  height: 45px;
  background-color: #aaaaaa;
  h2 {
    padding: 5px;
    margin: 0;
    width: 100%;
  }
`;
export const Close = styled.button`
  width: 50px;
  height: 40px;
`;
export const MainContent = styled.div``;

export const RoomName = styled.div`
  margin: 30px;
  a {
    font-size: 18pt;
    text-align: center;
  }
  input {
    margin-left: 10px;
    width: 50vh;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(209, 203, 203);
  }
`;
export const RoomTimer = styled.div`
  margin: 30px;
  a {
    font-size: 18pt;
  }
  select {
    margin-left: 10px;
    width: 20vh;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(209, 203, 203);
  }
`;
export const RoomNickname = styled.div`
  margin: 30px;
  a {
    font-size: 18pt;
  }
  input {
    margin-left: 10px;
    width: 50vh;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(209, 203, 203);
  }
`;

export const MakerDiv = styled.div`
  margin: 0 20px;
  float: right;
`;

export const JoinDiv = styled.div`
  margin: 0 20px;
  float: right;
`;

export const Info = styled.div`
  padding: 0px;
  border: none;
  border-radius: 5px;
  height: 90px;
  width: 100%;
  background-color: #d9d9d9;
  &:hover {
    background: #a4a4a4;
  }
  &:active {
    background: #848484;
  }
`;
export const Roominfo = styled.div`
  display: grid;
  border-bottom: 1px solid black;
  width: 100%;
  height: 60px;
  grid-template-columns: 80% 20%;
`;
export const Roomtitle = styled.h2`
  padding: 1 15%;
  margin: auto 20px;
  font-size: 24px;
  text-align: left;
`;
export const Joinplayer = styled.p`
  margin: auto 10%;
  font-size: 24px;
  text-align: center;
`;
export const Timer = styled.p`
  margin: auto 20px;
  height: 30px;
  font-size: 15px;
  text-align: left;
  line-height: 180%;
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 750px;
  height: 100vh;
  margin: 0 auto;
`;

export const ListFrame = styled.div`
  width: 100%;
  height: 520px;
  border-radius: 5px;
  background-color: #eeeeee;
`;

export const ListFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
`;

export const MainHeader = styled.div`
  height: 160px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  background-color: #f99c35;
  background-image: url('img/etc/logo.svg');
  background-position: center;
  background-size: cover;
`;

export const MakeRoomButton = styled.button`
  font-size: ${(props) => props.theme.fontSize.base};
  height: 40px;
`;

export const Roomlist = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  place-items: center;
  height: 290px;
  padding: 10px;
`;

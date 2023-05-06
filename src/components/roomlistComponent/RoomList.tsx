import React, { useState, useCallback } from 'react';
import RoomMake from './RoomMake';
import Room from './Room';
import styled from 'styled-components';

export const Background = styled.div`
  width: 60%; 
  border: 30px;
  margin: 0 auto;
  background-color: #EEEEEE;
  header{
    height: 100px;
    display: grid;
    h1{
      text-align: center;
      font-size: 50pt;
    }
    button{
      align-item: right;
    }
  }
`
export const Roomlist = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`


const RoomList = () => {
  return(
    <Background>
      <header>
        <h1>아그리콜라</h1>
        <button>방만들기</button>
      </header>
      <Roomlist> 
        {/* 반복문 처리로 해야함*/}
        <Room roomTitle = "방제목1" player = {1} timeset = {30}></Room>
        <Room roomTitle = "방제목2" player = {2} timeset = {60}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
        <Room roomTitle = "방제목3" player = {3} timeset = {90}></Room>
      </Roomlist>           
    </Background>
  )
}

export default RoomList;

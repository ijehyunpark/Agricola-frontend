import styled from 'styled-components';

export const Background = styled.div`
  width: 60%; 
  height: 100vh;
  border: 30px;
  margin: 0 auto;
  background-color: #EEEEEE;
  div{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
export const Info = styled.button`
  background-color: #D9D9D9;
  padding: 0px;
  margin 2.5%;
  
  border: none;
  border-radius: 5px;
  height: 90px;
  width: 95%;
  /*방정보*/
  .roomInfo{
    border-bottom: 1px solid black;
    width: 100%;
    height: 60px;
    .title{
      padding: 1 15%;
      margin: auto 10%;
      font-size: 24px;
      text-align: left;
    }
    .pp{
      margin: auto 10%;
      font-size: 24px;
      text-align: right;
    }
  }
  .timer{
    margin: auto 5%;
    height: 30px;
    font-size: 15px;
    text-align: left;
  }
  &:hover{
    background: #A4A4A4;
  }
  &:active{
    background: #848484;
  }
`
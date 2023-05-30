import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 360px;
`;

function RoomLoading() {
  return (
    <Frame>
      <img src='img/etc/spinner.svg' alt='' style={{ width: '50px', height: '50px' }} />
    </Frame>
  );
}

export default RoomLoading;

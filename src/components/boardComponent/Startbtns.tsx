import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface StartbuttonContainerProps {
  blur: boolean;
  hidden: boolean;
}

const StartbuttonContainer = styled.div<StartbuttonContainerProps>`
  ${({ blur }) => css`
    backdrop-filter: ${blur ? 'blur(4px)' : 'none'};
  `}
  position: absolute;
  width: 100%;
  height 100%;
  /* max-width: 2300px; */
  max-width: 1230px;
  max-height: 694px;
  min-width: 1230px;
  z-index: 9998;
  display: flex;
  ${({ hidden }) => hidden && css`
  display: none;
`}
`;
const StartButton = styled.button`
  font-size: 38pt;
  width: 500px;
  height: 100px;
  margin: auto;
  &:disabled{
    background-color: #D9D9D9;
  }
`

function StartBtns() {
  const [gameStarted, setGameStarted] = useState(false);
  const [player, setPlayer] = useState(4);
  const [hidden, setHidden] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    setHidden(true);
  }

  return (
    <StartbuttonContainer blur={!gameStarted} hidden={hidden}>
      {!gameStarted && player !== 4 && (  
            <StartButton disabled>
              GAME START
            </StartButton>
      )}
      {!gameStarted && player === 4 && (
          <StartButton onClick={startGame}>
            GAME START
          </StartButton>
        
      )}
    </StartbuttonContainer>
  );
}

export default StartBtns;
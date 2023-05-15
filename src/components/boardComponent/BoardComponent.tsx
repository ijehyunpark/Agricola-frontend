import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const BoardFrame = styled.div`
  width: 100%;
  /* max-width: 2300px; */
  max-width: 1500px;
  min-width: 1500px;
  margin: auto;
  border-radius: 5px;
  background-image: url('img/tile/board.svg');
  background-position: center;
  background-size: cover;
`;

export const TileFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

export const HalfTile = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FullTile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const TileName = styled.h3`
  width: fit-content;
  padding: ${(props) => props.theme.paddings.xs} ${(props) => props.theme.paddings.base};
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.sm};
  margin: 2px;
  background-color: ${(props) => props.theme.colors.tileNameBg};
  border: 1px solid ${(props) => props.theme.colors.tileNameBorder};
  border-radius: 5px;
`;

export const TileContentWrapper = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tileBg};
  border-radius: 7px;
`;

export const ResourceText = styled.span`
  padding: ${(props) => props.theme.paddings.sm};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding: 3px;
  text-align: center;
`;

export const CardBtn = styled.button`
  padding: ${(props) => props.theme.paddings.sm};
  font-size: ${(props) => props.theme.fontSize.base};
  border-color: transparent;
  border-radius: 5px;
`;

export const Card = styled.div`
  width: 180px;
  height: 240px;
  border: 1px solid black;
`;

import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
     opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  animation: ${fadeIn} 2s ease-in-out forwards;
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
  gap: 5px;

  border: 1px solid black;
`;

export const Tile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlipTile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const TileName = styled.h3`
  min-width: 85px;
  padding: ${(props) => props.theme.paddings.xs} 0;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.sm};
  margin: 2px;
  background-color: ${(props) => props.theme.colors.tileNameBg};
  border: 1px solid ${(props) => props.theme.colors.tileNameBorder};
  border-radius: 5px;
`;

export const TileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 85px;
  background-color: ${(props) => props.theme.colors.tileBg};
  border-radius: 7px;
`;

export const StackPlace = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 24px;
  /* gap: -10px; */
`;

export const StackResource = styled.img<{ left: number }>`
  position: absolute;
  left: ${(props) => props.left * 10}px;
  width: 24px;
  height: 24px;
`;

export const StackCount = styled.span`
  position: absolute;
  bottom: -5px;
  right: -10%;
  border-radius: 100%;
  border: 1px solid black;
  width: 8px;
  height: 8px;
  line-height: 8px;
  text-align: center;
  padding: ${(props) => props.theme.paddings.xs};
  font-size: ${(props) => props.theme.fontSize.sm};
  background-color: orange;
`;

export const TileBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border-radius: 7px;
  font-size: ${(props) => props.theme.fontSize.lg};
`;

export const ResourceText = styled.span`
  padding: ${(props) => props.theme.paddings.sm};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const Icon = styled.img<{ width?: string | number; height?: string | number }>`
  width: ${(props) => (props.width === undefined ? '24px' : props.width)};
  height: ${(props) => (props.height === undefined ? '24px' : props.height)};
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


export const Home1 = styled.div`
  position: relative;
  grid-area: home;

  &::after,
  &::before {
    content: "11";
    position: absolute;
    background-color: #000;
  }

  // Bottom border
  &::after {
    left: 0;
    right: 0;
    bottom: -5px;
    height: 1px;
  }

  // Right border
  &::before {
    top: 0;
    bottom: 0;
    right: -5px;
    width: 1px;
  }

  &:last-child {
    // Right border for the last Home
    &::before {
      background-color: transparent;
    }
  }

  &:nth-child(5n) {
    // Bottom border for the last Home in each row
    &::after {
      background-color: transparent;
    }
  }

  &:nth-child(n+11) {
    // Top border for the Homes in the last row
    &::before {
      top: -5px;
      height: 1px;
      width: auto;
    }
  }

  &:nth-child(5n+1) {
    // Left border for the Homes in the first column
    &::after {
      left: -5px;
      width: 1px;
      height: auto;
    }
  }
`;

export const HomeTilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  padding: 5px; // Space for the fences
  width: 100%;
  height: 100%;
`;

export const Home = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid black;
  font-size: ${(props) => props.theme.fontSize.base};
  
`;

export const HomeTile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  onClick: () => void;
`;

export const HomeContentWrapper = styled.div`
  position: relative;
  top: 10px;
  width: max-content;
  width: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  justify-content: flex-end;
  gap: 0px;
  border-radius: 7px;
`;

export const HomeBtnWrapper = styled.div`
  position: relative;
  left: 220px;
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-color: white;
  border-radius: 7px;
`;
export const HomeBtn = styled.button`
  width: 50px;
  height: 20px;
  font-size: ${(props) => props.theme.fontSize.base};
  border-color: transparent;
  border-radius: 7px;
`;

export const JobBtnWrapper = styled.div`
  display: flex;
  width: 650px;
  height: 120px;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  background-color: white;
  border-radius: 7px;
`;


export const JobDetails = styled.div`
  width: 200px;
  height: 300px;
  background-color: #f0f0f0; // 设置背景颜色以使其可见
  visibility: hidden; // 默认设置为隐藏
  position: absolute; // 设置为绝对定位，以便它可以浮动在其它内容上方
`;

export const JobBtn = styled.button`
  overflow: visible;
  position: relative;
  min-width: 100px;
  width: 100px;
  height: 80px;
  font-size: ${(props) => props.theme.fontSize.base};
  border-color: transparent;
  border-radius: 7px;
  margin-right: 10px;
  margin-top: 10px;
  &:hover ${JobDetails} {
    visibility: visible;
  }
`;

export const FenceBtnColumn = styled.button`
  width: 10px;
  height: 80px;
  font-size: ${(props) => props.theme.fontSize.base};
  border-color: transparent;
  border-radius: 7px;
  background-color: ${props => props.color};  
`;

export const FenceBtnRow = styled.button`
  
  width: 80px;
  height: 10px;
  font-size: ${(props) => props.theme.fontSize.base};
  border-color: transparent;
  border-radius: 7px;
  background-color: ${props => props.color};  
`;

export const FenceContentWrapper = styled.div`
  position: relative; // 使用相对定位
  top: 10px;
  width: max-content;
  width: max-content;
  display: flex;
  flex-direction: row; // 使子元素从右向左排列
  align-items: center;
  background-color: white;
  justify-content: flex-start; // 让子元素从容器的开始边界开始排列
  gap: 20px;
  border-radius: 7px;
`;


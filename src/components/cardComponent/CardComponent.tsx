import styled from 'styled-components';

export const CardView = styled.div`
  overflow: visible;
  position: relative;
  min-width: 100px;
  width: 100px;
  height: 80px;
  font-size: ${(props) => props.theme.fontSize.base};
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  border-radius: 7px;
  margin-right: 10px;
  margin-top: 10px;
`;

export const SelectableCard = styled.div`
  position: relative;
  width: 134px;
  height: 205px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #fff;
`;

export const RequirementBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 5px;
`;

export const CardName = styled.div`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.md};
  margin-top: 35%;
`;

export const Requirement = styled.img`
  width: 24px;
  height: 24px;
`;

export const CardScore = styled.span`
  position: absolute;
  top: 35%;
  left: 5px;
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

export const CardDesc = styled.div`
  font-size: ${(props) => props.theme.fontSize.base};
  text-align: center;
  margin-top: 25px;
  padding: 5px 7px;
  height: 93px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.tileBg};
  text-overflow: ellipsis;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #a1a1a1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #ddd;
    margin: 12px 0;
  }
`;

export const CardGrid = styled.div<{ n: number }>`
  display: grid;
  padding: 35px;
  grid-template-columns: repeat(${(props) => props.n}, 1fr);
  grid-template-rows: repeat(2, 205px);
  grid-gap: 5px;
  place-items: center;
  /* background-image: url('img/card/cardTable.svg');
  background-position: center;
  background-size: cover; */
  background-color: ${(props) => props.theme.colors.bgPrimary};
  border-radius: 5px;
`;

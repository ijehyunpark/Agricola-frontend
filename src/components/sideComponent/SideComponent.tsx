import styled from 'styled-components';

export const StatusColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
  width: 90%;
  height: 100%;
  padding: 10px;
`;

export const SideTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 5px;

  /* height: 10%; */
  background-color: ${(props) => props.theme.colors.tileBg};
  border: 1px solid black;
  border-radius: 3px;
`;

export const TimerText = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  padding-left: ${(props) => props.theme.paddings.sm};
`;

export const TimerFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatusFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 5px;
  /* height: 22%; */
  border: 1px solid black;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.tileBg};
`;

export const StatusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const playerSequence = styled.span`
  width: 10px;
  height: 10px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.darkGray};
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const PlayerName = styled.span`
  padding: 5px;
  font-size: ${(props) => props.theme.fontSize.md};
`;
export const PlayerImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`;

export const StatusContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(2, 280px); */
  grid-gap: 7px;
  place-items: center;
`;

const ResourceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const ContentIconLg = styled.img`
  width: 32px;
  height: 32px;
`;


export const ScoreBoardBtn = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background-image: url('img/etc/scoreBoard.svg');
  background-position: center;
  background-size: cover;
  background-color: ${(props) => props.theme.colors.tileBg};
`;


const ContentCount = styled.span`
  font-size: ${(props) => props.theme.fontSize.base};
  padding-left: 5px;
`;

type StatusResourceProps = {
  resourceSrc: string;
  resourceCount: number;
  resourceMaximumCount?: number;
};

type Profile = {
  nickname: string;
  imgSrc: string;
};

export const PlayerProfile = ({ nickname, imgSrc }: Profile) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PlayerImg src={imgSrc} />
      <PlayerName>{nickname}</PlayerName>
    </div>
  );
};

export const StatusResource = ({ resourceSrc, resourceCount }: StatusResourceProps) => {
  return (
    <ResourceWrapper>
      <ContentIcon src={`img/${resourceSrc}.svg`} />
      <ContentCount>{resourceCount}</ContentCount>
    </ResourceWrapper>
  );
};

export const StatusResourceLimited = ({ resourceSrc, resourceCount, resourceMaximumCount }: StatusResourceProps) => {
  return (
    <ResourceWrapper>
      <ContentIcon src={`img/${resourceSrc}.svg`} />
      <ContentCount>
        {resourceCount}/{resourceMaximumCount}
      </ContentCount>
    </ResourceWrapper>
  );
};

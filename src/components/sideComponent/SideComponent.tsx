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

export const StatusFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 5px;
  height: 20%;
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
  padding: 5px;
  font-size: ${(props) => props.theme.fontSize.sm};
`;

export const PlayerName = styled.span`
  padding: 5px;
  font-size: ${(props) => props.theme.fontSize.sm};
`;
export const PlayerImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

export const StatusContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(2, 280px); */
  grid-gap: 5px;
  place-items: center;
`;

const ResourceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const ContentCount = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
`;

type StatusResourceProps = {
  resourceSrc: string;
  resourceCount: number;
  resourceMaximumCount?: number;
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

export const SideTop = styled.div`
  width: 100%;
  padding: 5px;
  height: 10%;
  border: 1px solid black;
`;

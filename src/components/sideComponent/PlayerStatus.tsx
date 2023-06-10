import * as S from './SideComponent';
import { useDispatch, useSelector } from 'react-redux';
import { updateMyAnimals, updateResident } from '../../redux/reducers/playerReducer';
import { openModal } from '../../redux/reducers/modalReducer';
import { RootState } from '../../redux/store';
import { Player, KeyofAnimal, PlayerBoardTile } from '../../interface/interfaces';

function PlayerStatus() {
  const dispatch = useDispatch();
  const playersObj = useSelector((state: RootState) => state.player);

  const countAnimal = (animalType: KeyofAnimal, fields: PlayerBoardTile[][]): number => {
    let count = 0;
    fields.forEach((row) => {
      row.forEach((element) => {
        if (element !== null) {
          if (element.petRoom !== null && element.petRoom.animal.name === animalType) {
            count += element.petRoom.animal.count;
          }
          if (element.fieldType === 'BARN' && element.animal !== undefined) {
            if (element.animal.name === animalType) {
              count += element.animal.count;
            }
          }
        }
      });
    });
    dispatch(
      updateMyAnimals({
        count: count,
        name: animalType,
      })
    );
    return count;
  };

  const countBarn = (fields: PlayerBoardTile[][]): number => {
    let count = 0;
    fields.forEach((row) => {
      row.forEach((element) => {
        if (element !== null) {
          if (element.fieldType === 'BARN' && element.animal !== undefined) {
            count += element.animal.count;
          }
        }
      });
    });
    return count;
  };

  const countResident = (fields: PlayerBoardTile[][]): number => {
    let count = 0;
    fields.forEach((row) => {
      row.forEach((element) => {
        if (element !== null) {
          count += element.residentNumber;
        }
      });
    });
    updateResident({
      residentCount: count,
    });
    return count;
  };

  const countFence = (rowFence: boolean[][], colFence: boolean[][]): number => {
    let count = 0;
    rowFence.forEach((row) => {
      row.forEach((element) => {
        if (element) {
          count += 1;
        }
      });
    });
    colFence.forEach((row) => {
      row.forEach((element) => {
        if (element) {
          count += 1;
        }
      });
    });
    return count;
  };

  return (
    <S.StatusColumn>
      <S.SideTop>
        {/* <S.TimerFrame>
          <S.ContentIconLg src='img/etc/timer.svg' />
          <S.TimerText>00:00</S.TimerText>
        </S.TimerFrame> */}
        <S.ScoreBoardBtn onClick={() => dispatch(openModal('gameStatusModal'))} />
      </S.SideTop>
      {playersObj.players.map((player: Player, i) => {
        return (
          <S.StatusFrame key={i}>
            <S.StatusHeader>
              <S.PlayerProfile nickname={playersObj.participants[i].username} imgSrc={'img/etc/profile.svg'} />
              {/* <S.playerSequence>1</S.playerSequence> */}
            </S.StatusHeader>
            <S.StatusContent>
              <S.StatusResource resourceSrc={'resource/wood'} resourceCount={player.resources.WOOD} />
              <S.StatusResource resourceSrc={'resource/clay'} resourceCount={player.resources.CLAY} />
              <S.StatusResource resourceSrc={'resource/stone'} resourceCount={player.resources.STONE} />
              <S.StatusResource resourceSrc={'resource/reed'} resourceCount={player.resources.REED} />
              <S.StatusResource resourceSrc={'resource/grain'} resourceCount={player.resources.GRAIN} />
              <S.StatusResource resourceSrc={'resource/vegetable'} resourceCount={player.resources.VEGETABLE} />
              <S.StatusResourceLimited resourceSrc={'resource/food'} resourceCount={player.resources.FOOD} resourceMaximumCount={countResident(player.playerBoard.fields) * 2} />
              <S.StatusResource resourceSrc={'resource/hungerToken'} resourceCount={player.resources.BEGGING} />

              <S.StatusResource resourceSrc={'animal/sheep'} resourceCount={countAnimal('SHEEP', player.playerBoard.fields)} />
              <S.StatusResource resourceSrc={'animal/wildboar'} resourceCount={countAnimal('WILD_BOAR', player.playerBoard.fields)} />
              <S.StatusResource resourceSrc={'animal/cow'} resourceCount={countAnimal('CATTLE', player.playerBoard.fields)} />
              <div />
              <S.StatusResourceLimited resourceSrc={'etc/human_green'} resourceCount={countResident(player.playerBoard.fields)} resourceMaximumCount={5} />
              <S.StatusResourceLimited resourceSrc={'resource/fence'} resourceCount={countFence(player.playerBoard.rowFence, player.playerBoard.colFence)} resourceMaximumCount={15} />
              <S.StatusResourceLimited resourceSrc={'resource/barn'} resourceCount={countBarn(player.playerBoard.fields)} resourceMaximumCount={4} />
            </S.StatusContent>
            <S.StatusContent></S.StatusContent>
          </S.StatusFrame>
        );
      })}
    </S.StatusColumn>
  );
}

export default PlayerStatus;
